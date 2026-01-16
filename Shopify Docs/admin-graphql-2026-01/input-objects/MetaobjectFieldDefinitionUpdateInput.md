---
title: MetaobjectFieldDefinitionUpdateInput - GraphQL Admin
description: The input fields for updating a metaobject field definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionUpdateInput.md
---

# Metaobject​Field​Definition​Update​Input

input\_object

The input fields for updating a metaobject field definition.

## Fields

* capabilities

  [Metaobject​Field​Definition​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCapabilityCreateInput)

  Capabilities configuration for this field.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An administrative description of the field.

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key of the field definition to update.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable name for the field.

* required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether metaobjects require a saved value for the field.

* validations

  [\[Metafield​Definition​Validation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput)

  Custom validations that apply to values assigned to the field.

***

## Input objects using this input

* [Metaobject​Field​Definition​Operation​Input.update](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionOperationInput#fields-update)

  INPUT OBJECT

  The input fields for possible operations for modifying field definitions. Exactly one option is required.

***

## Map

### Input objects using this input

* [Metaobject​Field​Definition​Operation​Input.update](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionOperationInput#fields-update)
