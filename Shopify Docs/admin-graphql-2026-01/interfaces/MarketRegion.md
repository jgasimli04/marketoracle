---
title: MarketRegion - GraphQL Admin
description: A geographic region which comprises a market.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion.md'
---

# Market​Region

interface

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A geographic region which comprises a market.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the region.

***

## Types implemented in

* [Market​Region​Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionCountry)

  OBJECT

  A country which comprises a market.

  * code

    [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    non-null

    The ISO code identifying the country.

  * currency

    [Currency​Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

    non-null

    The currency which this country uses given its market settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the region.

***

##### Variables

```json
{
	"id": "",
	"name": ""
}
```

##### Schema

```graphql
interface MarketRegion {
  id: ID!
  name: String!
}
```
