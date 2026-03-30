+++
title = "Real-time machine learning: tips and tricks"
authors = ["Dany Chaker"]
date = 2025-12-06
insert_anchor_links = "heading"
+++


{% crt() %}
```
       .       .
            .  |  .
             \ | /    +
     *        \|/
         --==> * <==--   '
        +     /|\   .
             / | \
     .      '  |  '       *
               |
         .     '    .
```
{% end %}

More than an year ago I developed a presentation summarizing all the practices,
kindly named as _tips and tricks_, for maintaining and operating real-time
machine learning models at the company I work for. This was first an internal
presentation that turned into a meetup presentation that turned into an editted
article. After more than one year of compiling this knowledge I decided to
revisit them and record an updated version of this text in my own website.

You can check the resources for the meetup talk, in portuguese, and the editted
article, in portuguese and english.

{{ youtube(id="4xZUpwiiJ68") }}

**[Practices to scale Machine Learning operations](https://building.nubank.com/practices-to-scale-machine-learning-operations/)**

# The real-time subset of this article

Real-time machine learning can represent various types of applications and
due this wide range of possibilities I would like to precisely describe what
I've been doing such that you can make the appropriate approximations
to other contexts.

I work with fraud prevention in a financial institution.
This means that I work developing automated decision systems
(not necessarily just machine learning models) that identify
_events_ that shouldn't happen, either by a legal violation or by a third party
malicious action. The key element here is that to provide good customer
experience and avoid tragedies is that we must identify the fraud in a given
event at moment it is happening. At the exact "approval" time, otherwise money
moves too fast for you to catch up later.

The most obvious and direct example is a credit card transaction. Imagine you
buying something at a sketchy online store, you know it is sketchy but
the price is too good to not take. You buy the thing and it never arrives at
your door. When you check the store again, it disappeared. A couple days later
misterious purchases notifications reach you and you know exactly how your card
numbers were leaked.

Applying machine learning to this problem means that at the moment a credit
card is getting our systems, real-time, you must decide to approve it or not.
The challenges of maintaining such systems start with respecting the SLA,
usually milliseconds or seconds, and applying this analysis to millions
of customer and pontentially billions of transactions.

My context is hyper focused in building models and systems that
scale very well to millions of customers, billions of transactions, and
can answer synchronously in milliseconds.

## A comparison with Batch models

To highlight the real-time elements of my context I like to compare with
batch models which, in my experience, are the preferred first approach
to any team trying to adopt automated decisions.

Batch models usually run in a fixed schedule, every once in a day,
a week, or a couple of hours. They take all the new instances that
were generated in the last time window and apply their predictions
to it. They are deployed in ETL/ELT systems and consume very big tables
usually. Real-time models consume multiple one row tables in the
other side.

These input tables for batch models may be composed of multiple
other tables and upstream sources that combined by a batch processing
system like Spark, Pandas, Databricks, Big Query. Meanwhile, real-time
models seek information in various forms, feature store like systems
with pre-computed data, batch tables that were loaded in some form
of fast database, the true source of the data in the form of a 
microservice and its APIs or other intermediate aggregation
services that hold temporary, short-lived data, just for the purpose
of building the features for a real-time model.

You can see that batch models can take up to the interval time duration
to finish its predicitions in this comparison. They have a lot more room
to fail, you can retry multiple times, and failures are not directly or
instantly forwarded to end customers.

The real challenges of maintaining real-time models don't live in the
model itself, there are challenges at optimizing model python code, but
rather in retrieving all the features required for its usage.

## One possibility for building micro services that hold models

The number of different possible way you could arange architectural 
components in order to having a functional decision making system is
probably greater than the number of Rubik's cube states combined with
the number of chess boards, specially when you consider how hard
people's opinions are on various subsets of "systems architecture".

In this section I will describe the particular choices made at the company
I work and try to justify them. Some of these justifications will be
completely local and historical to the company's context in time and space,
so don't take them so hard.

### The other language

I expressed very briefly my opinion that we don't get to choose any of the
programming languages that we use professionaly or that just a very small
group of people have the privilege of making this decision.

In the company I work for it is no different. The weapon of choice was
clojure! So, the first thing to keep in mind when design automated decision
systems is that the entire company tooling, automated checks, native
integrations were created for clojure micro services.

This effect increases a lot the friction to break the clojure standard and
the practicity to integrate with other platforms and solution is also
greatly improved.

As you can obviously imagine we are not deploying our machine learning models
in clojure. We are developing, training and deploying them in python! The
main reason is that there is just so much of machine learning work already
done in public available packages and it is the standard of the industry.

The outcome of these two elements is a two language design. There is the
majority of services written in clojure and very few services holding
machine learning models written in python.

### The design

We choose to minimize the python "surface area" in the systems. Everything
that can be done in clojure should be done in clojure. To be clear, retrieving
data from other services, performing aggregations on historical data, and
applying decisions to model predictions are all task that we decided to execute
in clojure.

What is left to "python" is just holding a thing layer of translation components
and the model it self. We try to keep its interface as close as possible to a
"feature vector" or a flat json schema from feature names to feature values.
Still, there is a wrapper written in clojure that holds "common tasks" that
all models should have like authentication, propagation of predictions to kafka
and the ETL. This bundle is joined together in a Kubernetes pod applying the
"side car" pattern.

With this design we achieve:
- No python directly exposed to other services, just clojure.
- Minimal python deployment. Just the model, nothing else
- Anything that we need to apply to all deployed models
  can be included in the "wrapper" and instantly adopted.

{% crt() %}
```
         ┌──────────────────────────────────────────────────────────┐
         │ K8s Pod                                                  │
         │ ┌────────────────────────┐           ┌─────────────────┐ │
         │ │ Wrapper                │           │ Model           │ │
Incoming │ │ (Clojure)              │ Forwarded │ (Python)        │ │
Request  │ │                        │ Request   │                 │ │
─────────┼→┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼──────────→│ ┌─────────────┐ │ │
         │ │                        │           │ │  In Schema  │ │ │
         │ │ - Standard             │           │ ├─────────────┤ │ │
         │ │   Endpoints            │           │ │ In Adapter  │ │ │
         │ │ - Authentication       │           │ ├─────────────┤ │ │
         │ │ - Propagation          │           │ │    Model    │ │ │
         │ │   to Kafka and         │           │ ├─────────────┤ │ │
Outgoing │ │   the ETL              │ Forwarded │ │ Out Adapter │ │ │
Response │ │                        │ Reponse   │ ├─────────────┤ │ │
←────────┼─┼┄┄┄┄┄┄┄┄◌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼←──────────│ │ Out Schema  │ │ │
         │ │        ┆ Logs every    │           │ └─────────────┘ │ │
         │ │        ┆ model         │           │                 │ │
         │ │        ┆ prediction    │           │                 │ │
         │ │        ┆ to the ETL    │           │                 │ │
         │ └────────┼───────────────┘           └─────────────────┘ │
         └──────────┼───────────────────────────────────────────────┘
                    V
```          
{% end %}

There are downsides to this but I am not prepared yet to write about them.
Soon, I will articulate the limitations of this design and what would be
the next generation of this architecture for the next 10 years. Some
of these limitations are already explained in my
["The future of Machine Learning"](@blog/on-the-future-of-machine-learning/)
article.

### A closer look at the Model

Let's discuss a bit more in focus what is happening in the model pipeline.
With this minimalistic approach in mind, let's expand each section:

#### 1. **In Schema**

The default format for inter service communication is json.
The default choice for the input schema is flat structure with feature
names as keys and feature values as values. There are other choices

There are other choices to this like when you have to aggregate something
to turn into a feautres, like when you want to count and sum the amount
of a transaction list. You have two basic choices: to aggregate in the
requesting service or to provide a the raw list and aggregate inside the
in adapter or the model pipeline.

Certainly, if you can do more work in the model pipeline the gap for
discrepancies between batch results will be smaller but that can
pontentially break one assumption that we like a lot: "n rows in, n rows out".

This assumption is the assumption that if you send N instances of prediciton
you must get back N instances with their predictions. In our practices
it feels odd to send 10 rows in and get only one row back, specially when this
work must be executed in the adapter because, for optimization purposes, you
decided to aggregate this in a dataset or a datapipeline outside the model
pipeline.

Breaking this assumption also complicates the usage of the ETL
logging machanisms, that also assume this. It requires you to start working
with list values inside parquet tables and then reapplying the in-adapter in these
values to reproduce what the model received. Awful thing.

If you end up creating a big in-adapter you increase the gap for discrepancies
and start doing a lot of work at a place we don't have the same tools to tackle
problems. Python was notably bad at asynchronous features
(*until 3.14 at least, let's see how things evolve) and tackling multiple
heavy liffiting tasks in the in adapter seemed like an objective worse option
than doing all the pre-aggragation tasks in the requesting service.

So, in general we like:
- Flat schemas. `{"feature-name": value}`
- One prediction instance in, one prediction instance out.


#### 2. **In Adapter**
Again, the default format for inter service communication is json.
The first step of getting model predictions is to translate from json to
something the model can understand. Our default choice is dataframes,
Pandas dataframes.

The first key element of this in-adapter approach is to keep the model interface
uniform. The model is a sequence of steps that always gets a table as input
and returns a table as output preserving the same input schema and values but
adding new coluns to it: the raw prediction, some kind of calibrated prediction and
fitted empirical cumulative distribution values (ECDF) are options.

That's why keeping the flat schema is so convenient, it simplifies a lot the
in-adapter.

We turn this flat schema into a single row dataframe and forward it to the
model. Even the assembly of all these components, in-schema, in-adapter,
the model, out-adapter, and out-schema are not hand made. There is an
assembler template that, if you are not going to do anything different
from this pattern, automatically assemble the pipeline from a config file
with default implementations.

> A Note on Pandas
> 
> Pandas dataframes are notably slow. They set a historical mark when first
> released but now a days they feel outdated. With the recent advancements
> of the arrow backend you can mitigate performance issues but Polars was
> a true hit. Beyond providing a much performant implementation its API
> should be the standard API for dataframes for me.


#### 3. **Model**

The model is the serialized artifact generated by the training process.
For this discussion you can assume we have a standard way of training
and serializing the model, we use pickle, that can later be referenced
at deploy time and dynamically loaded into the pipeline temapled mentioned 
in the in-adapter section.

What is important to highlight is that the model pipeline it self is
another sequence of steps with the "table in, table out" interface.

##### **short detour: fklearn**

This "table in, table out" is the interface introduced by fklearn,
a functional inspired interface for machine learning pipelines. It
is open sourced and the details of its creations can be checked in
this two part post in the company's blog:

- [fklearn part 1](https://building.nubank.com/introducing-fklearn-nubanks-machine-learning-library-part-i-2/)
- [fklearn part 2](https://building.nubank.com/introducing-fklearn-nubanks-machine-learning-library-part-ii/)

You can also check:
- [fklearn github repo](https://github.com/nubank/fklearn)
- [fklearn pypi page](https://pypi.org/project/fklearn/)

fklearn introduces a bunch of wrappers to usual sklearn, xgboost,
lightbm, catboost and tensorflow packages that always follow the same
API:

```python
                                
@curry                      
def learner(
    df: DataFrame,
    **kwargs  # this kwargs can be any hyper parameters of you learner
) -> tuple[Callable[[...], DataFrame], DataFrame, dict]:
  # train the model first
  model = train(df, **kwargs)

  # then inject the state in a function
  def apply_fn(df: DataFrame) -> DataFrame:
    return model(df)

  # return:
  # 1. the function with the injected state for future application
  # 2. the function applied to the training data
  # 3. arbitrary "logs", data that may be useful
  return apply_fn, apply_fn(df), logs
```

This uniform API let's us create uniform pipelines without concerning of their
own methods and representation, basically every machine learning framework has
its own data type. We just translate in, train, and translate out and we can
work confident that any fklearn building block will respect this API.

This is an extremelly powerful abstraction that simplifies a lot the
construction of complex model pipelines, specially when you need to
do more after work after training the "main" model. Still may not
work for LLMs but extremelly convenient for building medium and large
scale models.
(_I make a comment about model size in my
["The future of Machine Learning"](@blog/on-the-future-of-machine-learning/)_)

The usual practice, when testing and adopting new frameworks, is to simply
wrap them in the fklearn interface and introduce in a existing
model pipeline or swap a previous implementation.
You can see that in this description
absolutely everthing remains constant, which improves a lot productivity
in the experimentation, prototyping and deployment phases.

##### **Back to model pipelines**

With the fklearn mode of building models loaded let's break down the model
pipeline as a simple sequence of steps:

Let's call the "model" as "model pipeline" and call the main
predictor/learner in the pipeline as the "model":

{% crt() %}
```
               ┌─────────────────────────────────────┐ 
               │ Model Service                       │ 
               │ (Python)                            │ 
               │                                     │ 
               │ ┌─────────────────────────────────┐ │ 
               │ │ In Schema                       │ │ 
               │ ├─────────────────────────────────┤ │ 
               │ │ In Adapter                      │ │ 
               │ ├─────────────────────────────────┤ │ 
               │ │ Model Pipeline (pickled thing)  │ │ 
               │ │ ┌─────────────────────────────┐ │ │ 
               │ │ │ categorical trucation       │ │ │ 
               │ │ ├─────────────────────────────┤ │ │ 
               │ │ │ categorical encoder         │ │ │ 
               │ │ ├─────────────────────────────┤ │ │ 
               │ │ │ fillers and imputators      │ │ │ 
               │ │ ├─────────────────────────────┤ │ │ 
               │ │ │ main predictor, the "model" │ │ │ 
               │ │ ├─────────────────────────────┤ │ │ 
               │ │ │ calibration                 │ │ │ 
               │ │ ├─────────────────────────────┤ │ │ 
               │ │ │ ecdf mapping                │ │ │ 
               │ │ └─────────────────────────────┘ │ │ 
               │ ├─────────────────────────────────┤ │ 
               │ │ Out Adapter                     │ │ 
               │ ├─────────────────────────────────┤ │ 
               │ │ Out Schema                      │ │ 
               │ └─────────────────────────────────┘ │ 
               └─────────────────────────────────────┘ 

layers and layers and layers, they never end
```          
{% end %}

This is the heart of the entire prediction process and the step that should
take the most of the prediction time. It was a true suprise when some people
started profilling various sections of the pipeline to realize the requests
were 80%+ of their total time in the schemas and adapters!

#### 4. **Out Adapter**

After we get the single row output dataframe, we translate it back to a dictionary
form in other to serialize it back again to json. In the output adapter we usally
throw away most of the features and keep just what is important for taking downstream
decisions. When it is absolutely necessary to keep the all the output, we build two
top level keys: what is relevant to the requesting service and what is only
relevant for the etl propagation.

Coercing types back to something that is json serializable is one of the most boring
tasks I have done in my machine learning engineer life.

#### 5. **Out Schema**

Finally we validate the structure of the output of the out adapter as sanity
check. If it fails we return a 500 and that is life. Usually, we can prevent
most of the serialization issues in the adapter but who knows what can happen.

The other services have a very interesting contract
(check this article on how they done it:
[Why We Killed Our End-to-End Test Suite](https://building.nubank.com/why-we-killed-our-end-to-end-test-suite/))
based testing tool but, as mentioned, it only works for clojure services.
We hope to use such structure in the future but not possible for now.

#### Summary on the model deployment structure

This is a very uniform and standard way of approaching the deployment of
machine learning models inside services. I will disclose and discuss a bit
more the technology choices of all these stages but what is important to
know is that if you are building a "standard" model, i.e. a model that
can fit the described structure, you get the entire deployment almost for
free with just minor configuration stages. This yields a great uniformity
over all real-time models and great productivity for both Data Scientists
and Machine Learning Engineers.

Without more blabla,
_Let's begin the tips and tricks!_

# The techniques

## Cost optimization, or just doing less

### Remember of unnecessary redundancy

One of the strategies to scale adopted by the company was to apply sharding,
not just for databases
([Managing Cloud Limits](https://building.nubank.com/managing-cloud-limits/)) but
for everything, including services, kafka and models.

The issue with sharding is that although it works very well for scaling databases
it may introduce unnecessary redundancy for shareable workloads specially 
statless services like model services. Given that shards are relatively independent
and that, in order to keep high availability, we required a minimum of 2 independent
work units (pods in Kubernetes), if we have 20 shards we already starts with a minimum of
40 working units.

For many usecases even using fractions of resources was already a lot making the
bottom of costs very high just to start. Besides that, tasks that operates with
a shard bias would be under utilized in low load shards and under pressure in high
load shards (there is the possibility to make different resource allocations per
shard but we took an even better approach). We observed many times models going
down because of hicups in resource allocation, one pode goes down, the other
gets overloaded and model down.

The strategy to overcome that was to get rid of sharded model deployment. Take a global
deployment setting where requests from all shards goes to a single global set of model
pods. This reduced the minimum, since now we can keep the minimum at a global level,
and reduced the under utilization buffer since shard bias didn't matter anymore.

This was also good to improve mini batching efficiency since we could keep latency
relatively the same value but increasing the through put.

### Filter as much as possible

Just doing less is the best optimization possible. The trick we employ is,
when possible, to create some kind of rough filter, often called "pre policy"
to control model eligibility and pontentially save precious units of work.

If a given customer or transaction can be considered "not applicable" from
other fast acquiring features and in simple logic form we can return a
preliminary, simpler, result and not waste all the resources required
to run a model. Otherwise, we proceed to a regular model scoring.

The effect is dramatic. Here are some examples (as of October 2024):
- The identity fraud model that runs in various events
  gets reduce from a raw count of events of 2800 events per second to
  only **20 events per second**.
- The theft model is designed to work in the same events. With its
  filter we can reduce to only **200 events per second**.

This technique is not always possible to be applied. Sometimes you
are trying to identify exactly what you designed your model for and
if a pre-policy was possible to be done you wouldn't be building the
model in the first place.

- The credit card transaction model can't use a pre policy.
- The mule accounts model can't use a pre policy.

### Optimize your dependencies graph

Dependencies graphs can be the source of countless problems and headaches.


This is one typical dependency graph from one of the models that run in my
company:
{% crt() %}
```
Inputs
id-1              id-2  id-3   id-4
─┼─────────────────┼─────┼──────┼───
 ├─┬───┬──┬──┬─┬─┐ │     ├─┐    │
 │ ●   ●  │  ● ● ● │     ● ●    ●
 │ │   │  │  │ │ └─●
 │ ●   ●  │  │ │
 │     ├──●  │ ├─┬─┬─┬─┐
 │     ●     │ ● ● ● ● ●
 ├─┬─┐ ├─┬─┐ ├─┬─┬─┬─┬─┬─┬─┐
 ● ● ● ● ● ● ● ● ● ● ● ● ● ●
```
{% end %}

In this ascii art we see a representation dependency graph. Each circle
represents a request to an external service to fetch information required
to build the final set of features. We start from the top, with imediately
available information like the `id-1`, `id-2`, `id-3`, `id-4`, and we proceed
down reaching out for features. The lines represent dependencies, so if a circle
comes above it must finish before we can execute a circle below.
In some cases some intermediate information is required before we can reach
to the information we want. This is typical to cases where you have a secondary
identifier and you need to get the primary identifier to then query the
main table for the features. Some times you need two identifiers,
only the combination of them fully identifies the entity you are looking for,
to find the desired features.

As you can see, there are 32 requests to external services to fetch
features. The longest dependency chain has 4 requests in sequence.
As we you may imagine, if we execute these requests in sequence, and
each one of them takes 100 milliseconds to complete, we would wait
a total of 3200 milliseconds to get all features ready. In this
particular case the model was required to answer in less than 700
milliseconds.

In order to achieve that, we paralelize all the requests with
native clojure async features, future and delays. This way the total
time to retrieve all features gets bounded by the longest chain, 400
milliseconds in this case, leaving 300 milliseconds for the additional
model request and the logic that turns model predictions into actions.


#### Keep your controllers simple

But building this type of controller gets complicated really fast and your logic start to
get completely filled with deref operators and keeping track of errors in deep chains of
dependencies becomes a hard task. Also, sometimes you need to transform previously
fetched information into a new representation in order to call the next service, which
interperse you controller with impure side effects pure logic computations, making really
hard to test the full behavior and map all corner cases.

Recently, the company open sourced [nodely](https://github.com/nubank/nodely), a tool
built exactly to tackle these complex graphs and assist separating effectful
computations from pure logic, providing a simpler mental model and better interception
points for testing. It topologically sorts the graph and optimally executes it for you.
Maintaining nodely graphs is still hard, as it is to build and represent the entire
computational graph, but much simpler than hand crafting them from vanilla clojure
(future and delay), or `core.async` building blocks. One of the nice features of nodely
is that it supports many backends and styles of actually exectuing the graph.

If you are also building complex feature or dependency graphs consider taking a look at
it, not just for the library itself but it also presents a comparison with similar work
and the differences between them.


#### Use as much as possible asynchronous techniques
#### Keep tight control of timeouts
#### Use something clever to do the hard work for you
#### Monitor them closely
#### Go beyond your borders for optimal performance

### Optimize the model service and the model pipeline


## Simplicity is the key to success, or how to avoig being overwhelmed by your own complexity

### Split long term and short term features
### Rely on know tools, systems and sources
### Reduce the feature engineering implementation gap
### Just when valuable, build your own thing to store data

## Tests and ergonomy
### Good integration tests make cents

### Test in production always! But mitigating risks

# Final thoughts and conclusion

## One size doesn't fit all

## References used

[_Stars_](https://www.asciiart.eu/space/stars)
