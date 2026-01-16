---
title: MetaobjectConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Metaobjects.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection.md
---

# Metaobject​Connection

connection

An auto-generated type for paginating through multiple Metaobjects.

## Fields with this connection

* [Metaobject​Definition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.metaobjects)

  OBJECT

  Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.

  The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).

***

## Queries with this connection

* [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

  query

  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries for a specific type. Metaobjects are custom data structures that extend Shopify's data model with merchant or app-specific data types.

  Filter results using the query parameter with a search syntax for metaobject fields. Use `fields.{key}:{value}` to filter by field values, supporting any field previously marked as filterable. The `sortKey` parameter accepts `id`, `type`, `updated_at`, or `display_name` to control result ordering.

  Learn more about [querying metaobjects by field value](https://shopify.dev/docs/apps/build/custom-data/metafields/query-by-metafield-value).

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobjects to query.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of a field to sort with. Supports "id", "type", "updated\_at", and "display\_name".

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * display\_name

      string

    * * fields.{key}

        mixed

      * handle

        string

      - Filters metaobject entries by field value. Format: `fields.{key}:{value}`. Only fields marked as filterable in the metaobject definition can be used. Learn more about [querying metaobjects by field value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `fields.color:blue`
        * `fields.on_sale:true`

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

## Possible returns

* edges

  [\[Metaobject​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metaobject!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  non-null

  A list of nodes that are contained in MetaobjectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Metaobject​Definition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.metaobjects)

### Queries with this connection

* \<?>[metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

### Possible returns

* <->[Metaobject​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-edges)
* <->[Metaobject​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-nodes)
* <->[Metaobject​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-pageInfo)
