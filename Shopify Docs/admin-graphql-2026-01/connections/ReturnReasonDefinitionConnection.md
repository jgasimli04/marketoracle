---
title: ReturnReasonDefinitionConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ReturnReasonDefinitions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection.md
---

# Return​Reason​Definition​Connection

connection

An auto-generated type for paginating through multiple ReturnReasonDefinitions.

## Fields with this connection

* [Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

  OBJECT

  The `LineItem` object represents a single product or service that a customer purchased in an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Each line item is associated with a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation). Line items contain details about what was purchased, including the product variant, quantity, pricing, and fulfillment status.

  Use the `LineItem` object to manage the following processes:

  * [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
  * [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
  * Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
  * Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
  * Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.

  Line items can also include custom attributes and properties, allowing merchants to add specific details about each item in an order. Learn more about [managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

***

## Queries with this connection

* [return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

  query

  Returns the full library of available return reason definitions.

  Use this query to retrieve the standardized return reasons available for creating returns. Filter by IDs or handles to get specific definitions.

  Only non-deleted reasons should be shown to customers when creating new returns. Deleted reasons have been replaced with better alternatives and are no longer recommended. However, they remain valid options and may still appear on existing returns.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    A list of return reason definition IDs to filter by.

  * handles

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A list of return reason definition handles to filter by.

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

    [Return​Reason​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReasonDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * deleted

        boolean

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether the return reason has been removed from taxonomy.

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by name.

  ***

***

## Possible returns

* edges

  [\[Return​Reason​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return​Reason​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  non-null

  A list of nodes that are contained in ReturnReasonDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

### Queries with this connection

* \<?>[return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

### Possible returns

* <->[Return​Reason​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-edges)
* <->[Return​Reason​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-nodes)
* <->[Return​Reason​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-pageInfo)
