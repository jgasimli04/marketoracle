---
title: Catalog - GraphQL Admin
description: >-
  A list of products with publishing and pricing information.

  A catalog can be associated with a specific context, such as a
  [`Market`](/docs/api/admin-graphql/2026-01/objects/market),
  [`CompanyLocation`](/docs/api/admin-graphql/2026-01/objects/companylocation),
  or [`App`](/docs/api/admin-graphql/2026-01/objects/app).
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog.md'
---

# Catalog

interface

Requires products or product\_listings read access scope. The user must have permission to view markets or customers or companies.

A list of products with publishing and pricing information. A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/market), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/companylocation), or [`App`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/app).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* operations

  [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

  non-null

  Most recent catalog operations.

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list associated with the catalog.

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  A group of products and collections that's published to a catalog.

* status

  [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

  non-null

  The status of the catalog.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the catalog.

***

## Types implemented in

* [App​Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog)

  OBJECT

  A catalog that defines the publication associated with an app.

  * apps

    [App​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection)

    non-null

    The apps associated with the catalog.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

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

    ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * operations

    [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

    non-null

    Most recent catalog operations.

  * price​List

    [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

    The price list associated with the catalog.

  * publication

    [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

    A group of products and collections that's published to a catalog.

  * status

    [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

    non-null

    The status of the catalog.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the catalog.

* [Company​Location​Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog)

  OBJECT

  A list of products with publishing and pricing information associated with company locations.

  * company​Locations

    [Company​Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

    non-null

    The company locations associated with the catalog.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

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

      [Company​Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * company\_id

          id

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:
          * `query=Bob Norman`
          * `query=title:green hoodie`

      * created\_at

        time

      * external\_id

        string

      * * id

          id

        * ids

          string

        - Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

      * * metafields.{namespace}.{key}

          mixed

        * name

          string

        - Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

        - Example:
          * `metafields.custom.on_sale:true`
          * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

      * updated\_at

        time

    ***

  * company​Locations​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of company locations associated with the catalog.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * operations

    [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

    non-null

    Most recent catalog operations.

  * price​List

    [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

    The price list associated with the catalog.

  * publication

    [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

    A group of products and collections that's published to a catalog.

  * status

    [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

    non-null

    The status of the catalog.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the catalog.

* [Market​Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)

  OBJECT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * markets

    [Market​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

    non-null

    The markets associated with the catalog.

    * type

      [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

      Default:null

      ### Arguments

      Filters markets by type.

    * status

      [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

      Default:null

      Filters markets by status.

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

    ***

  * markets​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of markets associated with the catalog.

    * type

      [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

      Default:null

      ### Arguments

      Filters markets by type.

    * status

      [Market​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

      Default:null

      Filters markets by status.

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

    * limit

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The upper bound on count value before returning a result. Use `null` to have no limit.

    ***

  * operations

    [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

    non-null

    Most recent catalog operations.

  * price​List

    [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

    The price list associated with the catalog.

  * publication

    [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

    A group of products and collections that's published to a catalog.

  * status

    [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

    non-null

    The status of the catalog.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the catalog.

***

##### Variables

```json
{
	"id": "",
	"operations": "",
	"priceList": "",
	"publication": "",
	"status": "",
	"title": ""
}
```

##### Schema

```graphql
interface Catalog {
  id: ID!
  operations: [ResourceOperation!]!
  priceList: PriceList
  publication: Publication
  status: CatalogStatus!
  title: String!
}
```
