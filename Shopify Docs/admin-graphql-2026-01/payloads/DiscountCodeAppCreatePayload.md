---
title: DiscountCodeAppCreatePayload - GraphQL Admin
description: Return type for `discountCodeAppCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeAppCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeAppCreatePayload.md
---

# Discount​Code​App​Create​Payload

payload

Return type for `discountCodeAppCreate` mutation.

## Fields

* code​App​Discount

  [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  The discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)

  mutation

  Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).

  ***

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    ### Arguments

    The input data used to create the discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeAppCreate)
