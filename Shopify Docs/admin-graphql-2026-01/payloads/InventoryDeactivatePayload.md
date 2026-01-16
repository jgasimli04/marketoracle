---
title: InventoryDeactivatePayload - GraphQL Admin
description: Return type for `inventoryDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryDeactivatePayload.md
---

# Inventory​Deactivate​Payload

payload

Return type for `inventoryDeactivate` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate)

  mutation

  Removes an inventory item's quantities from a location, and turns off inventory at the location.

  * inventory​Level​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory level to deactivate.

  ***

***

## Map

### Mutations with this payload

* [inventory​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryDeactivate)
