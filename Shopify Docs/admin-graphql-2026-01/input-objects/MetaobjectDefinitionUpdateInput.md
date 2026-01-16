---
title: MetaobjectDefinitionUpdateInput - GraphQL Admin
description: The input fields for updating a metaobject definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput.md
---

# Metaobject​Definition​Update​Input

input\_object

The input fields for updating a metaobject definition.

## Fields

* access

  [Metaobject​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectAccessInput)

  Access configuration for the metaobjects created with this definition.

* capabilities

  [Metaobject​Capability​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCapabilityUpdateInput)

  The capabilities of the metaobject definition.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An administrative description of the definition.

* display​Name​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of a metafield to reference as the display name for objects of this type.

* field​Definitions

  [\[Metaobject​Field​Definition​Operation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionOperationInput)

  A set of operations for modifying field definitions.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable name for the definition.

* reset​Field​Order

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the field order should be reset while updating. If `true`, then the order is assigned based on submitted fields followed by alphabetized field omissions. If `false`, then no changes are made to the existing field order and new fields are appended at the end.

***

## Map

No referencing types
