---
title: CompanyContactSortKeys - GraphQL Admin
description: The set of valid sort keys for the CompanyContact query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyContactSortKeys.md
---

# Company​Contact​Sort​Keys

enum

The set of valid sort keys for the CompanyContact query.

## Valid values

* COMPANY\_​ID

  Sort by the `company_id` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* EMAIL

  Sort by the `email` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* NAME\_​EMAIL

  Sort by the `name_email` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Company.contacts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

***

## Map

### Arguments with this enum

* <-|[Company.contacts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts.arguments.sortKey)
