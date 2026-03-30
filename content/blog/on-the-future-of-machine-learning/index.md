+++
title = "The future of Machine Learning"
authors = ["Dany Chaker"]
date = 2025-10-27
insert_anchor_links = "heading"
+++


{% crt() %}
```

      `-._\ /     `~~"--.,_
     ------>|              `~~"--.,_
 jgs  _.-'/ '.____,,,,----"""~~```'

```
{% end %}


This is a text that I've been long waiting to write. After long reflections with my self
and probing various friends and coworkers I will give it a chance of becoming something.
I want to talk about the vision of a different future, a future where my life is easier
at training and deploying machine learning models.

I though of many titles for this post: _How to make my life less miserable?_,
_Machine learning for the rest of us?_, _Interoperable and scalable machine learning_.
Pick the one you find the best.

In this post I will introduce a few issues that I could observe from my year of experience.
These are:
- [Small, Medium and Large. But not Huge]

# The diagnosis
## 1. Small, Medium and Large. But not Huge

In the past few year LLMs got a lot of attention and put Artificial Intelligence in the
spot light. I don't deny the importance of LLMs and their wonderful applications but I
will argue that not a lot of people are building these massive language models at absurd
massive scale.

> Just recently it was announced by OpenAI a [500 billion investment](https://openai.com/index/five-new-stargate-sites/)
> in this Stargate data center. I can't even magine how much computational power such system can
> hold.

What I am mostly concerned is what I am going to call Small, Medium and Large scale
machine learning.

Let's think about all of us, ordinary machine learning engineers and data scientists,
trying to build all sorts of specialized models. We can think of insurance models,
credit models, all sorts of text and image classification models, the list is long but
the common factor is that even the most complicated specialized image models are not
even near the billions of parameters that LLMs are building.

We are deploying these models are batch jobs, simple http services, inside streaming
applications or even in low power hardware like Raspberry PIs and ESP32.

Is it ok to think about training these models in my notebook? Using some simple
interoperability to deploy these models in other infrastructures and follow my life
without getting worried that these models are too expensive? Or that they are going
to wake me up at night?

I will claim, based on nothing, that the majority of the machine learning practitioners
are building small, medium and large models. But not huge. We have scikit-learn, all 
the boosting libraries, we have a lot of new work in new deep learning frameworks but
at the end, did our lives got easier in the past ten years?

The company I work for kinded of sorted out a way to minimize friction on pickling and
deplicking stuff, controlling environments and requirements. But I heard still companies
using massive monorepos of models with requirements fully pinned. Batch jobs still have
miserable slow performances and are way more wasteful than they need to be
(_are you loading your entire inference dataset in the memory to apply an old model?_).

It is clear that pinning requirements is not a sustainable solution, but if you are not
doing that, how are you managing legacy models? It is good to reproduce some old predictions
to compare historical stand points but then we need to keep storing legacy code that must
pair with these legacy pickles and/or serialized weights.

This doesn't seem practical neither conveninent. So, in order to tackle this "bellow huge scale
models", I will propose a new model (not a machine learning model) of deploying these decision
machines that take the usual reality of the industry into consideration: **the machine learning
model interoperability**.

## 2. Why do we need interoperability?

I don't believe all the machine learning practitioners feel that Python is the best programming
language for everything. The main reason why Python is the "AI Language" is because it became
popular before anything else. Python is going to last for ever but I believe it will remain
for a log time still, at least more 20 years.

But that doesn't preven us from chosing a better language for everything else, right? I can pick
my good and old Java, or Go, or Elixir, or whatever is trending right now. The thing is that as soon
as you want to integrate automated decisions backed by machine learning models (that definetely
are going to be developed in Python) you will need to break your language choice. Beyond that
just a small set of machine learning engineers get to pick their data pipeline language or their
backend language, these are decisions left often to founders at very early stage in companies.
In older companies and bigger enterprise you just can't throw in a new language.

So, most of us don't chose the language the find the best for the problem but whatever
language chose year before.

If we want to make our life simple and easy we must find a way to take the trained models
and embed them in other programming languages, either for batch processess, streaming
applications, backend services, games or whatever you are builidng.

### DuckDB: a little digression with a spark

I recently started testing DuckDB from clojure environments. I was attempting to replicate
dataframe based feature engineering pipelines in clojure and DuckDB, through the Ibis Project,
seemed like an approachable alternative.

While reading the documentation and understanding how it could work I saw that DuckDB could
be integrated in the JVM environment using a single binary! Using the C foreign function
interface.

I copy the binary in my project, dynamically link it in runtime, and we get DuckDB running!
Super fast, simple and easy. This experience was so refreshing that a spark happened in my
brain.

Why can't I distribute machine learning models as stand alone binaries?

### Stand alone binaries as the main distribution format of machine learning models

If we can stablish a universal inference API, with a universal in memory table inter process
layout, we could make predictions without even copying any data and without relying on any type
of serialization.

There are projects like ONNX and Safe Tensors that try to map all sorts of neural networks
layers and dags but at the end the spec must be always at pace with what is possible
to describe in the deep learning frameworks. If I am an academic, could I write my new
trendy and cool neural network layer and make it instantly available by just compiling it?

For sure the compiled models would still be limited by what is possible to compile but
if we introduce a more high level standard API that libraries could built upon we could
start a platform of more interchangeable decision systems.

Stand alone binaries are completely detached from their training code, making possible
to keep legacy stuff without storing environments or keeping control of multiple
moving parts.

Dynamically linking could be combined with "model managers" that can perform smooth rollouts,
A/B tests. MLEs can choose if they deploy a model with dedicated resources, or they are so light
that they can be embedded in other services to keep complexity low. In device deployment
becomes struggle free. IOT devices and limited hardware can pick special compilation flags
to prune as much as possible of the final executable.


## 3. The historical split between deep and classical learning

I don't know why, but machine learning frameworks have been divided into big categories:
classical frameworks (scikit-learn and boosting libraries) and deep learning frameworks
(tensorflow, pytorch, jax).

This is an annoying reality for me because frequently I find my self trying to mix and
match these tools. For me it seems completely reasonable to make simples feature engineering
to my standard features before jumping to the complex neural network. Like, simple
regex features work and I don't need fancy text encodings or embeddings. But couldn't we just
have a uniform estimator API that can join classical and deep learning frameworks
in a single cohesive ecosystem?

The place I work for, Nubank, has very interesting machine learning library called fklearn.
This library adresses this very critical inconvenience of having multiple data standards.
It wraps all the common builidng blocks of machine learning, including deep learning,
with a uniform Pandas interface. Any estimator has an interface of data in, state out.

```
Training Function[Pandas DataFrame, Hyperparameters] -> Trained Estimator, Estimator applyied to DataFrame, Logs
```

But as already described, it is just a wrapper, it keeps translating from Pandas to the internal
data model of each framework:

- Numpy for scikit-learn
- Propietary data format for boosting
- Weird tensors for pytorch and tensorflow

### Scikit-learn comment on data

I followed scikit-learn project from development versions from `0.19.0` up to its first major release.
The drama along either supporting or not Pandas dataframes reduced its ability to become the
standard for anything else. Its API had limitations to incorporate early-stopping techniques
and a lot of potential was left.

I understand the dilema of including an unknown dependency to the project and 
widening the data api to a whole new format but that said DataFrames are
the entrypoint for analytical jobs today.

Anyone that is building a model will start by loading data in a dataframe.

### Back to unifying machine learning frameworks

Could we have all machine learning libraries built on top a single unified
data format, with a unified top level API, that let us mix and match
any kind of estimator and custom implementations from multiple libraries?

Why not store tensors as usual DataFrame columns? And use them as regular
feature values for models? Can you imagine a dataframe column with a datatype
"Video"? Is that too crazy?

If these memory standard can be spread beyond the Python ecosystem, we get our
inference API from simple reasoning.

## 4. Unlocking the potential of modern hardware

The Rust revolution arived the big data world leaving nothing behind. But not just Rust,
Zig and old C/C++ for those willing to let go modern features.
The world of low level optimization and the practice of squeezing every inch of performance
from chips and leveraging GPU technologies is making Spark and Parquet looking like a
2014 Honda Civic near an acessible ultrafast EV.

All sorts of projects like DataFusion, DuckDB, Polars, Arrow, Vortex, Feldera, IceBerg, TigerBeetle
are acomplishing things never imagined 10 years ago by reimagining specialized domains
and leaving behind legacy constraints.

Could we take the learnings and practices from these projects, levereging their discoveries,
and apply to the next machine learning library? Seeking a middle ground between academic
development and industry strength solutions? What was the ground breaking thing
in machine learning libraries in the last 10 years? Certainly pytorch,
tensorflow and scikit-learn itself. But what is going to be the next one?


# The dream of a new machine learning library

Given this diagnose elements I will try to design a new machine learning
library that can potentially be the breakthrough of machine learning
practitioners in the next 10 years.

The requirements are:

* Python is non negotiable. It is the standard for practitioners, almost the front end
of model builders. Anything for the future must, at least, expose a Python API.
* A uniform memory model that cuts the necessity of multiple translation steps. Once
data is ready to be trained only incremental changes are required. The current standard
for analytical in memory data representation is the Arrow Project.
* Performance is non negotiable. Whatever is going to be built must be strongly 
benchmarked and the most efficient algorithm and implementation.
* A high level API that simplify composition from heterogeneous estimators. No DAGs, just
a sequence of steps. Parallelism can be handled at row chunks level.
* A uniform exposition of hyperparameters space for automatic hyperparameter tunning
algorithms.
* A compile API that exports JIT models as stand alone binaries, completely detached from their
training code. This can also include optinal interface systems like streaming apis, http apis,
batch inference apis.
* Clients in various programming language ecosystems to save as much time as possible from our
future users.
* Rust is our weapon of choice for low level implementation and guaranteer of the following requirements.

## The break in

We must start somewhere. My proposition will be to build a custom implementation for fast frugal trees,
a model class that I recently got in touch for work and can be an example to sort out the details
of these requirements.

Thank you!

[_Carrot_](https://ascii.co.uk/art/carrot)
