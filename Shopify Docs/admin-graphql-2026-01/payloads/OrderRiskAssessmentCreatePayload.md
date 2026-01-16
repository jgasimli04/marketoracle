---
title: OrderRiskAssessmentCreatePayload - GraphQL Admin
description: Return type for `orderRiskAssessmentCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderRiskAssessmentCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderRiskAssessmentCreatePayload.md
---

# Order​Risk​Assessment​Create​Payload

payload

Return type for `orderRiskAssessmentCreate` mutation.

## Fields

* order​Risk​Assessment

  [Order​Risk​Assessment](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment)

  The order risk assessment created.

* user​Errors

  [\[Order​Risk​Assessment​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/orderRiskAssessmentCreate)
