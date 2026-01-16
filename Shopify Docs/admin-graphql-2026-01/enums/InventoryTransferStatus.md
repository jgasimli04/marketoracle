---
title: InventoryTransferStatus - GraphQL Admin
description: The status of a transfer.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus.md
---

# Inventory​Transfer​Status

enum

The status of a transfer.

## Valid values

* CANCELED

  The inventory transfer has been canceled.

* DRAFT

  The inventory transfer has been created but not yet finalized.

* IN\_​PROGRESS

  The inventory transfer is in progress, with a shipment currently underway or received.

* OTHER

  Status not included in the current enumeration set.

* READY\_​TO\_​SHIP

  The inventory transfer has been created, but not yet shipped.

* TRANSFERRED

  The inventory transfer has been completely received at the destination.

***

## Fields

* [Inventory​Transfer.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.status)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.status)
