---
title: InventoryTransferCreatePayload - GraphQL Admin
description: Return type for `inventoryTransferCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCreatePayload.md
---

# Inventory​Transfer​Create​Payload

payload

Return type for `inventoryTransferCreate` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

  mutation

  Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

  Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferCreate)
