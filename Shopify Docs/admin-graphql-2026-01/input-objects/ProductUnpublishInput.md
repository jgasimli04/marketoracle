---
title: ProductUnpublishInput - GraphQL Admin
description: >-
  The input fields for specifying a product to unpublish from a channel and the
  sales channels to unpublish it from.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput.md
---

# Product​Unpublish​Input

input\_object

The input fields for specifying a product to unpublish from a channel and the sales channels to unpublish it from.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product to create or update publications for.

* product​Publications

  [\[Product​Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublicationInput)

  required

  The channels to unpublish the product from.

***

## Map

No referencing types
