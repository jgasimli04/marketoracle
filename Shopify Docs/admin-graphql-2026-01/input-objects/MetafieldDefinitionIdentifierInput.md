---
title: MetafieldDefinitionIdentifierInput - GraphQL Admin
description: The input fields that identify metafield definitions.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput.md
---

# Metafield​Definition​Identifier​Input

input\_object

The input fields that identify metafield definitions.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield definition will be associated with. If omitted, the app-reserved namespace will be used.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  non-null

  The resource type that the metafield definition is attached to.

***

## Map

No referencing types
