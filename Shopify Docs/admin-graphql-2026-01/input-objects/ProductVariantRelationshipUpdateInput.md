---
title: ProductVariantRelationshipUpdateInput - GraphQL Admin
description: The input fields for updating a composite product variant.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput.md
---

# Product​Variant​Relationship​Update​Input

input\_object

The input fields for updating a composite product variant.

## Fields

* parent​Product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A product ID which contains product variants that have relationships with other variants.

* parent​Product​Variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The product variant ID representing that which contains the relationships with other variants.

* price​Input

  [Price​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput)

  Default:null

  Method in which to update the price of the parent product variant.

* product​Variant​Relationships​To​Create

  [\[Product​Variant​Group​Relationship​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantGroupRelationshipInput)

  Default:null

  The product variants and associated quantitites to add to the product variant.

* product​Variant​Relationships​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Default:null

  The bundle component product variants to be removed from the product variant.

* product​Variant​Relationships​To​Update

  [\[Product​Variant​Group​Relationship​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantGroupRelationshipInput)

  Default:null

  The product variants and associated quantitites to update in specified product variant.

* remove​All​Product​Variant​Relationships

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to remove all components from the product variant. The default value is `false`.

***

## Map

No referencing types
