---
title: ProductBundleUpdateInput - GraphQL Admin
description: The input fields for updating a componentized product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput.md
---

# Product​Bundle​Update​Input

input\_object

The input fields for updating a componentized product.

## Fields

* components

  [\[Product​Bundle​Component​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleComponentInput)

  The components to update existing ones. If none provided, no changes occur. Note: This replaces, not adds to, current components.

* consolidated​Options

  [\[Product​Bundle​Consolidated​Option​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleConsolidatedOptionInput)

  The consolidated options of the componentized product to update, if provided.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the componentized product to update.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title to rename the componentized product to, if provided.

***

## Map

No referencing types
