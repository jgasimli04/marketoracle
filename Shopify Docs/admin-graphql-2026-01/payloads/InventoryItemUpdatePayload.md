---
title: InventoryItemUpdatePayload - GraphQL Admin
description: Return type for `inventoryItemUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryItemUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryItemUpdatePayload.md
---

# Inventory​Item​Update​Payload

payload

Return type for `inventoryItemUpdate` mutation.

## Fields

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

  mutation

  Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to update.

  * input

    [Inventory​Item​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

    required

    The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

  ***

***

## Map

### Mutations with this payload

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryItemUpdate)
