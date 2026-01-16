---
title: OnlineStoreThemeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple OnlineStoreThemes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection.md
---

# Online​Store​Theme​Connection

connection

An auto-generated type for paginating through multiple OnlineStoreThemes.

## Queries with this connection

* [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

  query

  Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online store. Themes control the appearance and layout of the storefront.

  You can filter themes by [`role`](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles) to find specific theme types, such as `MAIN` for the published theme and `UNPUBLISHED` for draft themes.

  * roles

    [\[Theme​Role!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    ### Arguments

    The theme roles to filter by.

  * names

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The theme names to filter by. Use '\*' to match zero or more characters.

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

  [\[Online​Store​Theme​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Online​Store​Theme!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  non-null

  A list of nodes that are contained in OnlineStoreThemeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

### Possible returns

* <->[Online​Store​Theme​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-edges)
* <->[Online​Store​Theme​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-nodes)
* <->[Online​Store​Theme​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-pageInfo)
