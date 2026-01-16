---
title: SellingPlanGroupConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple SellingPlanGroups.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection.md
---

# Selling​Plan​Group​Connection

connection

An auto-generated type for paginating through multiple SellingPlanGroups.

## Fields with this connection

* [Delivery​Profile.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.sellingPlanGroups)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

* [Product.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.sellingPlanGroups)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanGroups)

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

***

## Queries with this connection

* [selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

  query

  Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to the app making the API call. Selling plan groups are selling methods like subscriptions, preorders, or other purchase options that merchants offer to customers.

  Each group has one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that define specific billing and delivery schedules, pricing adjustments, and policies. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups#arguments-query) argument to search by name or filter results by other criteria.

  Learn more about [building selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

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

    [Selling​Plan​Group​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      * category

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:

        * `CURRENT` Default
        * `ALL`
        * `* (numeric app ID)`

        A comma-separated list of categories.

      - Valid values:
        * `SUBSCRIPTION`
        * `PRE_ORDER`
        * `TRY_BEFORE_YOU_BUY`
        * `OTHER`

    * delivery\_frequency

      string

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * percentage\_off

      float

  ***

***

## Possible returns

* edges

  [\[Selling​Plan​Group​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Selling​Plan​Group!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  non-null

  A list of nodes that are contained in SellingPlanGroupEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Profile.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.sellingPlanGroups)
* {}[Product.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.sellingPlanGroups)
* {}[Product​Variant.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanGroups)

### Queries with this connection

* \<?>[selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

### Possible returns

* <->[Selling​Plan​Group​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-edges)
* <->[Selling​Plan​Group​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-nodes)
* <->[Selling​Plan​Group​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-pageInfo)
