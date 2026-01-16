---
title: InventoryTransferCreateAsReadyToShipPayload - GraphQL Admin
description: Return type for `inventoryTransferCreateAsReadyToShip` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCreateAsReadyToShipPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCreateAsReadyToShipPayload.md
---

# Inventory​Transfer​Create​As​Ready​To​Ship​Payload

payload

Return type for `inventoryTransferCreateAsReadyToShip` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

  mutation

  Creates an inventory transfer in ready to ship.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * input

    [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferCreateAsReadyToShip)
