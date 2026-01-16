---
title: DiscountNode - GraphQL Admin
description: >-
  The `DiscountNode` object enables you to manage
  [discounts](https://help.shopify.com/manual/discounts), which are applied at
  checkout or on a cart.



  Discounts are a way for merchants to promote sales and special offers, or as
  customer loyalty rewards. Discounts can apply to [orders, products, or
  shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and
  can be either automatic or code-based. For example, you can offer customers a
  buy X get Y discount that's automatically applied when purchases meet specific
  criteria. Or, you can offer discounts where customers have to enter a code to
  redeem an amount off discount on products, variants, or collections in a
  store.


  Learn more about working with [Shopify's discount
  model](https://shopify.dev/docs/apps/build/discounts),

  including related mutations, limitations, and considerations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode.md'
---

# Discount​Node

object

Requires Apps must have `read_discounts` access scope.

The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

## Fields

* discount

  [Discount!](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)

  non-null

  A discount that's applied at checkout or on cart.

  Discounts can be [automatic or code-based](https://shopify.dev/docs/apps/build/discounts#discount-methods).

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The paginated list of events associated with the host subject.

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

    [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * action

        string

      * comments

        boolean

      * created\_at

        time

      * id

        id

      * subject\_type

        string

      - The action that occured.

      - Example:

        * `action:create`

        Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

      - Example:

        * `false`
        * `true`

        Filter by the date and time when the event happened.

      - Example:

        * `created_at:>2020-10-21`
        * `created_at:<now`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

        Example:

        * `PRODUCT_VARIANT`
        * `PRODUCT`
        * `COLLECTION`

  ***

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The key for the metafield.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

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

* metafield​Definitions

  [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

  non-nullDeprecated

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter metafield definitions by namespace.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter by the definition's pinned status.

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

## Map

### Fields and connections with this object

* {}[CustomerMergePreviewDefaultFields.discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)
* <->[DiscountNodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-nodes)
* {}[DiscountNodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge#field-DiscountNodeEdge.fields.node)
* {}[DraftOrderPlatformDiscount.discountNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount#field-DraftOrderPlatformDiscount.fields.discountNode)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNode)

  query

  Returns a `DiscountNode` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountNode` to return.

  ***

* [discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

  query

  Returns a list of discounts.

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

    [Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * code

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * method

        string

      * starts\_at

        time

      * status

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

      - Valid values:

        * `automatic`
        * `code`

        Example:

        * `method:code`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## \<?>DiscountNode Queries

### Queried by

* \<?>[discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNode)
* \<?>[discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

***

## Interfaces

* * [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    interface

  * [Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ||-DiscountNode Implements

### Implements

* ||-[Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* ||-[Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* ||-[Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
