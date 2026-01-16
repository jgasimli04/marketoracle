---
title: VariantOptionValueInput - GraphQL Admin
description: >-
  The input fields required to create or modify a product variant's option
  value.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/VariantOptionValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/VariantOptionValueInput.md
---

# Variant​Option​Value​Input

input\_object

The input fields required to create or modify a product variant's option value.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the product option value by ID.

* linked​Metafield​Value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Metafield value associated with an option.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Specifies the product option value by name.

* option​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the product option by ID.

* option​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Specifies the product option by name.

***

## Input objects using this input

* [Product​Variant​Set​Input.optionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-optionValues)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

* [Product​Variants​Bulk​Input.optionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-optionValues)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Input objects using this input

* [Product​Variant​Set​Input.optionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-optionValues)
* [Product​Variants​Bulk​Input.optionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-optionValues)
