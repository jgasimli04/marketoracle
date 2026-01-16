---
title: SelectedVariantOptionInput - GraphQL Admin
description: The input fields for the selected variant option of the combined listing.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SelectedVariantOptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SelectedVariantOptionInput.md
---

# Selected​Variant​Option​Input

input\_object

The input fields for the selected variant option of the combined listing.

## Fields

* linked​Metafield​Value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The metaobject value of the linked metafield.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the parent product's option.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The selected option value of the parent product's option.

***

## Input objects using this input

* [Child​Product​Relation​Input.selectedParentOptionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput#fields-selectedParentOptionValues)

  INPUT OBJECT

  The input fields for adding products to the Combined Listing.

***

## Map

### Input objects using this input

* [Child​Product​Relation​Input.selectedParentOptionValues](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput#fields-selectedParentOptionValues)
