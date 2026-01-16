---
title: OptionCreateInput - GraphQL Admin
description: The input fields for creating a product option.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput.md
---

# Option​Create​Input

input\_object

The input fields for creating a product option.

## Fields

* linked​Metafield

  [Linked​Metafield​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LinkedMetafieldCreateInput)

  Specifies the metafield the option is linked to.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Name of the option.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Position of the option.

* values

  [\[Option​Value​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

  Values associated with the option.

***

## Input objects using this input

* [Product​Create​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-productOptions)

  INPUT OBJECT

  The input fields required to create a product.

* [Product​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-productOptions)

  INPUT OBJECT

  The input fields for creating or updating a product.

***

## Map

### Input objects using this input

* [Product​Create​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-productOptions)
* [Product​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-productOptions)
