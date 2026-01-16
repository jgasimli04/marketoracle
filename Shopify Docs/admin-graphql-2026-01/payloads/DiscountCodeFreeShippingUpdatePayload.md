---
title: DiscountCodeFreeShippingUpdatePayload - GraphQL Admin
description: Return type for `discountCodeFreeShippingUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeFreeShippingUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeFreeShippingUpdatePayload.md
---

# Discount​Code​Free​Shipping​Update​Payload

payload

Return type for `discountCodeFreeShippingUpdate` mutation.

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

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

  mutation

  Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    The input data used to update the discount code.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeFreeShippingUpdate)
