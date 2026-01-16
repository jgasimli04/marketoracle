---
title: MetaobjectDefinitionCreateInput - GraphQL Admin
description: The input fields for creating a metaobject definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput.md
---

# Metaobject​Definition​Create​Input

input\_object

The input fields for creating a metaobject definition.

## Fields

* access

  [Metaobject​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectAccessInput)

  Access configuration for the metaobjects created with this definition.

* capabilities

  [Metaobject​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityCreateInput)

  The capabilities of the metaobject definition.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An administrative description of the definition.

* display​Name​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of a field to reference as the display name for metaobjects of this type.

* field​Definitions

  [\[Metaobject​Field​Definition​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCreateInput)

  required

  A set of field definitions to create on this metaobject definition.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable name for the definition. This can be changed at any time.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The type of the metaobject definition. This can't be changed.

  Must be 3-255 characters long and only contain alphanumeric, hyphen, and underscore characters.

***

## Map

No referencing types
