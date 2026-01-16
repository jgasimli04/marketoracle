---
title: TranslatableResourceConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple TranslatableResources.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection.md
---

# Translatable​Resource​Connection

connection

An auto-generated type for paginating through multiple TranslatableResources.

## Fields with this connection

* [Translatable​Resource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources)

  OBJECT

  A resource in Shopify that contains fields available for translation into different languages. Accesses the resource's translatable content, existing [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects, and any nested resources that can also be translated.

  The [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) includes field keys, values, and digest hashes needed when [registering translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).

  You can retrieve translations for specific [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) and [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) configurations. Each translation includes an `outdated` flag indicating whether the original content has changed since that translation was last updated.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

***

## Queries with this connection

* [translatable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)

  query

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for a specific resource type. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Type

    [Translatable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

* [translatable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)

  query

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for the specified resource IDs. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

  [\[Translatable​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Translatable​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

  non-null

  A list of nodes that are contained in TranslatableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Translatable​Resource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources)

### Queries with this connection

* \<?>[translatable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)
* \<?>[translatable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)

### Possible returns

* <->[Translatable​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-edges)
* <->[Translatable​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-nodes)
* <->[Translatable​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-pageInfo)
