---
title: InventoryTransferRemoveItemsPayload - GraphQL Admin
description: Return type for `inventoryTransferRemoveItems` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferRemoveItemsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferRemoveItemsPayload.md
---

# Inventory​Transfer​Remove​Items​Payload

payload

Return type for `inventoryTransferRemoveItems` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The transfer with line items removed.

* removed​Quantities

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The line items that have had their shippable quantity removed.

* user​Errors

  [\[Inventory​Transfer​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

  mutation

  This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferRemoveItems)
