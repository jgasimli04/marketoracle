---
title: MetafieldDefinitionValidationInput - GraphQL Admin
description: >-
  The name and value for a metafield definition validation.


  For example, for a metafield definition of `single_line_text_field` type, you
  can set a validation with the name `min` and a value of `10`.

  This validation will ensure that the value of the metafield is at least 10
  characters.


  Refer to the [list of supported
  validations](https://shopify.dev/apps/build/custom-data/metafields/list-of-validation-options).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionValidationInput.md
---

# Metafield​Definition​Validation​Input

input\_object

The name and value for a metafield definition validation.

For example, for a metafield definition of `single_line_text_field` type, you can set a validation with the name `min` and a value of `10`. This validation will ensure that the value of the metafield is at least 10 characters.

Refer to the [list of supported validations](https://shopify.dev/apps/build/custom-data/metafields/list-of-validation-options).

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name for the metafield definition validation.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value for the metafield definition validation.

***

## Input objects using this input

* [Metafield​Definition​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-validations)

  INPUT OBJECT

  The input fields required to create a metafield definition.

* [Metafield​Definition​Update​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-validations)

  INPUT OBJECT

  The input fields required to update a metafield definition.

* [Metaobject​Field​Definition​Create​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCreateInput#fields-validations)

  INPUT OBJECT

  The input fields for creating a metaobject field definition.

* [Metaobject​Field​Definition​Update​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionUpdateInput#fields-validations)

  INPUT OBJECT

  The input fields for updating a metaobject field definition.

***

## Map

### Input objects using this input

* [Metafield​Definition​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-validations)
* [Metafield​Definition​Update​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-validations)
* [Metaobject​Field​Definition​Create​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionCreateInput#fields-validations)
* [Metaobject​Field​Definition​Update​Input.validations](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectFieldDefinitionUpdateInput#fields-validations)
