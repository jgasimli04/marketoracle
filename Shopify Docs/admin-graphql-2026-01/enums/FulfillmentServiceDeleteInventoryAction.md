---
title: FulfillmentServiceDeleteInventoryAction - GraphQL Admin
description: >-
  Actions that can be taken at the location when a client requests the deletion
  of the fulfillment service.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction.md
---

# Fulfillment​Service​Delete​Inventory​Action

enum

Actions that can be taken at the location when a client requests the deletion of the fulfillment service.

## Valid values

* DELETE

  Deactivate and delete the inventory and location.

* KEEP

  Keep the inventory in place and convert the Fulfillment Service's location to be merchant managed.

* TRANSFER

  Transfer the inventory and other dependencies to the provided location.

***

## Fields

* [fulfillment​Service​Delete.inventoryAction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete#arguments-inventoryAction)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[fulfillment​Service​Delete.inventoryAction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete#arguments-inventoryAction)
