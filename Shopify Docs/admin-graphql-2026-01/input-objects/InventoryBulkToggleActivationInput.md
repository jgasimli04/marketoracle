---
title: InventoryBulkToggleActivationInput - GraphQL Admin
description: >-
  The input fields to specify whether the inventory item should be activated or
  not at the specified location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput.md
---

# Inventory​Bulk​Toggle​Activation​Input

input\_object

The input fields to specify whether the inventory item should be activated or not at the specified location.

## Fields

* activate

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the inventory item can be stocked at the specified location. To deactivate, set the value to false which removes an inventory item's quantities from that location, and turns off inventory at that location.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location to modify the inventory item's stocked status.

***

## Map

No referencing types
