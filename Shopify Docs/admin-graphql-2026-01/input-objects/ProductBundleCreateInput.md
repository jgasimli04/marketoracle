---
title: ProductBundleCreateInput - GraphQL Admin
description: The input fields for creating a componentized product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput.md
---

# Product​Bundle​Create​Input

input\_object

The input fields for creating a componentized product.

## Fields

* components

  [\[Product​Bundle​Component​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput)

  required

  The component products to bundle with the bundle product.

* consolidated​Options

  [\[Product​Bundle​Consolidated​Option​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput)

  The consolidated options of the componentized product to create, if provided.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product to create.

***

## Map

No referencing types
