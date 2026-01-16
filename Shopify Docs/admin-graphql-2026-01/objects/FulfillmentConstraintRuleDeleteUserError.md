---
title: FulfillmentConstraintRuleDeleteUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `FulfillmentConstraintRuleDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleDeleteUserError.md
---

# Fulfillment​Constraint​Rule​Delete​User​Error

object

An error that occurs during the execution of `FulfillmentConstraintRuleDelete`.

## Fields

* code

  [Fulfillment​Constraint​Rule​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleDeleteUserErrorCode)

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

* [fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleDelete)

  mutation

  Deletes a fulfillment constraint rule and its metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  ***

***

## <\~> FulfillmentConstraintRuleDeleteUserError Mutations

### Mutated by

* <\~>[fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentConstraintRuleDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
