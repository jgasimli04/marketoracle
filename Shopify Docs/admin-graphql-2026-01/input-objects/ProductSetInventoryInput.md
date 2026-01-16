---
title: ProductSetInventoryInput - GraphQL Admin
description: >-
  The input fields required to set inventory quantities using `productSet`
  mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInventoryInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInventoryInput.md
---

# Product​Set​Inventory​Input

input\_object

The input fields required to set inventory quantities using `productSet` mutation.

## Fields

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location of the inventory quantity being set.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the inventory quantity being set. Must be one of `available` or `on_hand`.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The values to which each quantities will be set.

***

## Input objects using this input

* [Product​Variant​Set​Input.inventoryQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryQuantities)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

***

## Map

### Input objects using this input

* [Product​Variant​Set​Input.inventoryQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryQuantities)
