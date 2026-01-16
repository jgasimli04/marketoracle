---
title: FulfillmentConstraintRuleUpdateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `FulfillmentConstraintRuleUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleUpdateUserError.md
---

# Fulfillment​Constraint​Rule​Update​User​Error

object

An error that occurs during the execution of `FulfillmentConstraintRuleUpdate`.

## Fields

* code

  [Fulfillment​Constraint​Rule​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleUpdateUserErrorCode)

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

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

  mutation

  Update a fulfillment constraint rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

  ***

***

## <\~> FulfillmentConstraintRuleUpdateUserError Mutations

### Mutated by

* <\~>[fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentConstraintRuleUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
