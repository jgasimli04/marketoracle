---
title: DiscountAutomaticNode - GraphQL Admin
description: >-
  The `DiscountAutomaticNode` object enables you to manage [automatic
  discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts)
  that are applied when an order meets specific criteria. You can create amount
  off, free shipping, or buy X get Y automatic discounts. For example, you can
  offer customers a free shipping discount that applies when conditions are met.
  Or you can offer customers a buy X get Y discount that's automatically applied
  when customers spend a specified amount of money, or a specified quantity of
  products.


  Learn more about working with [Shopify's discount
  model](https://shopify.dev/docs/apps/build/discounts),

  including related queries, mutations, limitations, and considerations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode.md
---

# Discount​Automatic​Node

object

Requires Apps must have `read_discounts` access scope.

The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

## Fields

* automatic​Discount

  [Discount​Automatic!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

  non-null

  A discount that's applied automatically when an order meets specific criteria. Learn more about [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).

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

* <->[DiscountAutomaticNodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#returns-nodes)
* {}[DiscountAutomaticNodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge#field-DiscountAutomaticNodeEdge.fields.node)

### Possible type in

* [Metafield​Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

***

## Queries

* [automatic​Discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNode)

  query

  Returns a `DiscountAutomaticNode` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `DiscountAutomaticNode` to return.

  ***

* [automatic​Discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNodes)

  query

  Deprecated

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

    [Automatic​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * status

        string

      * type

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the discount status.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

        Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `percentage`

        Example:

        * `type:bxgy`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## \<?>DiscountAutomaticNode Queries

### Queried by

* \<?>[automatic​Discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNode)

***

## Mutations

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

  mutation

  Activates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to activate.

  ***

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) mutation.

  ***

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    ### Arguments

    The input data used to create the automatic amount off discount.

  ***

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

  mutation

  Updates an existing [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic amount off discount to update.

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    The input data used to update the automatic amount off discount.

  ***

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

  ***

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    ### Arguments

    The input data used to create the automatic BXGY discount.

  ***

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

  mutation

  Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  Note

  To update code discounts, use the [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate) mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic BXGY discount to update.

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    The input data used to update the automatic BXGY discount.

  ***

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

  mutation

  Deactivates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to deactivate.

  ***

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

  mutation

  Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

  For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

  Use `DiscountAutomaticFreeShippingCreate` to:

  * Set up code-free shipping promotions
  * Create order value-based shipping incentives
  * Target specific customer groups with shipping benefits
  * Establish location-based shipping discounts

  The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

  Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    ### Arguments

    The input data used to create the automatic free shipping discount.

  ***

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

  mutation

  Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requirements without recreating the entire discount structure.

  For example, extending a holiday free shipping promotion to include additional countries, adjusting the minimum order value threshold, or expanding customer eligibility to include new segments.

  Use `DiscountAutomaticFreeShippingUpdate` to:

  * Modify shipping discount thresholds and criteria
  * Expand or restrict geographic availability
  * Update customer targeting and eligibility rules
  * Adjust promotion timing and activation periods

  Changes take effect immediately for new orders, while the mutation validates all modifications and reports any configuration conflicts through user errors.

  Learn more about [managing automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic free shipping discount to update.

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    The input data used to update the automatic free shipping discount.

  ***

***

## <\~> DiscountAutomaticNode Mutations

### Mutated by

* <\~>[discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)
* <\~>[discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)
* <\~>[discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)
* <\~>[discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)
* <\~>[discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)
* <\~>[discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)
* <\~>[discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)
* <\~>[discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

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

## ||-DiscountAutomaticNode Implements

### Implements

* ||-[Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
* ||-[Has​Metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
* ||-[Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
