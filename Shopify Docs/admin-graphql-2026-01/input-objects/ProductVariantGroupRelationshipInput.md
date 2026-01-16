---
title: ProductVariantGroupRelationshipInput - GraphQL Admin
description: The input fields for the bundle components for core.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantGroupRelationshipInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantGroupRelationshipInput.md
---

# Product​Variant​Group​Relationship​Input

input\_object

The input fields for the bundle components for core.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product variant that's a component of the bundle.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units of the product variant required to construct one unit of the bundle.

***

## Input objects using this input

* [Product​Variant​Relationship​Update​Input.productVariantRelationshipsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-productVariantRelationshipsToCreate)

  INPUT OBJECT

  The input fields for updating a composite product variant.

* [Product​Variant​Relationship​Update​Input.productVariantRelationshipsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-productVariantRelationshipsToUpdate)

  INPUT OBJECT

  The input fields for updating a composite product variant.

***

## Map

### Input objects using this input

* [Product​Variant​Relationship​Update​Input.productVariantRelationshipsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-productVariantRelationshipsToCreate)
* [Product​Variant​Relationship​Update​Input.productVariantRelationshipsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-productVariantRelationshipsToUpdate)
