---
title: MetafieldCapabilities - GraphQL Admin
description: Provides the capabilities of a metafield definition.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities.md
---

# Metafield​Capabilities

object

Provides the capabilities of a metafield definition.

## Fields

* admin​Filterable

  [Metafield​Capability​Admin​Filterable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable)

  non-null

  Indicate whether a metafield definition is configured for filtering.

* smart​Collection​Condition

  [Metafield​Capability​Smart​Collection​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilitySmartCollectionCondition)

  non-null

  Indicate whether a metafield definition can be used as a smart collection condition.

* unique​Values

  [Metafield​Capability​Unique​Values!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityUniqueValues)

  non-null

  Indicate whether the metafield values for a metafield definition are required to be unique.

***

## Map

### Fields with this object

* {}[MetafieldDefinition.capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.capabilities)
