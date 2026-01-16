---
title: QuantityRulesAddPayload - GraphQL Admin
description: Return type for `quantityRulesAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityRulesAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityRulesAddPayload.md
---

# Quantity​Rules​Add​Payload

payload

Return type for `quantityRulesAdd` mutation.

## Fields

* quantity​Rules

  [\[Quantity​Rule!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

  The list of quantity rules that were added to or updated in the price list.

* user​Errors

  [\[Quantity​Rule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/quantityRulesAdd)
