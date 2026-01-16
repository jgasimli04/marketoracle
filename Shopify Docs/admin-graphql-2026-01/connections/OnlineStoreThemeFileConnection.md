---
title: OnlineStoreThemeFileConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple OnlineStoreThemeFiles.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection.md
---

# Online​Store​Theme​File​Connection

connection

An auto-generated type for paginating through multiple OnlineStoreThemeFiles.

## Fields with this connection

* [Online​Store​Theme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.files)

  OBJECT

  A theme for display on the storefront. Themes control the visual appearance and functionality of the online store through templates, stylesheets, and assets that determine how [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), and other content display to customers.

  Each theme has a [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role) that indicates its status. Main themes are live on the storefront, unpublished themes are inactive, demo themes require purchase before publishing, and development themes are temporary for previewing during development. The theme includes [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations) for multi-language support.

***

## Possible returns

* edges

  [\[Online​Store​Theme​File​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Online​Store​Theme​File!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile)

  non-null

  A list of nodes that are contained in OnlineStoreThemeFileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* user​Errors

  [\[Online​Store​Theme​File​Read​Result!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult)

  non-null

  List of errors that occurred during the request.

***

## Map

### Fields with this connection

* {}[Online​Store​Theme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.files)

### Possible returns

* <->[Online​Store​Theme​File​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-edges)
* <->[Online​Store​Theme​File​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-nodes)
* <->[Online​Store​Theme​File​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-pageInfo)
* <->[Online​Store​Theme​File​Connection.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-userErrors)
