---
title: InventoryTransferEditPayload - GraphQL Admin
description: Return type for `inventoryTransferEdit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferEditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryTransferEditPayload.md
---

# Inventory​Transfer​Edit​Payload

payload

Return type for `inventoryTransferEdit` mutation.

## Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The edited inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Edit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

  mutation

  Edits an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory Transfer to be edited.

  * input

    [Inventory​Transfer​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput)

    required

    The input fields to edit the inventory transfer.

  ***

***

## Map

### Mutations with this payload

* [inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryTransferEdit)
