---
title: MetafieldDefinitionValidationStatus - GraphQL Admin
description: Possible metafield definition validation statuses.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionValidationStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionValidationStatus.md
---

# Metafield​Definition​Validation​Status

enum

Possible metafield definition validation statuses.

## Valid values

* ALL\_​VALID

  All of this definition's metafields are valid.

* IN\_​PROGRESS

  Asynchronous validation of this definition's metafields is in progress.

* SOME\_​INVALID

  Some of this definition's metafields are invalid.

***

## Fields

* [Metafield​Definition.validationStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.validationStatus)

  OBJECT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition.validationStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.validationStatus)
