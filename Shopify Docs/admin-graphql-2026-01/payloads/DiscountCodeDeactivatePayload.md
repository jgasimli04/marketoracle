---
title: DiscountCodeDeactivatePayload - GraphQL Admin
description: Return type for `discountCodeDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeDeactivatePayload.md
---

# Discount​Code​Deactivate​Payload

payload

Return type for `discountCodeDeactivate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The deactivated code discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

  mutation

  Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns while preserving the discount configuration for potential future use.

  For example, when a flash sale needs to end immediately or a discount code requires temporary suspension due to inventory issues, merchants can deactivate it to stop new redemptions while keeping the discount structure intact.

  Use `DiscountCodeDeactivate` to:

  * Pause active promotional campaigns timely
  * Temporarily suspend problematic discount codes
  * Control discount availability during inventory shortages
  * Maintain discount history while stopping usage

  Deactivated discounts remain in the system and can be reactivated later, unlike deletion which persistently removes the code. Customers attempting to use deactivated codes will receive appropriate error messages.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to deactivate.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeDeactivate)
