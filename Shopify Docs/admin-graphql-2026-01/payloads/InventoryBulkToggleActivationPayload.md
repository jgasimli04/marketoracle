---
title: InventoryBulkToggleActivationPayload - GraphQL Admin
description: Return type for `inventoryBulkToggleActivation` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryBulkToggleActivationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryBulkToggleActivationPayload.md
---

# Inventory​Bulk​Toggle​Activation​Payload

payload

Return type for `inventoryBulkToggleActivation` mutation.

## Fields

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* inventory​Levels

  [\[Inventory​Level!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The activated inventory levels.

* user​Errors

  [\[Inventory​Bulk​Toggle​Activation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryBulkToggleActivation)
