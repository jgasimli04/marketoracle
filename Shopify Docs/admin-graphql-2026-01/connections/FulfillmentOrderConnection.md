---
title: FulfillmentOrderConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple FulfillmentOrders.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection.md
---

# Fulfillment​Order​Connection

connection

An auto-generated type for paginating through multiple FulfillmentOrders.

## Fields with this connection

* [Fulfillment.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentOrders)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

* [Fulfillment​Order.fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillmentOrdersForMerge)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  Note

  Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.

  [See below for more details on the lifecycle of a fulfillment order](#the-lifecycle-of-a-fulfillment-order).

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

* [Order.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.fulfillmentOrders)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  Note

  Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

  ***

  ***

  Caution

  Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

### Deprecated fields with this connection

* [Shop.assignedFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders)

  OBJECT

  Deprecated

* [Shop.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.fulfillmentOrders)

  OBJECT

  Deprecated

***

## Queries with this connection

* [assigned​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders)

  query

  The paginated list of fulfillment orders assigned to the shop locations owned by the app.

  Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations managed by [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) that are registered by the app. One app (api\_client) can host multiple fulfillment services on a shop. Each fulfillment service manages a dedicated location on a shop. Assigned fulfillment orders can have associated [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus), or might currently not be requested to be fulfilled.

  The app must have the `read_assigned_fulfillment_orders` [access scope](https://shopify.dev/docs/api/usage/access-scopes) to be able to retrieve the fulfillment orders assigned to its locations.

  All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default. Perform filtering with the `assignmentStatus` argument to receive only fulfillment orders that have been requested to be fulfilled.

  * assignment​Status

    [Fulfillment​Order​Assignment​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus)

    ### Arguments

    The assigment status of the fulfillment orders that should be returned. If `assignmentStatus` argument is not provided, then the query will return all assigned fulfillment orders, except those that have the `CLOSED` status.

  * location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Returns fulfillment orders only for certain locations, specified by a list of location IDs.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders)

  query

  The paginated list of all fulfillment orders. The returned fulfillment orders are filtered according to the [fulfillment order access scopes](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) granted to the app.

  Use this query to retrieve fulfillment orders assigned to merchant-managed locations, third-party fulfillment service locations, or all kinds of locations together.

  For fetching only the fulfillment orders assigned to the app's locations, use the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection.

  * include​Closed

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include closed fulfillment orders.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * assigned\_location\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * status

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

* [manual​Holds​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualHoldsFulfillmentOrders)

  query

  Returns a list of fulfillment orders that are on hold.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The query conditions used to filter fulfillment orders. Only fulfillment orders corresponding to orders matching the query will be counted. Supported filter parameters:

    * `order_financial_status`
    * `order_risk_level`
    * `shipping_address_coordinates_validated`

    See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

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

  [\[Fulfillment​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Fulfillment.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentOrders)
* {}[Fulfillment​Order.fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillmentOrdersForMerge)
* {}[Order.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.fulfillmentOrders)

### Queries with this connection

* \<?>[assigned​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders)
* \<?>[fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders)
* \<?>[manual​Holds​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualHoldsFulfillmentOrders)

### Possible returns

* <->[Fulfillment​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-edges)
* <->[Fulfillment​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-nodes)
* <->[Fulfillment​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-pageInfo)
