---
title: MetafieldDefinitionValidation - GraphQL Admin
description: >-
  A configured metafield definition validation.


  For example, for a metafield definition of `number_integer` type, you can set
  a validation with the name `max`

  and a value of `15`. This validation will ensure that the value of the
  metafield is a number less than or equal to 15.


  Refer to the [list of supported
  validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation.md
---

# Metafield​Definition​Validation

object

A configured metafield definition validation.

For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max` and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.

Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The validation name.

* type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name for the metafield type of this validation.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The validation value.

***

## Map

### Fields with this object

* {}[MetafieldDefinition.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.validations)
* {}[MetaobjectFieldDefinition.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition#field-MetaobjectFieldDefinition.fields.validations)
* {}[StandardMetafieldDefinitionTemplate.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-StandardMetafieldDefinitionTemplate.fields.validations)
* {}[StandardMetaobjectDefinitionFieldTemplate.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate#field-StandardMetaobjectDefinitionFieldTemplate.fields.validations)
