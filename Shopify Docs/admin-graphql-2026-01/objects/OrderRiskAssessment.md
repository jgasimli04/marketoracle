---
title: OrderRiskAssessment - GraphQL Admin
description: >-
  The risk assessments for an order.


  See the [example query "Retrieves a list of all order risks for an
  order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment.md
---

# Order​Risk​Assessment

object

Requires `read_orders` access scope.

The risk assessments for an order.

See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

## Fields

* facts

  [\[Risk​Fact!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RiskFact)

  non-null

  Optional facts used to describe the risk assessment. The values in here are specific to the provider. See the [examples for the mutation orderRiskAssessmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/orderRiskAssessmentCreate#section-examples).

* provider

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The app that provided the assessment, `null` if the assessment was provided by Shopify.

* risk​Level

  [Risk​Assessment​Result!](https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskAssessmentResult)

  non-null

  The likelihood that the order is fraudulent, based on this risk assessment.

***

## Map

### Fields with this object

* {}[OrderRiskSummary.assessments](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary#field-OrderRiskSummary.fields.assessments)

***

## Mutations

* [order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate)

  mutation

  Create a risk assessment for an order.

  * order​Risk​Assessment​Input

    [Order​Risk​Assessment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput)

    required

    ### Arguments

    The input fields required to create a risk assessment.

  ***

***

## <\~> OrderRiskAssessment Mutations

### Mutated by

* <\~>[order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate)
