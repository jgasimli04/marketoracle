---
title: RiskFactSentiment - GraphQL Admin
description: List of possible values for a RiskFact sentiment.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskFactSentiment'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskFactSentiment.md'
---

# Risk​Fact​Sentiment

enum

List of possible values for a RiskFact sentiment.

## Valid values

* NEGATIVE

  A negative contributor that increases the risk.

* NEUTRAL

  A neutral contributor with regards to risk.

* POSITIVE

  A positive contributor that lowers the risk.

***

## Fields

* [Order​Risk​Assessment​Fact​Input.sentiment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentFactInput#fields-sentiment)

  INPUT OBJECT

  The input fields to create a fact on an order risk assessment.

* [Risk​Fact.sentiment](https://shopify.dev/docs/api/admin-graphql/latest/objects/RiskFact#field-RiskFact.fields.sentiment)

  OBJECT

  A risk fact belongs to a single risk assessment and serves to provide additional context for an assessment. Risk facts are not necessarily tied to the result of the recommendation.

***

## Map

### Fields with this enum

* <-|[Risk​Fact.sentiment](https://shopify.dev/docs/api/admin-graphql/latest/objects/RiskFact#field-RiskFact.fields.sentiment)

### Inputs with this enum

* [Order​Risk​Assessment​Fact​Input.sentiment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentFactInput#fields-sentiment)
