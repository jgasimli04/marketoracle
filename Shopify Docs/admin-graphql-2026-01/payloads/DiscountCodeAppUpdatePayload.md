---
title: DiscountCodeAppUpdatePayload - GraphQL Admin
description: Return type for `discountCodeAppUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeAppUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeAppUpdatePayload.md
---

# Discount​Code​App​Update​Payload

payload

Return type for `discountCodeAppUpdate` mutation.

## Fields

* code​App​Discount

  [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  The updated discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)

  mutation

  Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  ***

  Note

  To update automatic discounts, use [`discountAutomaticAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount to update.

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    The input fields required to update the discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeAppUpdate)
