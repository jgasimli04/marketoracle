---
title: OrderRiskAssessmentCreateInput - GraphQL Admin
description: The input fields for an order risk assessment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput.md
---

# Order​Risk​Assessment​Create​Input

input\_object

The input fields for an order risk assessment.

## Fields

* facts

  [\[Order​Risk​Assessment​Fact​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentFactInput)

  required

  The list of facts used to determine the fraud assessment.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order receiving the fraud assessment.

* risk​Level

  [Risk​Assessment​Result!](https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskAssessmentResult)

  non-null

  The risk level of the fraud assessment.

***

## Map

No referencing types
