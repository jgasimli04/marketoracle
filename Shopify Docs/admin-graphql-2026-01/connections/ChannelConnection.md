---
title: ChannelConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Channels.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection.md
---

# Channel​Connection

connection

An auto-generated type for paginating through multiple Channels.

## Fields with this connection

### Deprecated fields with this connection

* [Collection.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedChannels)

  OBJECT

  Deprecated

* [Product.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedChannels)

  OBJECT

  Deprecated

* [Publishable.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedChannels)

  INTERFACE

  Deprecated

* [Shop.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.channels)

  OBJECT

  Deprecated

***

## Queries with this connection

* [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

  query

  Returns active [channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) where merchants sell products and collections. Each channel is an authenticated link to an external platform such as marketplaces, social media platforms, online stores, or point-of-sale systems.

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

***

## Possible returns

* edges

  [\[Channel​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Channel!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-null

  A list of nodes that are contained in ChannelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

### Possible returns

* <->[Channel​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-edges)
* <->[Channel​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-nodes)
* <->[Channel​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-pageInfo)
