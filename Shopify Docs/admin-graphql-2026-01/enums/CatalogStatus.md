---
title: CatalogStatus - GraphQL Admin
description: The state of a catalog.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus.md'
---

# Catalog​Status

enum

The state of a catalog.

## Valid values

* ACTIVE

  The catalog is active.

* ARCHIVED

  The catalog is archived.

* DRAFT

  The catalog is in draft.

***

## Fields

* [App​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.status)

  OBJECT

  A catalog that defines the publication associated with an app.

* [Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog#fields-status)

  INTERFACE

  A list of products with publishing and pricing information. A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/api/admin-graphql/current/objects/market), [`CompanyLocation`](https://shopify.dev/api/admin-graphql/current/objects/companylocation), or [`App`](https://shopify.dev/api/admin-graphql/current/objects/app).

* [Catalog​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput#fields-status)

  INPUT OBJECT

  The input fields required to create a catalog.

* [Catalog​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput#fields-status)

  INPUT OBJECT

  The input fields used to update a catalog.

* [Company​Location​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.status)

  OBJECT

  A list of products with publishing and pricing information associated with company locations.

* [Market​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.status)

  OBJECT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

***

## Map

### Fields with this enum

* <-|[App​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.status)
* <-|[Company​Location​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.status)
* <-|[Market​Catalog.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.status)

### Inputs with this enum

* [Catalog​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput#fields-status)
* [Catalog​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput#fields-status)
