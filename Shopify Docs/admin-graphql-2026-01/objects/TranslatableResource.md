---
title: TranslatableResource - GraphQL Admin
description: >-
  A resource in Shopify that contains fields available for translation into
  different languages. Accesses the resource's translatable content, existing
  [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)
  objects, and any nested resources that can also be translated.


  The
  [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent)
  includes field keys, values, and digest hashes needed when [registering
  translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).


  You can retrieve translations for specific
  [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale)
  and
  [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)
  configurations. Each translation includes an `outdated` flag indicating
  whether the original content has changed since that translation was last
  updated.


  Learn more about [managing translated
  content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource.md
---

# Translatable​Resource

object

Requires `read_translations` access scope.

A resource in Shopify that contains fields available for translation into different languages. Accesses the resource's translatable content, existing [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects, and any nested resources that can also be translated.

The [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) includes field keys, values, and digest hashes needed when [registering translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).

You can retrieve translations for specific [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) and [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) configurations. Each translation includes an `outdated` flag indicating whether the original content has changed since that translation was last updated.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Fields

* nested​Translatable​Resources

  [Translatable​Resource​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection)

  non-null

  Nested translatable resources under the current resource.

  * resource​Type

    [Translatable​Resource​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType)

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

* resource​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  GID of the resource.

* translatable​Content

  [\[Translatable​Content!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent)

  non-null

  Translatable content.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    Filters translatable content by market ID. Use this argument to retrieve translatable content specific to a market.

  ***

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  Translatable content translations (includes unpublished locales).

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations by locale.

  * outdated

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Filters by outdated translations.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

***

## Map

### Fields and connections with this object

* {}[TranslatableResource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources)
* <->[TranslatableResourceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-nodes)
* {}[TranslatableResourceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge#field-TranslatableResourceEdge.fields.node)

***

## Queries

* [translatable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource)

  query

  Retrieves a resource that has translatable fields. Returns the resource's [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects for different locales and markets, along with the original [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) and digest values needed to register new translations. Provides access to existing translations, translatable content with digest hashes for translation registration, and nested translatable resources like [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Find a translatable resource by ID.

  ***

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

## \<?>TranslatableResource Queries

### Queried by

* \<?>[translatable​Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource)
* \<?>[translatable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)
* \<?>[translatable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)
