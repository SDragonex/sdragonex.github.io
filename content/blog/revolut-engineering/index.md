+++
title = "Inside Revolut Engineering: Banking at Hyperscale"
authors = ["Dany Chaker"]
date = 2025-01-25
insert_anchor_links = "heading"
+++

{% crt() %}
```
  ____  ____  ____  ____ 
 / ___|/ ___||  _ \| __ )
 \___ \\___ \| |_) |  _ \
  ___) |___) |  _ <| |_) |
 |____/|____/|_| \_\____/
Revolut - Tech Stack 2025
```
{% end %}

Revolut processes **$2T+ payments yearly** with <50ms latency. How?

## Tech Stack Highlights

### Infrastructure: Kubernetes + Finagle

```scala
// Finagle service (Scala)
class PaymentService extends Service[Req, Resp] {
  def apply(req: Req): Future[Resp] = {
    for {
      validated <- validator(req)
      charged <- stripe.charge(validated)
      notified <- notification.send(charged)
    } yield SuccessResp
  }
}
```

### Data Platform

- **Kafka Streams** for real-time fraud
- **ClickHouse** for analytics (1PB+)
- **Vitess** for MySQL sharding

## Engineering Culture

**Weekly Tech Talks**:
- Rust for payments infra
- WASM for micro-frontends

**Open Source**:
- [REngine](https://github.com/revolut-engineering) – Kotlin coroutines framework

## Challenges Solved

1. **99.999% Uptime**: Chaos engineering with Litmus
2. **Regulatory Compliance**: GDPR + PCI-DSS automation
3. **Multi-Cloud**: GCP + AWS hybrid

{% alert(important=true) %}
**Key Lesson**: Monolith → Microservices → Platform Engineering.
{% end %}

## Careers @ Revolut Tech

- 400+ engineers, 50 nationalities
- Remote-first (post-COVID policy)
- Stack: Scala, Kotlin, Go, Rust

Follow [@RevolutEngineering](https://twitter.com/RevolutEng) for deep dives.

[_Data from Revolut Tech Blog 2024_]
