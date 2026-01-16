---
title: CollectionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Collections.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection.md
---

# Collection​Connection

connection

An auto-generated type for paginating through multiple Collections.

## Fields with this connection

* [Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collections)

  OBJECT

  An authenticated link to an external platform that supports syndication and optionally order ingestion, such as Facebook, Pinterest, an online store, or Point of Sale (POS).

  Each channel provides access to its underlying [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App), published products and collections, and [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings, as well as what features of the platform it supports such as [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing). Use channels to manage where catalog items appear, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different customer touchpoints.

* [Discount​Collections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-DiscountCollections.fields.collections)

  OBJECT

  A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied.

* [Price​Rule​Item​Entitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.collections)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.collections)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collections)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Shop.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.collections)

  OBJECT

  Deprecated

***

## Queries with this connection

* [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

  query

  Retrieves a list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) in a store. Collections are groups of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize for display in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  Use the `collections` query when you need to:

  * Build a browsing interface for a store's product groupings.
  * Create collection searching, sorting, and filtering experiences (for example, by title, type, or published status).
  * Sync collection data with external systems.
  * Manage both custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) and smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collections.

  The `collections` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) for large catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-savedSearchId) for frequently used collection queries.

  The `collections` query returns collections with their associated metadata, including:

  * Basic collection information (title, description, handle, and type)
  * Collection image and SEO metadata
  * Product count and product relationships
  * Collection rules (for smart collections)
  * Publishing status and publication details
  * Metafields and custom attributes

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

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

    [Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * collection\_type

        string

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:
        * `custom`
        * `smart`

    * * id

        id

      * product\_id

        id

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by collections containing a product by its ID.

    * * product\_publication\_status

        string

      * publishable\_status

        string

      * published\_at

        time

      - Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the collection was published to the Online Store.

    * * published\_status

        string

      * title

        string

      - Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:
        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-visible`
        * `* {channel_app_id}-intended`
        * `* {channel_app_id}-hidden`
        * `unavailable`
        Example:
        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:unavailable`

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Collection​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Collection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  A list of nodes that are contained in CollectionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collections)
* {}[Discount​Collections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-DiscountCollections.fields.collections)
* {}[Price​Rule​Item​Entitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.collections)
* {}[Price​Rule​Line​Item​Prerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.collections)
* {}[Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections)
* {}[Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collections)

### Queries with this connection

* \<?>[collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

### Possible returns

* <->[Collection​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-edges)
* <->[Collection​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-nodes)
* <->[Collection​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-pageInfo)
