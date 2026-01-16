---
title: FileConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Files.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection.md
---

# File​Connection

connection

An auto-generated type for paginating through multiple Files.

## Queries with this connection

* [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)

  query

  Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets that merchants can upload to their store for various purposes including product images, marketing materials, documents, and brand assets.

  Use the `files` query to retrieve information associated with the following workflows:

  * [Managing product media and images](https://shopify.dev/docs/apps/build/online-store/product-media)
  * [Theme development and asset management](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
  * Brand asset management and [checkout branding](https://shopify.dev/docs/apps/build/checkout/styling/add-favicon)

  Files can include multiple [content types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType), such as images, videos, 3D models, and generic files. Each file has properties like dimensions, file size, alt text for accessibility, and upload status. Files can be filtered by [media type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType) and can be associated with [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [themes](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme), and other store resources.

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

    [File​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * filename

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

    * media\_type

      string

    * original\_upload\_size

      float

    * product\_id

      string

    * status

      string

    * updated\_at

      time

    * used\_in

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[File​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[File!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  non-null

  A list of nodes that are contained in FileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)

### Possible returns

* <->[File​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-edges)
* <->[File​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-nodes)
* <->[File​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-pageInfo)
