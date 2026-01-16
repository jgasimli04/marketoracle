---
title: ProductConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Products.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection.md
---

# Product​Connection

connection

An auto-generated type for paginating through multiple Products.

## Fields with this connection

* [Channel.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.products)

  OBJECT

  An authenticated link to an external platform that supports syndication and optionally order ingestion, such as Facebook, Pinterest, an online store, or Point of Sale (POS).

  Each channel provides access to its underlying [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App), published products and collections, and [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings, as well as what features of the platform it supports such as [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing). Use channels to manage where catalog items appear, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different customer touchpoints.

* [Collection.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.products)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  Note

  Collections are unpublished by default. To make them available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Discount​Products.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.products)

  OBJECT

  A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied.

* [Price​Rule​Item​Entitlements.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.products)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.products)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productParents)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productParents)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* [Publication.includedProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publication.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Selling​Plan​Group.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.products)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  Caution

  Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

* [Shop.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.products)

  OBJECT

  Deprecated

***

## Queries with this connection

* [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

  query

  Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

  Use the `products` query when you need to:

  * Build a browsing interface for a product catalog.
  * Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
  * Implement product recommendations.
  * Sync product data with external systems.

  The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

  The `products` query returns products with their associated metadata, including:

  * Basic product information (for example, title, description, vendor, and type)
  * Product options and product variants, with their prices and inventory
  * Media attachments (for example, images and videos)
  * SEO metadata
  * Product categories and tags
  * Product availability and publishing statuses

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

    [Product​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * bundles

        boolean

      * category\_id

        string

      * collection\_id

        id

      * combined\_listing\_role

        string

      * created\_at

        time

      * delivery\_profile\_id

        id

      * error\_feedback

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-1234`

        Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

      - Example:

        * `bundles:true`

        Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

      - Example:

        * `category_id:sg-4-17-2-17`

        Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

      - Example:

        * `collection_id:108179161409`

        Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

      - Valid values:

        * `parent`
        * `child`
        * `no_role`

        Example:

        * `combined_listing_role:parent`

        Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by products with publishing errors.

    * * gift\_card

        boolean

      * handle

        string

      * has\_only\_composites

        boolean

      * has\_only\_default\_variant

        boolean

      * has\_variant\_with\_components

        boolean

      * id

        id

      * inventory\_total

        integer

      * is\_price\_reduced

        boolean

      * metafields.{namespace}.{key}

        mixed

      * out\_of\_stock\_somewhere

        boolean

      * price

        bigdecimal

      * product\_configuration\_owner

        string

      * product\_publication\_status

        string

      * product\_type

        string

      * publication\_ids

        string

      * publishable\_status

        string

      * published\_at

        time

      * published\_status

        string

      * sku

        string

      * status

        string

      * tag

        string

      * tag\_not

        string

      * title

        string

      * updated\_at

        time

      * variant\_id

        id

      * variant\_title

        string

      * vendor

        string

      - Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

      - Example:

        * `handle:the-minimal-snowboard`

        Filter by products that have only composite variants.

      - Example:

        * `has_only_composites:true`

        Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

      - Example:

        * `has_only_default_variant:true`

        Filter by products that have variants with associated components.

      - Example:

        * `has_variant_with_components:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by inventory count.

      - Example:

        * `inventory_total:0`
        * `inventory_total:>150`
        * `inventory_total:>=200`

        Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

      - Example:

        * `is_price_reduced:true`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:

        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

        Filter by products that are out of stock in at least one location.

      - Example:

        * `out_of_stock_somewhere:true`

        Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

      - Example:

        * `price:100.57`

        Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

      - Example:

        * `product_configuration_owner:10001`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

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

        Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter by a comma-separated list of publication IDs that are associated with the product.

      - Example:

        * `publication_ids:184111530305,184111694145`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the product was published to the online store and other sales channels.

      - Example:

        * `published_at:>2020-10-21T23:39:20Z`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) with suffixes: - `{channel_app_id}-published`: Returns resources published to the specified channel. - `{channel_app_id}-visible`: Same as `{channel_app_id}-published` (kept for backwards compatibility). - `{channel_app_id}-intended`: Returns resources added to the channel but not yet published. - `{channel_app_id}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

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

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

      - Valid values:

        * `active` Default
        * `archived`
        * `draft`

        Example:

        * `status:active,draft`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

        Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

      - Example:

        * `variant_id:45779434701121`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `variant_title:'Special ski wax'`

        Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Product​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  A list of nodes that are contained in ProductEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Channel.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.products)
* {}[Collection.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.products)
* {}[Discount​Products.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.products)
* {}[Price​Rule​Item​Entitlements.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.products)
* {}[Price​Rule​Line​Item​Prerequisites.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.products)
* {}[Product.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productParents)
* {}[Product​Variant.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productParents)
* {}[Publication.includedProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts)
* {}[Publication.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products)
* {}[Selling​Plan​Group.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.products)

### Queries with this connection

* \<?>[products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

### Possible returns

* <->[Product​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-edges)
* <->[Product​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-nodes)
* <->[Product​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-pageInfo)
