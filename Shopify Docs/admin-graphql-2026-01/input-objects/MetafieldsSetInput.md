---
title: MetafieldsSetInput - GraphQL Admin
description: The input fields for a metafield value to set.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput.md
---

# Metafields​Set​Input

input\_object

The input fields for a metafield value to set.

## Fields

* compare​Digest

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `compareDigest` value obtained from a previous query. Provide this with updates to ensure the metafield is modified safely.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for a metafield within its namespace.

  Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield is or will be associated with. Used in tandem with `key` to lookup a metafield on a resource, preventing conflicts with other metafields with the same `key`. If omitted the app-reserved namespace will be used.

  Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.

* owner​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of the resource that the metafield is attached to.

* type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The type of data that is stored in the metafield. The type must be one of the [supported types](https://shopify.dev/apps/metafields/types).

  Required when there is no corresponding definition for the given `namespace`, `key`, and owner resource type (derived from `ownerId`).

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

***

## Map

No referencing types
