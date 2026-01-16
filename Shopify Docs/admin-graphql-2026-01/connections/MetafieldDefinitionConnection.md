---
title: MetafieldDefinitionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MetafieldDefinitions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection.md
---

# Metafield​Definition​Connection

connection

An auto-generated type for paginating through multiple MetafieldDefinitions.

## Fields with this connection

### Deprecated fields with this connection

* [Article.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Blog.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Collection.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Company.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Company​Location.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Customer.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Delivery​Customization.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Automatic​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Code​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Has​Metafield​Definitions.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions#fields-metafieldDefinitions)

  INTERFACE

  Deprecated

* [Inventory​Transfer.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Location.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Market.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Order.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Page.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Payment​Customization.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Product.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Product​Variant.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Selling​Plan.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Shop.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Validation.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafieldDefinitions)

  OBJECT

  Deprecated

***

## Queries with this connection

* [metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

  query

  Returns a list of metafield definitions.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter metafield definition by key.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definition by namespace.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    Filter the metafield definition by the specific owner type.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter the metafield definition by the pinned status.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    Filter metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter metafield definitions based on whether they are constrained.

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

  * sort​Key

    [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * key

        string

      * namespace

        string

      * owner\_type

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the metafield definition was created.

      - Example:

        * `created_at:>2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

      - Example:

        * `key:some-key`

        Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

      - Example:

        * `namespace:some-namespace`

        Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

      - Example:

        * `owner_type:PRODUCT`

        Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

      - Example:

        * `type:single_line_text_field`

        Filter by the date and time when the metafield definition was last updated.

        Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

***

## Possible returns

* edges

  [\[Metafield​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  A list of nodes that are contained in MetafieldDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

### Possible returns

* <->[Metafield​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-edges)
* <->[Metafield​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-nodes)
* <->[Metafield​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-pageInfo)
