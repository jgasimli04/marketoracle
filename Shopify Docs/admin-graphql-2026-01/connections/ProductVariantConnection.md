---
title: ProductVariantConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ProductVariants.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection.md
---

# Product​Variant​Connection

connection

An auto-generated type for paginating through multiple ProductVariants.

## Fields with this connection

* [Delivery​Profile​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.variants)

  OBJECT

  A product and the subset of associated variants that are part of this delivery profile.

* [Discount​Products.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.productVariants)

  OBJECT

  A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied.

* [Inventory​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.variants)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

* [Price​Rule​Item​Entitlements.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.productVariants)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.productVariants)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Bundle​Component.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.componentVariants)

  OBJECT

  The product's component information.

* [Product​Component​Type.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.componentVariants)

  OBJECT

  The product component information.

* [Product​Component​Type.nonComponentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.nonComponentVariants)

  OBJECT

  The product component information.

* [Selling​Plan​Group.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.productVariants)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  Caution

  Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

* [Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.insufficientStockProductVariants)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

### Deprecated fields with this connection

* [Shop.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVariants)

  OBJECT

  Deprecated

* [Subscription​Billing​Attempt​Out​Of​Stock​Product​Variants​Error.outOfStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError#field-SubscriptionBillingAttemptOutOfStockProductVariantsError.fields.outOfStockProductVariants)

  OBJECT

  Deprecated

***

## Queries with this connection

* [product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants)

  query

  Retrieves a list of [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

  A product variant is a specific version of a product that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `productVariants` query when you need to:

  * Search for product variants by attributes such as SKU, barcode, or inventory quantity.
  * Filter product variants by attributes, such as whether they're gift cards or have custom metafields.
  * Fetch product variants for bulk operations, such as updating prices or inventory.
  * Preload data for product variants, such as inventory items, selected options, or associated products.

  The `productVariants` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-savedSearchId) for frequently used product variant queries.

  The `productVariants` query returns product variants with their associated metadata, including:

  * Basic product variant information (for example, title, SKU, barcode, price, and inventory)
  * Media attachments (for example, images and videos)
  * Associated products, selling plans, bundles, and metafields

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

    [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * collection

        string

      * delivery\_profile\_id

        id

      * exclude\_composite

        boolean

      * exclude\_variants\_with\_components

        boolean

      * gift\_card

        boolean

      * id

        id

      * inventory\_quantity

        integer

      * location\_id

        id

      * managed

        boolean

      * managed\_by

        string

      * option1

        string

      * option2

        string

      * option3

        string

      * product\_id

        id

      * product\_ids

        string

      * product\_publication\_status

        string

      * product\_status

        string

      * product\_type

        string

      * publishable\_status

        string

      * published\_status

        string

      * requires\_components

        boolean

      * sku

        string

      * tag

        string

      * tag\_not

        string

      * taxable

        boolean

      * title

        string

      * updated\_at

        time

      * vendor

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-123`

        Filter by the [ID of the collection](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) that the product variant belongs to.

      - Example:

        * `collection:465903092033`

        Filter by the product variant [delivery profile ID](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-deliveryprofile) (`ProductVariant.deliveryProfile.id`).

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by product variants that aren't composites.

      - Example:

        * `exclude_composite:true`

        Filter by whether there are [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with the product variants in a bundle.

      - Example:

        * `exclude_variants_with_components:true`

        Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by an aggregate of inventory across all locations where the product variant is stocked.

      - Example:

        * `inventory_quantity:10`

        Filter by the [location ID](https://shopify.dev/api/admin-graphql/latest/objects/Location#field-id) for the product variant.

      - Example:

        * `location_id:88511152449`

        Filter by whether there is fulfillment service tracking associated with the product variants.

      - Example:

        * `managed:true`

        Filter by the fulfillment service that tracks the number of items in stock for the product variant.

      - Example:

        * `managed_by:shopify`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option1:small`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option2:medium`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option3:large`

        Filter by the product [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id) field.

      - Example:

        * `product_id:8474977763649`

        Filter by a comma-separated list of product [IDs](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id).

      - Example:

        * `product_ids:8474977763649,8474977796417`

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

        Filter by a comma-separated list of product [statuses](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-status).

      - Example:

        * `product_status:ACTIVE,DRAFT`

        Filter by the product type that's associated with the product variants.

      - Example:

        * `product_type:snowboard`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

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

        Filter by whether the product variant can only be purchased with components. [Learn more](https://shopify.dev/apps/build/product-merchandising/bundles#store-eligibility).

      - Example:

        * `requires_components:true`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product variant [`taxable`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-taxable) field.

      - Example:

        * `taxable:false`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `title:ice`

        Filter by date and time when the product variant was updated.

      - Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

        Filter by the origin or source of the product variant. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

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

  [\[Product​Variant​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Variant!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  A list of nodes that are contained in ProductVariantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Profile​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.variants)
* {}[Discount​Products.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.productVariants)
* {}[Inventory​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.variants)
* {}[Price​Rule​Item​Entitlements.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.productVariants)
* {}[Price​Rule​Line​Item​Prerequisites.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.productVariants)
* {}[Product.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants)
* {}[Product​Bundle​Component.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.componentVariants)
* {}[Product​Component​Type.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.componentVariants)
* {}[Product​Component​Type.nonComponentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.nonComponentVariants)
* {}[Selling​Plan​Group.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.productVariants)
* {}[Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.insufficientStockProductVariants)

### Queries with this connection

* \<?>[product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants)

### Possible returns

* <->[Product​Variant​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-edges)
* <->[Product​Variant​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-nodes)
* <->[Product​Variant​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-pageInfo)
