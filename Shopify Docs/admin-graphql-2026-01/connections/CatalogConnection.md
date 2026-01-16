---
title: CatalogConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Catalogs.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection.md
---

# Catalog​Connection

connection

An auto-generated type for paginating through multiple Catalogs.

## Fields with this connection

* [Company​Location.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.catalogs)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

## Queries with this connection

* [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)

  query

  Returns a paginated list of catalogs for the shop. Catalogs control which products are published and how they're priced in different contexts, such as international markets (Canada vs. United States), B2B company locations (different branches of the same business), or specific sales channels (such as online store vs. POS).

  Filter catalogs by [`type`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-type) and use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-query) argument to search and filter by additional criteria.

  Learn more about [Shopify Catalogs](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Default:null

    ### Arguments

    The type of the catalogs to be returned.

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

    [Catalog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

    * company\_location\_id

      id

    * * id

        id

      * managed\_country\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * market\_id

      id

    * status

      string

    * title

      string

  ***

***

## Possible returns

* edges

  [\[Catalog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Catalog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  non-null

  A list of nodes that are contained in CatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company​Location.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.catalogs)

### Queries with this connection

* \<?>[catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)

### Possible returns

* <->[Catalog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-edges)
* <->[Catalog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-nodes)
* <->[Catalog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-pageInfo)
