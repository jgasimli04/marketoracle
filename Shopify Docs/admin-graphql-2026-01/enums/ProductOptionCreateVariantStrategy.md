---
title: ProductOptionCreateVariantStrategy - GraphQL Admin
description: >-
  The set of variant strategies available for use in the `productOptionsCreate`
  mutation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy.md
---

# Product​Option​Create​Variant​Strategy

enum

Requires `read_products` access scope.

The set of variant strategies available for use in the `productOptionsCreate` mutation.

## Valid values

* CREATE

  Existing variants are updated with the first option value of each added option. New variants are created for each combination of existing variant option values and new option values.

* LEAVE\_​AS\_​IS

  No additional variants are created in response to the added options. Existing variants are updated with the first option value of each option added.

***

## Fields

* [product​Options​Create.variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[product​Options​Create.variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy)
