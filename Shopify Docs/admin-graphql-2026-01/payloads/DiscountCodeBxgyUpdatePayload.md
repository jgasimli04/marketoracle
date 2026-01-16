---
title: DiscountCodeBxgyUpdatePayload - GraphQL Admin
description: Return type for `discountCodeBxgyUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBxgyUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBxgyUpdatePayload.md
---

# Discount​Code​Bxgy​Update​Payload

payload

Return type for `discountCodeBxgyUpdate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

  mutation

  Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate) mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the BXGY code discount to update.

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    The input data used to update the BXGY code discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBxgyUpdate)
