---
title: MetaobjectUpdateInput - GraphQL Admin
description: The input fields for updating a metaobject.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput.md
---

# Metaobject​Update​Input

input\_object

The input fields for updating a metaobject.

## Fields

* capabilities

  [Metaobject​Capability​Data​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityDataInput)

  Capabilities for the metaobject.

* fields

  [\[Metaobject​Field​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldInput)

  Values for fields. These are mapped by key to fields of the metaobject definition.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique handle for the metaobject.

* redirect​New​Handle

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to create a redirect for the metaobject.

***

## Map

No referencing types
