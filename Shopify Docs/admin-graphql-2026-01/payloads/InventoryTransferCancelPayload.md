---
title: InventoryTransferCancelPayload - GraphQL Admin
description: Return type for `inventoryTransferCancel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCancelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferCancelPayload.md
---

# Inventory​Transfer​Cancel​Payload

payload

Return type for `inventoryTransferCancel` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The cancelled inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Cancel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

  mutation

  Cancels an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to cancel.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferCancel)
