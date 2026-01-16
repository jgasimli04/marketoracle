---
title: OrderRiskAssessmentCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderRiskAssessmentCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError.md
---

# Order​Risk​Assessment​Create​User​Error

object

An error that occurs during the execution of `OrderRiskAssessmentCreate`.

## Fields

* code

  [Order​Risk​Assessment​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskAssessmentCreateUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

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

## <\~> OrderRiskAssessmentCreateUserError Mutations

### Mutated by

* <\~>[order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderRiskAssessmentCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
