---
title: ProductPublishInput - GraphQL Admin
description: >-
  The input fields for specifying a product to publish and the channels to
  publish it to.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput.md
---

# Product​Publish​Input

input\_object

The input fields for specifying a product to publish and the channels to publish it to.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The product to create or update publications for.

* product​Publications

  [\[Product​Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublicationInput)

  required

  The publication that the product is published to.

***

## Map

No referencing types
