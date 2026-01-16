---
title: InventoryTransferRemoveItemsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferRemoveItemsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferRemoveItemsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferRemoveItemsUserErrorCode.md
---

# Inventory​Transfer​Remove​Items​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferRemoveItemsUserError`.

## Valid values

* ALL\_​QUANTITY\_​SHIPPED

  The item cannot have its shippable quantity removed if all of its quantity is fully allocated in one or more shipments.

* CANT\_​REMOVE\_​ALL\_​ITEMS\_​FROM\_​READY\_​TO\_​SHIP\_​TRANSFER

  A ready to ship transfer must have at least one item.

* INVALID\_​TRANSFER\_​STATUS

  Current transfer status does not support this operation.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* ITEM\_​PRESENT\_​ON\_​DRAFT\_​SHIPMENT\_​WITH\_​ZERO\_​QUANTITY

  The item cannot be removed because it exists in a draft shipment with zero quantity.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

***

## Fields

* [Inventory​Transfer​Remove​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError#field-InventoryTransferRemoveItemsUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferRemoveItems`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Remove​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError#field-InventoryTransferRemoveItemsUserError.fields.code)
