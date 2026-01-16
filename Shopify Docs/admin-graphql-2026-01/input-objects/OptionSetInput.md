---
title: OptionSetInput - GraphQL Admin
description: The input fields for creating or updating a product option.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionSetInput.md
---

# Option​Set​Input

input\_object

The input fields for creating or updating a product option.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the product option to update.

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

  [\[Option​Value​Set​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueSetInput)

  Value associated with an option.

***

## Input objects using this input

* [Product​Set​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-productOptions)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

***

## Map

### Input objects using this input

* [Product​Set​Input.productOptions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-productOptions)
