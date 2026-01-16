---
title: DiscountAutomaticBxgyCreatePayload - GraphQL Admin
description: Return type for `discountAutomaticBxgyCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBxgyCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBxgyCreatePayload.md
---

# Discount​Automatic​Bxgy​Create​Payload

payload

Return type for `discountAutomaticBxgyCreate` mutation.

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

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

  ***

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    ### Arguments

    The input data used to create the automatic BXGY discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticBxgyCreate)
