---
title: InventoryBulkToggleActivationUserError - GraphQL Admin
description: >-
  An error that occurred while setting the activation status of an inventory
  item.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError.md
---

# Inventory​Bulk​Toggle​Activation​User​Error

object

Requires `read_inventory` access scope.

An error that occurred while setting the activation status of an inventory item.

## Fields

* code

  [Inventory​Bulk​Toggle​Activation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryBulkToggleActivationUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

  mutation

  Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

  The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to modify the activation status locations for.

  * inventory​Item​Updates

    [\[Inventory​Bulk​Toggle​Activation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

    required

    A list of pairs of locations and activate status to update for the specified inventory item.

  ***

***

## <\~> InventoryBulkToggleActivationUserError Mutations

### Mutated by

* <\~>[inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventoryBulkToggleActivationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
