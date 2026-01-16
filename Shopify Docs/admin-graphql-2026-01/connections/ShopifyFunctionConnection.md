---
title: ShopifyFunctionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ShopifyFunctions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection.md
---

# Shopify​Function​Connection

connection

An auto-generated type for paginating through multiple ShopifyFunctions.

## Queries with this connection

* [shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)

  query

  Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable you to customize Shopify's backend logic at specific points in the commerce loop, such as discounts, checkout validation, and fulfillment.

  You can filter the results by API type to find specific function implementations, or by whether they provide a merchant configuration interface in the Shopify Admin.

  The response includes details about each function's configuration, including its title, description, API version, and the input query used to provide data to the function logic.

  Learn more about [building functions](https://shopify.dev/docs/api/functions).

  * api​Type

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter the functions by the API type.

  * use​Creation​Ui

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Filter the functions by whether or not the function uses the creation UI in the Admin.

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

***

## Possible returns

* edges

  [\[Shopify​Function​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunctionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Function!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

  non-null

  A list of nodes that are contained in ShopifyFunctionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)

### Possible returns

* <->[Shopify​Function​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-edges)
* <->[Shopify​Function​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-nodes)
* <->[Shopify​Function​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-pageInfo)
