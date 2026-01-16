---
title: DeliveryCarrierServiceConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  DeliveryCarrierServices.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection.md
---

# Delivery​Carrier​Service​Connection

connection

An auto-generated type for paginating through multiple DeliveryCarrierServices.

## Queries with this connection

* [carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierServices)

  query

  A paginated list of carrier services configured for the shop. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. Use the `query` parameter to filter results by attributes such as active status.

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

    [Carrier​Service​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * active

      boolean

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

***

## Possible returns

* edges

  [\[Delivery​Carrier​Service​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Carrier​Service!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  A list of nodes that are contained in DeliveryCarrierServiceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierServices)

### Possible returns

* <->[Delivery​Carrier​Service​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-edges)
* <->[Delivery​Carrier​Service​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-nodes)
* <->[Delivery​Carrier​Service​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-pageInfo)
