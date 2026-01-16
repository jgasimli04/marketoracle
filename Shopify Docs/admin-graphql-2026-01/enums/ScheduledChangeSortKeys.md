---
title: ScheduledChangeSortKeys - GraphQL Admin
description: The set of valid sort keys for the ScheduledChange query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ScheduledChangeSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ScheduledChangeSortKeys.md
---

# Scheduled​Change​Sort​Keys

enum

The set of valid sort keys for the ScheduledChange query.

## Valid values

* EXPECTED\_​AT

  Sort by the `expected_at` value.

* ID

  Sort by the `id` value.

***

## Fields

* [Inventory​Level.scheduledChanges(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.scheduledChanges.arguments.sortKey)

  ARGUMENT

  The quantities of an inventory item at a specific location. Each inventory level connects one [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) to one [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), tracking multiple quantity states like available, on-hand, incoming, and committed.

  The [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities) field provides access to different inventory states. Learn [more about inventory states and relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

***

## Map

### Arguments with this enum

* <-|[Inventory​Level.scheduledChanges(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.scheduledChanges.arguments.sortKey)
