---
title: MetaobjectCreateInput - GraphQL Admin
description: The input fields for creating a metaobject.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput.md
---

# Metaobject​Create​Input

input\_object

The input fields for creating a metaobject.

## Fields

* capabilities

  [Metaobject​Capability​Data​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityDataInput)

  Capabilities for the metaobject.

* fields

  [\[Metaobject​Field​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldInput)

  Values for fields. These are mapped by key to fields of the metaobject definition.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique handle for the metaobject. This value is auto-generated when omitted.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the metaobject. Must match an existing metaobject definition type.

***

## Map

No referencing types
