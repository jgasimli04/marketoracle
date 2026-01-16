---
title: InventoryTransferCancelUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferCancelUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCancelUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCancelUserErrorCode.md
---

# Inventory​Transfer​Cancel​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferCancelUserError`.

## Valid values

* INVALID\_​TRANSFER\_​STATUS

  Current transfer status does not support this operation.

* SHIPMENT\_​EXISTS

  Shipment already exists for the transfer.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

***

## Fields

* [Inventory​Transfer​Cancel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError#field-InventoryTransferCancelUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCancel`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Cancel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError#field-InventoryTransferCancelUserError.fields.code)
