---
title: MarketConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Markets.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection.md
---

# Market​Connection

connection

An auto-generated type for paginating through multiple Markets.

## Fields with this connection

* [Market​Catalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets)

  OBJECT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Market​Web​Presence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.markets)

  OBJECT

  The market’s web presence, which defines its SEO strategy. This can be a different domain (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language variants. If a market does not have its own web presence, it is accessible on the shop’s primary domain via [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

  Note: while the domain/subfolders defined by a market’s web presence are not applicable to custom storefronts, which must manage their own domains and routing, the languages chosen here do govern [the languages available on the Storefront API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in this market.

***

## Queries with this connection

* [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

  query

  Returns a paginated list of [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects configured for the shop. Markets match buyers based on defined conditions to deliver customized shopping experiences.

  Filter markets by [`MarketType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType) and [`MarketStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus), search by name, and control sort order. Retrieve market configurations including [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings), [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects, and [`MarketConditions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions).

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    ### Arguments

    Filters markets by type.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Markets​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketsSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * market\_condition\_types

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        A comma-separated list of condition types.

    * market\_type

      string

    * name

      string

    * * status

        string

      * wildcard\_company\_location\_with\_country\_code

        string

      -
      - Valid values:
        * `ACTIVE`
        * `DRAFT`

  ***

***

## Possible returns

* edges

  [\[Market​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  non-null

  A list of nodes that are contained in MarketEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Market​Catalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets)
* {}[Market​Web​Presence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.markets)

### Queries with this connection

* \<?>[markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

### Possible returns

* <->[Market​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-edges)
* <->[Market​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-nodes)
* <->[Market​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-pageInfo)
