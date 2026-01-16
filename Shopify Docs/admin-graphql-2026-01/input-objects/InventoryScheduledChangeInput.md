---
title: InventoryScheduledChangeInput - GraphQL Admin
description: The input fields for a scheduled change of an inventory item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeInput.md
---

# Inventory​Scheduled​Change​Input

input\_object

The input fields for a scheduled change of an inventory item.

## Fields

* expected​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time that the scheduled change is expected to happen.

* from​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition from.

* to​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition to.

***

## Input objects using this input

* [Inventory​Scheduled​Change​Item​Input.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput#fields-scheduledChanges)

  INPUT OBJECT

  The input fields for the inventory item associated with the scheduled changes that need to be applied.

***

## Map

### Input objects using this input

* [Inventory​Scheduled​Change​Item​Input.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput#fields-scheduledChanges)
