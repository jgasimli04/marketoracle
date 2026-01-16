---
title: InventoryTransferDuplicateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferDuplicateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDuplicateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferDuplicateUserErrorCode.md
---

# Inventory​Transfer​Duplicate​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferDuplicateUserError`.

## Valid values

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

***

## Fields

* [Inventory​Transfer​Duplicate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError#field-InventoryTransferDuplicateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferDuplicate`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Duplicate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError#field-InventoryTransferDuplicateUserError.fields.code)
