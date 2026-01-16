---
title: MetafieldValidationStatus - GraphQL Admin
description: Possible metafield validation statuses.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValidationStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValidationStatus.md
---

# Metafield​Validation​Status

enum

Possible metafield validation statuses.

## Valid values

* ANY

  Any validation status (valid or invalid).

* INVALID

  Invalid (according to definition).

* VALID

  Valid (according to definition).

***

## Fields

* [Metafield​Definition.metafields(validationStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields.arguments.validationStatus)

  ARGUMENT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

* [Metafield​Definition.metafieldsCount(validationStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafieldsCount.arguments.validationStatus)

  ARGUMENT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

***

## Map

### Arguments with this enum

* <-|[Metafield​Definition.metafields(validationStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields.arguments.validationStatus)
* <-|[Metafield​Definition.metafieldsCount(validationStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafieldsCount.arguments.validationStatus)
