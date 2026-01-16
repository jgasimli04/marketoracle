---
title: ProductBundleComponentQuantityOptionValueInput - GraphQL Admin
description: >-
  The input fields for a single quantity option value related to a component
  product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionValueInput.md
---

# Product​Bundle​Component​Quantity​Option​Value​Input

input\_object

The input fields for a single quantity option value related to a component product.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name associated with the option, e.g. one-pack, two-pack.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  How many of the variant will be included for the option value (e.g. two-pack has quantity 2).

***

## Input objects using this input

* [Product​Bundle​Component​Quantity​Option​Input.values](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionInput#fields-values)

  INPUT OBJECT

  Input for the quantity option related to a component product. This will become a new option on the parent bundle product that doesn't have a corresponding option on the component.

***

## Map

### Input objects using this input

* [Product​Bundle​Component​Quantity​Option​Input.values](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionInput#fields-values)
