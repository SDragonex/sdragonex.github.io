+++
title = "Axiom: Moderní řízení incidentů pro inženýry"
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
Axiom - Logy. Metriky. Traces. Alerting.
```
{% end %}

**Axiom** je platforma observability další generace, která získává popularitu mezi engineering týmy unavenými tradičními nástroji jako Splunk nebo ELK stack. Na rozdíl od starých log aggregatorů kombinuje logy, metriky, traces a alerty v jediném výkonném systému optimalizovaném pro cloud-native workloads.

## Proč Axiom?

{% alert(tip=true) %}
**Klíčová výhoda**: Axiom ukládá raw events (ne pre-agregované indexy), umožňující libovolné dotazy na petabyte škále s latencí pod sekundu.
{% end %}

### 1. **Ultra-rychlé hledání & analytics**
- **1 PB zdarma navždy** pro development týmy
- SQL-like query jazyk s full-text search
- Real-time dashboardy s live tailingem

### 2. **Unifikovaná observability**
```
Logs → Metrics → Traces → Alerts → Vše v jednom datasetu
```

Žádné silované nástroje. Dotazovat napříč vším:

```sql
-- Najdi pomalé API endpoints korelované s errorem
select * from logs 
where service="api" and duration > 2s 
and trace_id is not null
join traces on trace_id 
limit 100
```

### 3. **Developer-first features**

{% alert(note=true) %}
**Live Tail**: `tail -f /path/to/logs` pro cloud infra.
{% end %}

- **CLI s jq-like processing**: `axiom query 'service=api' | jq`
- **GitOps workflows**: Deploy dashboardů via YAML
- **OpenTelemetry native** integrace

## Hands-On: Quick Start

1. **Instalace CLI**:
```bash
curl -sSfL https://axiom.co/install.sh | sh
```

2. **Ingest logů**:
```bash
echo '{"level":"info","message":"Hello Axiom"}' | axiom ingest --dataset=myapp
```

3. **Query**:
```bash
axiom query 'level=error'
```

## Advanced: Custom Processing

**Datasets** umožňují definovat processing pipelines:

```yaml
dataset:
  name: "processed-logs"
  source: "raw-logs"
  transform:
    - parse_json(message)
    - add_field("parsed_level", level)
```

## Srovnání

| Feature | Axiom | Datadog | New Relic |
|---------|-------|---------|-----------|
| Raw Storage | 1PB free | Limited | Sampled |
| Query Cost | Pay per GB queried | Pay per host | Pay per user |
| SQL Support | Full | Limited | Basic |
| CLI | Rich | Basic | None |

## Kdy vybrat Axiom?

- **Cost-sensitive týmy** s logy >1TB/day
- **Kubernetes-native** prostředí (Helm ready)
- **Query-heavy** workflows (ad-hoc analýza)

{% alert(warning=true) %}
**Trade-off**: Stále mladý (launch 2023), ecosystem menší než u gigantů.
{% end %}

Experimentujte s free tier – opravdu impressive pro debug komplexních systémů.

[_ASCII Art via textart.io_]
