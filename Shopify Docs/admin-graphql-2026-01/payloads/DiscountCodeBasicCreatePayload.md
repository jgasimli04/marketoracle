---
title: DiscountCodeBasicCreatePayload - GraphQL Admin
description: Return type for `discountCodeBasicCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBasicCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBasicCreatePayload.md
---

# Discount​Code​Basic​Create​Payload

payload

Return type for `discountCodeBasicCreate` mutation.

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

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  Note

  To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.

  ***

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBasicCreate)
