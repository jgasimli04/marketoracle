---
title: DiscountCodeBxgyCreatePayload - GraphQL Admin
description: Return type for `discountCodeBxgyCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBxgyCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBxgyCreatePayload.md
---

# Discount​Code​Bxgy​Create​Payload

payload

Return type for `discountCodeBxgyCreate` mutation.

## Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate) mutation.

  ***

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    ### Arguments

    The input data used to create the BXGY code discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBxgyCreate)
