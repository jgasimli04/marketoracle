---
title: CompanyContactRoleSortKeys - GraphQL Admin
description: The set of valid sort keys for the CompanyContactRole query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactRoleSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactRoleSortKeys.md
---

# Company​Contact​Role​Sort​Keys

enum

The set of valid sort keys for the CompanyContactRole query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Company.contactRoles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactRoles.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

***

## Map

### Arguments with this enum

* <-|[Company.contactRoles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactRoles.arguments.sortKey)
