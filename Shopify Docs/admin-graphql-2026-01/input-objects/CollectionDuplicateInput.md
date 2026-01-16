---
title: CollectionDuplicateInput - GraphQL Admin
description: The input fields for duplicating a collection.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput.md
---

# Collection​Duplicate​Input

input\_object

The input fields for duplicating a collection.

## Fields

* collection​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the collection to be duplicated.

* copy​Publications

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  Whether to duplicate the collection's publications (channel availability). When `true` (default), the duplicated collection will be published to the same channels as the original. When `false`, the duplicated collection will be unpublished on all channels.

* new​Title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The new title of the collection.

***

## Map

No referencing types
