---
title: MetafieldDefinitionConstraintStatus - GraphQL Admin
description: Metafield definition constraint criteria to filter metafield definitions by.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus.md
---

# Metafield​Definition​Constraint​Status

enum

Metafield definition constraint criteria to filter metafield definitions by.

## Valid values

* CONSTRAINED\_​AND\_​UNCONSTRAINED

  Returns both constrained and unconstrained metafield definitions.

* CONSTRAINED\_​ONLY

  Only returns metafield definitions that are constrained to a resource subtype.

* UNCONSTRAINED\_​ONLY

  Only returns metafield definitions that are not constrained to a resource subtype.

***

## Fields

* [Query​Root.metafieldDefinitions(constraintStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.constraintStatus)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [Query​Root.standardMetafieldDefinitionTemplates(constraintStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.standardMetafieldDefinitionTemplates.arguments.constraintStatus)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [metafield​Definitions.constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-constraintStatus)

  ARGUMENT

* [standard​Metafield​Definition​Templates.constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates#arguments-constraintStatus)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.metafieldDefinitions(constraintStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.constraintStatus)
* <-|[Query​Root.standardMetafieldDefinitionTemplates(constraintStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.standardMetafieldDefinitionTemplates.arguments.constraintStatus)
* <-|[metafield​Definitions.constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-constraintStatus)
* <-|[standard​Metafield​Definition​Templates.constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates#arguments-constraintStatus)
