---
title: DiscountCodeFreeShippingCreatePayload - GraphQL Admin
description: Return type for `discountCodeFreeShippingCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeFreeShippingCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeFreeShippingCreatePayload.md
---

# Discount​Code​Free​Shipping​Create​Payload

payload

Return type for `discountCodeFreeShippingCreate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

  mutation

  Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.

  ***

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeFreeShippingCreate)
