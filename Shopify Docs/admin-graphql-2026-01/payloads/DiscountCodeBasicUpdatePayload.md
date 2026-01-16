---
title: DiscountCodeBasicUpdatePayload - GraphQL Admin
description: Return type for `discountCodeBasicUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBasicUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBasicUpdatePayload.md
---

# Discount​Code​Basic​Update​Payload

payload

Return type for `discountCodeBasicUpdate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

  mutation

  Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  Note

  To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    The input data used to update the discount code.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBasicUpdate)
