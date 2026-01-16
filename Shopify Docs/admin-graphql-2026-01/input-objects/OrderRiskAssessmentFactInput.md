---
title: OrderRiskAssessmentFactInput - GraphQL Admin
description: The input fields to create a fact on an order risk assessment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentFactInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentFactInput.md
---

# Order​Risk​Assessment​Fact​Input

input\_object

The input fields to create a fact on an order risk assessment.

## Fields

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A description of the fact. Large values are truncated to 256 characters.

* sentiment

  [Risk​Fact​Sentiment!](https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskFactSentiment)

  non-null

  Indicates whether the fact is a negative, neutral or positive contributor with regards to risk.

***

## Input objects using this input

* [Order​Risk​Assessment​Create​Input.facts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput#fields-facts)

  INPUT OBJECT

  The input fields for an order risk assessment.

***

## Map

### Input objects using this input

* [Order​Risk​Assessment​Create​Input.facts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput#fields-facts)
