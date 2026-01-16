---
title: DeliveryProfileConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DeliveryProfiles.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection.md
---

# Delivery​Profile​Connection

connection

An auto-generated type for paginating through multiple DeliveryProfiles.

## Queries with this connection

* [delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

  query

  Returns a paginated list of [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) objects for the shop. Delivery profiles group [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that share shipping rates and zones.

  Each profile contains [`DeliveryLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup) objects that organize fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects and their associated delivery zones. [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects define geographic regions with specific shipping methods and rates. Use the [`merchantOwnedOnly`](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles#arguments-merchantOwnedOnly) filter to exclude profiles that third-party apps manage.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

  * merchant​Owned​Only

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    If `true`, returns only delivery profiles that were created by the merchant.

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

  [\[Delivery​Profile​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Profile!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  non-null

  A list of nodes that are contained in DeliveryProfileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

### Possible returns

* <->[Delivery​Profile​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-edges)
* <->[Delivery​Profile​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-nodes)
* <->[Delivery​Profile​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-pageInfo)
