---
title: DiscountAutomaticAppUpdatePayload - GraphQL Admin
description: Return type for `discountAutomaticAppUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticAppUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticAppUpdatePayload.md
---

# Discount​Automatic​App​Update​Payload

payload

Return type for `discountAutomaticAppUpdate` mutation.

## Fields

* automatic​App​Discount

  [Discount​Automatic​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  The updated automatic discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

  mutation

  Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To update code discounts with custom logic, use the [`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to update.

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    The input fields required to update the automatic discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticAppUpdate)
