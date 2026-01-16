---
title: QuantityRulesDeletePayload - GraphQL Admin
description: Return type for `quantityRulesDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityRulesDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/QuantityRulesDeletePayload.md
---

# Quantity​Rules​Delete​Payload

payload

Return type for `quantityRulesDelete` mutation.

## Fields

* deleted​Quantity​Rules​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs whose quantity rules were removed from the price list.

* user​Errors

  [\[Quantity​Rule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [quantity​Rules​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/quantityRulesDelete)
