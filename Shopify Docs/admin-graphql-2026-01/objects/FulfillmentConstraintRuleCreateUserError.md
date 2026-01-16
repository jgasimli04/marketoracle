---
title: FulfillmentConstraintRuleCreateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `FulfillmentConstraintRuleCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError.md
---

# Fulfillment​Constraint​Rule​Create​User​Error

object

An error that occurs during the execution of `FulfillmentConstraintRuleCreate`.

## Fields

* code

  [Fulfillment​Constraint​Rule​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleCreateUserErrorCode)

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

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

  mutation

  Creates a fulfillment constraint rule and its metafield.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the function providing the constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Associate the function with one or multiple delivery method types.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Metafields to associate to the fulfillment constraint rule.

  ***

***

## <\~> FulfillmentConstraintRuleCreateUserError Mutations

### Mutated by

* <\~>[fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentConstraintRuleCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
