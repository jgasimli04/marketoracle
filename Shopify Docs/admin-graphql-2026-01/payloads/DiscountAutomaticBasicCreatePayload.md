---
title: DiscountAutomaticBasicCreatePayload - GraphQL Admin
description: Return type for `discountAutomaticBasicCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBasicCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBasicCreatePayload.md
---

# Discount​Automatic​Basic​Create​Payload

payload

Return type for `discountAutomaticBasicCreate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) mutation.

  ***

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    ### Arguments

    The input data used to create the automatic amount off discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticBasicCreate)
