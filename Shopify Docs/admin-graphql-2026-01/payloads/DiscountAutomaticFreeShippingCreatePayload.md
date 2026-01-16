---
title: DiscountAutomaticFreeShippingCreatePayload - GraphQL Admin
description: Return type for `discountAutomaticFreeShippingCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticFreeShippingCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticFreeShippingCreatePayload.md
---

# Discount​Automatic​Free​Shipping​Create​Payload

payload

Return type for `discountAutomaticFreeShippingCreate` mutation.

## Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic free shipping discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

  mutation

  Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

  For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

  Use `DiscountAutomaticFreeShippingCreate` to:

  * Set up code-free shipping promotions
  * Create order value-based shipping incentives
  * Target specific customer groups with shipping benefits
  * Establish location-based shipping discounts

  The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

  Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    ### Arguments

    The input data used to create the automatic free shipping discount.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticFreeShippingCreate)
