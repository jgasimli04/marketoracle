---
title: InventoryTransferLineItemUpdate - GraphQL Admin
description: Represents an update to a single transfer line item.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate.md
---

# Inventory​Transfer​Line​Item​Update

object

Requires `read_inventory` access scope.

Represents an update to a single transfer line item.

## Fields

* delta​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The delta quantity for the transfer line item.

* inventory​Item​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The inventory item ID for the transfer line item.

* new​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The new quantity for the transfer line item.

***

## Map

No referencing types

***

## Mutations

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

  mutation

  This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

  mutation

  This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferSetItems mutation.

  ***

***

## <\~> InventoryTransferLineItemUpdate Mutations

### Mutated by

* <\~>[inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)
* <\~>[inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)
