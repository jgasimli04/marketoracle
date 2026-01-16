---
title: StandardMetaobjectDefinitionTemplate - GraphQL Admin
description: >-
  Standard metaobject definition templates provide preset configurations to
  create metaobject definitions.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate.md
---

# Standard​Metaobject​Definition​Template

object

Standard metaobject definition templates provide preset configurations to create metaobject definitions.

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The administrative description.

* display​Name​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of a field to reference as the display name for each object.

* enabled​Capabilities

  [\[Standard​Metaobject​Capability​Template!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectCapabilityTemplate)

  non-null

  The capabilities of the metaobject definition.

* field​Definitions

  [\[Standard​Metaobject​Definition​Field​Template!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate)

  non-null

  Templates for the associated field definitions.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The namespace owned by the definition after the definition has been enabled.

***

## Map

### Fields with this object

* {}[MetaobjectDefinition.standardTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.standardTemplate)
