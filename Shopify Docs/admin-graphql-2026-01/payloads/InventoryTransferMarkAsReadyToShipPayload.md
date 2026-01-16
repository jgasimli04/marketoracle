---
title: InventoryTransferMarkAsReadyToShipPayload - GraphQL Admin
description: Return type for `inventoryTransferMarkAsReadyToShip` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferMarkAsReadyToShipPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferMarkAsReadyToShipPayload.md
---

# Inventory​Transfer​Mark​As​Ready​To​Ship​Payload

payload

Return type for `inventoryTransferMarkAsReadyToShip` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The ready to ship inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

  mutation

  Sets an inventory transfer to ready to ship.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to mark as ready to ship.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferMarkAsReadyToShip)
