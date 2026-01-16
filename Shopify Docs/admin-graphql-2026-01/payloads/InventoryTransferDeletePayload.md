---
title: InventoryTransferDeletePayload - GraphQL Admin
description: Return type for `inventoryTransferDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferDeletePayload.md
---

# Inventory​Transfer​Delete​Payload

payload

Return type for `inventoryTransferDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete)

  mutation

  Deletes an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to delete.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferDelete)
