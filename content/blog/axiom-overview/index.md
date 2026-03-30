+++
title = "Axiom: Modern Incident Management for Engineers"
authors = ["Dany Chaker"]
date = 2025-01-15
insert_anchor_links = "heading"
+++

{% crt() %}
```
  __   __    _    _ 
 / _\ / _\  (_)  (_)
 \ \  \ \   _   _ 
  \_\ \_\ (_) (_)
Axiom - Logs. Metrics. Traces. Alerts.
```
{% end %}

**Axiom** is a next-generation observability platform that's gaining traction among engineering teams tired of traditional tools like Splunk or ELK stack. Unlike legacy log aggregators, Axiom combines logs, metrics, traces, and alerts in a single, high-performance system optimized for cloud-native workloads.

## Why Axiom?

{% alert(tip=true) %}
**Key Advantage**: Axiom stores raw events (not pre-aggregated indices), enabling arbitrary queries at petabyte scale with sub-second latency.
{% end %}

### 1. **Ultra-Fast Search & Analytics**
- **1 PB free forever** for development teams
- SQL-like query language with full-text search
- Real-time dashboards with live tailing

### 2. **Unified Observability**
```
Logs → Metrics → Traces → Alerts → All in one dataset
```

No more siloed tools. Query across everything:

```sql
-- Find slow API endpoints correlated with errors
select * from logs 
where service="api" and duration > 2s 
and trace_id is not null
join traces on trace_id 
limit 100
```

### 3. **Developer-First Features**

{% alert(note=true) %}
**Live Tail**: `tail -f /path/to/logs` for cloud infra.
{% end %}

- **CLI with jq-like processing**: `axiom query 'service=api' | jq`
- **GitOps workflows**: Deploy dashboards via YAML
- **OpenTelemetry native** integration

## Hands-On: Quick Start

1. **Install CLI**:
```bash
curl -sSfL https://axiom.co/install.sh | sh
```

2. **Ingest Logs**:
```bash
echo '{"level":"info","message":"Hello Axiom"}' | axiom ingest --dataset=myapp
```

3. **Query**:
```bash
axiom query 'level=error'
```

## Advanced: Custom Processing

Axiom's **Datasets** let you define processing pipelines:

```yaml
dataset:
  name: "processed-logs"
  source: "raw-logs"
  transform:
    - parse_json(message)
    - add_field("parsed_level", level)
```

## Comparison Matrix

| Feature | Axiom | Datadog | New Relic |
|---------|--------|---------|-----------|
| Raw Storage | 1PB free | Limited | Sampled |
| Query Cost | Pay per GB queried | Pay per host | Pay per user |
| SQL Support | Full | Limited | Basic |
| CLI | Rich | Basic | None |

## When to Choose Axiom?

- **Cost-sensitive teams** scaling logs >1TB/day
- **Kubernetes-native** environments (Helm charts ready)
- **Query-heavy** workflows (ad-hoc analysis)

{% alert(warning=true) %}
**Trade-off**: Still young (2023 launch), ecosystem smaller than incumbents.
{% end %}

## Resources

- [Axiom Docs](https://axiom.co/docs)
- [GitHub Repo](https://github.com/axiomhq/axiom)
- [Pricing](https://axiom.co/pricing)

Experiment with their free tier – it's genuinely impressive for debugging complex systems.

[_ASCII Art via textart.io_]
