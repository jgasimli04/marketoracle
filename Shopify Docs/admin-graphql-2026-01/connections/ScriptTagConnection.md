---
title: ScriptTagConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ScriptTags.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection.md
---

# Script​Tag​Connection

connection

An auto-generated type for paginating through multiple ScriptTags.

## Queries with this connection

* [script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

  query

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  A list of script tags.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * src

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * src

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The source URL of the script tag to filter by.

  ***

***

## Possible returns

* edges

  [\[Script​Tag​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Script​Tag!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  non-null

  A list of nodes that are contained in ScriptTagEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

### Possible returns

* <->[Script​Tag​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-edges)
* <->[Script​Tag​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-nodes)
* <->[Script​Tag​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-pageInfo)
