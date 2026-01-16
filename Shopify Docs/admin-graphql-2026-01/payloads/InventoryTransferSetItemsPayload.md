---
title: InventoryTransferSetItemsPayload - GraphQL Admin
description: Return type for `inventoryTransferSetItems` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferSetItemsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferSetItemsPayload.md
---

# Inventory​Transfer​Set​Items​Payload

payload

Return type for `inventoryTransferSetItems` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The Transfer with its line items updated.

* updated​Line​Items

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The updated line items.

* user​Errors

  [\[Inventory​Transfer​Set​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferSetItems)
