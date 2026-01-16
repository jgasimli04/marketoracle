---
title: DiscountAutomaticAppCreatePayload - GraphQL Admin
description: Return type for `discountAutomaticAppCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticAppCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticAppCreatePayload.md
---

# Discount​Automatic​App​Create​Payload

payload

Return type for `discountAutomaticAppCreate` mutation.

## Fields

* automatic​App​Discount

  [Discount​Automatic​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  The automatic discount that the app manages.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

  mutation

  Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To create code discounts with custom logic, use the [`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate) mutation.

  ***

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    ### Arguments

    The input data used to create the automatic discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticAppCreate)
