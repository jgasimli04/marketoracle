---
title: ProductBundleComponentQuantityOptionInput - GraphQL Admin
description: >-
  Input for the quantity option related to a component product. This will become
  a new option on the parent bundle product that doesn't have a corresponding
  option on the component.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionInput.md
---

# Product​Bundle​Component​Quantity​Option​Input

input\_object

Input for the quantity option related to a component product. This will become a new option on the parent bundle product that doesn't have a corresponding option on the component.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The option name to create on the parent product.

* values

  [\[Product​Bundle​Component​Quantity​Option​Value​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentQuantityOptionValueInput)

  required

  Array of option values.

***

## Input objects using this input

* [Product​Bundle​Component​Input.quantityOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput#fields-quantityOption)

  INPUT OBJECT

  The input fields for a single component related to a componentized product.

***

## Map

### Input objects using this input

* [Product​Bundle​Component​Input.quantityOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput#fields-quantityOption)
