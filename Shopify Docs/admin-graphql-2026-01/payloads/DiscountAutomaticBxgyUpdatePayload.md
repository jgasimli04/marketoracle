---
title: DiscountAutomaticBxgyUpdatePayload - GraphQL Admin
description: Return type for `discountAutomaticBxgyUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBxgyUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBxgyUpdatePayload.md
---

# Discount​Automatic​Bxgy​Update​Payload

payload

Return type for `discountAutomaticBxgyUpdate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

  mutation

  Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic BXGY discount to update.

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    The input data used to update the automatic BXGY discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticBxgyUpdate)
