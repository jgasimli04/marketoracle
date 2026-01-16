---
title: MetafieldDefinitionAdminFilterStatus - GraphQL Admin
description: >-
  Possible filter statuses associated with a metafield definition for use in
  admin filtering.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionAdminFilterStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionAdminFilterStatus.md
---

# Metafield​Definition​Admin​Filter​Status

enum

Possible filter statuses associated with a metafield definition for use in admin filtering.

## Valid values

* FAILED

  The metafield definition has failed to be enabled for admin filtering.

* FILTERABLE

  The metafield definition allows admin filtering by matching metafield values.

* IN\_​PROGRESS

  The metafield definition's metafields are currently being processed for admin filtering.

* NOT\_​FILTERABLE

  The metafield definition cannot be used for admin filtering.

***

## Fields

* [Metafield​Capability​Admin​Filterable.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable#field-MetafieldCapabilityAdminFilterable.fields.status)

  OBJECT

  Information about the admin filterable capability on a metafield definition.

***

## Map

### Fields with this enum

* <-|[Metafield​Capability​Admin​Filterable.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable#field-MetafieldCapabilityAdminFilterable.fields.status)
