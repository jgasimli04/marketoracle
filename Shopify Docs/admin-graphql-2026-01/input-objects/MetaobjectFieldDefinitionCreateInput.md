---
title: MetaobjectFieldDefinitionCreateInput - GraphQL Admin
description: The input fields for creating a metaobject field definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCreateInput.md
---

# Metaobject​Field​Definition​Create​Input

input\_object

The input fields for creating a metaobject field definition.

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

  The key of the new field definition. This can't be changed.

  Must be 2-64 characters long and only contain alphanumeric, hyphen, and underscore characters.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A human-readable name for the field. This can be changed at any time.

* required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether metaobjects require a saved value for the field.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The metafield type applied to values of the field.

* validations

  [\[Metafield​Definition​Validation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput)

  Custom validations that apply to values assigned to the field.

***

## Input objects using this input

* [Metaobject​Definition​Create​Input.fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput#fields-fieldDefinitions)

  INPUT OBJECT

  The input fields for creating a metaobject definition.

* [Metaobject​Field​Definition​Operation​Input.create](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionOperationInput#fields-create)

  INPUT OBJECT

  The input fields for possible operations for modifying field definitions. Exactly one option is required.

***

## Map

### Input objects using this input

* [Metaobject​Definition​Create​Input.fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput#fields-fieldDefinitions)
* [Metaobject​Field​Definition​Operation​Input.create](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionOperationInput#fields-create)
