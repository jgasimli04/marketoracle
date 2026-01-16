---
title: CatalogCreateInput - GraphQL Admin
description: The input fields required to create a catalog.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput.md
---

# Catalog​Create​Input

input\_object

The input fields required to create a catalog.

## Fields

* context

  [Catalog​Context​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

  required

  The context associated with the catalog.

* price​List​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the price list to associate to the catalog.

* publication​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the publication to associate to the catalog.

* status

  [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

  non-null

  The status of the catalog.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the catalog.

***

## Map

No referencing types
