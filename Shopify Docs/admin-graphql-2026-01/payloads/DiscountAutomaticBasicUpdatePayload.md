---
title: DiscountAutomaticBasicUpdatePayload - GraphQL Admin
description: Return type for `discountAutomaticBasicUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBasicUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBasicUpdatePayload.md
---

# Discount​Automatic​Basic​Update​Payload

payload

Return type for `discountAutomaticBasicUpdate` mutation.

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

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

  mutation

  Updates an existing [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic amount off discount to update.

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    The input data used to update the automatic amount off discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticBasicUpdate)
