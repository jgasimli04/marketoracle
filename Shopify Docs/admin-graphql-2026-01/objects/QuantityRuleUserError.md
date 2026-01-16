---
title: QuantityRuleUserError - GraphQL Admin
description: An error for a failed quantity rule operation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError.md
---

# Quantity​Rule​User​Error

object

Requires `read_products` access scope.

An error for a failed quantity rule operation.

## Fields

* code

  [Quantity​Rule​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleUserErrorCode)

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

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)

  mutation

  Creates or updates existing quantity rules on a price list. You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the quantity rules will be added or updated.

  * quantity​Rules

    [\[Quantity​Rule​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

    required

    The list of quantity rules to add or update in the price list.

  ***

* [quantity​Rules​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesDelete)

  mutation

  Deletes specific quantity rules from a price list using a product variant ID. You can use the `quantityRulesDelete` mutation to delete a set of quantity rules from a price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the quantity rules will be deleted.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose quantity rules will be removed from the price list.

  ***

***

## <\~> QuantityRuleUserError Mutations

### Mutated by

* <\~>[quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)
* <\~>[quantity​Rules​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-QuantityRuleUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
