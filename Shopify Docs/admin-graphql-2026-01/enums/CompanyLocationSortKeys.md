---
title: CompanyLocationSortKeys - GraphQL Admin
description: The set of valid sort keys for the CompanyLocation query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys.md
---

# Company​Location​Sort​Keys

enum

The set of valid sort keys for the CompanyLocation query.

## Valid values

* COMPANY\_​AND\_​LOCATION\_​NAME

  Sort by the `company_and_location_name` value.

* COMPANY\_​ID

  Sort by the `company_id` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Company.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.locations.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location​Catalog.companyLocations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.companyLocations.arguments.sortKey)

  ARGUMENT

  A list of products with publishing and pricing information associated with company locations.

* [Query​Root.companyLocations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.companyLocations.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [company​Locations.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocations#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Company.locations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.locations.arguments.sortKey)
* <-|[Company​Location​Catalog.companyLocations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.companyLocations.arguments.sortKey)
* <-|[Query​Root.companyLocations(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.companyLocations.arguments.sortKey)
* <-|[company​Locations.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocations#arguments-sortKey)
