---
title: InventoryShipment - GraphQL Admin
description: Represents an inventory shipment.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment.md
---

# Inventory​Shipment

object

Requires `read_inventory_shipments` access scope.

Represents an inventory shipment.

## Fields

* date​Created

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the shipment was created in UTC.

* date​Received

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the shipment was initially received in UTC.

* date​Shipped

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the shipment was shipped in UTC.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Items

  [Inventory​Shipment​Line​Item​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection)

  The line items included in this shipment.

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

    [Shipment​Line​Item​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShipmentLineItemSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

        Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* line​Items​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of line items associated with the inventory shipment. Limited to a maximum of 10000 by default.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

        Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Default:10000

    The upper bound on count value before returning a result. Use `null` to have no limit.

  ***

* line​Item​Total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of all items in the shipment.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the inventory shipment.

* status

  [Inventory​Shipment​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus)

  non-null

  The current status of the shipment.

* total​Accepted​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of items accepted across all line items in this shipment.

* total​Received​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of items received (both accepted and rejected) across all line items in this shipment.

* total​Rejected​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total quantity of items rejected across all line items in this shipment.

* tracking

  [Inventory​Shipment​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentTracking)

  The tracking information for the shipment.

***

## Map

### Fields and connections with this object

* <->[InventoryShipmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-nodes)
* {}[InventoryShipmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge#field-InventoryShipmentEdge.fields.node)
* {}[InventoryTransfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.shipments)

***

## Queries

* [inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipment)

  query

  Retrieves an [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) by ID. Returns tracking details, [`InventoryShipmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem) objects with quantities, and the shipment's current [`InventoryShipmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment.

  ***

***

## \<?>InventoryShipment Queries

### Queried by

* \<?>[inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipment)

***

## Mutations

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

  mutation

  Adds items to an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to modify.

  * line​Items

    [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

    required

    The list of line items to add to the inventory shipment.

  ***

* [inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

  mutation

  Adds a draft shipment to an inventory transfer.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

* [inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

  mutation

  Adds an in-transit shipment to an inventory transfer.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

* [inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

  mutation

  Marks a draft inventory shipment as in transit.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to mark in transit.

  * date​Shipped

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the shipment was shipped.

  ***

* [inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

  mutation

  Receive an inventory shipment.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to receive.

  * line​Items

    [\[Inventory​Shipment​Receive​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput)

    The list of receive line items for the inventory shipment.

  * date​Received

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the inventory shipment was initially received.

  * bulk​Receive​Action

    [Inventory​Shipment​Receive​Line​Item​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

    The bulk receive action for the inventory shipment.

  ***

* [inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

  mutation

  Remove items from an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to remove items from.

  * line​Items

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of inventory shipment line item ids representing the items to be removed from the shipment.

  ***

* [inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

  mutation

  Edits the tracking info on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment whose tracking info is being edited.

  * tracking

    [Inventory​Shipment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

    required

    The tracking info to edit on the inventory shipment.

  ***

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

  mutation

  Updates items on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to update item quantities.

  * items

    [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

    Default:\[]

    The list of line items to be updated to the shipment.

  ***

***

## <\~> InventoryShipment Mutations

### Mutated by

* <\~>[inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)
* <\~>[inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)
* <\~>[inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)
* <\~>[inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)
* <\~>[inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)
* <\~>[inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)
* <\~>[inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)
* <\~>[inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ||-InventoryShipment Implements

### Implements

* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
