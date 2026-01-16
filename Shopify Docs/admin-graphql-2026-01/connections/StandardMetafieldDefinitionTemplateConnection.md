---
title: StandardMetafieldDefinitionTemplateConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  StandardMetafieldDefinitionTemplates.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection.md
---

# Standard​Metafield​Definition​Template​Connection

connection

An auto-generated type for paginating through multiple StandardMetafieldDefinitionTemplates.

## Queries with this connection

* [standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

  query

  Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific purposes like product subtitles, care guides, or ISBN numbers. Use these templates to create standardized metafields across your store. Filter templates by constraint status or exclude those you've already activated.

  See the [list of standard metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions) for available templates.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    ### Arguments

    Filter standard metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter standard metafield definitions based on whether they are constrained.

  * exclude​Activated

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Filter standard metafield definitions that have already been activated.

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

  [\[Standard​Metafield​Definition​Template​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplateEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Standard​Metafield​Definition​Template!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate)

  non-null

  A list of nodes that are contained in StandardMetafieldDefinitionTemplateEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

### Possible returns

* <->[Standard​Metafield​Definition​Template​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-edges)
* <->[Standard​Metafield​Definition​Template​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-nodes)
* <->[Standard​Metafield​Definition​Template​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-pageInfo)
