---
title: InventorySetScheduledChangesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventorySetScheduledChangesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetScheduledChangesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetScheduledChangesUserErrorCode.md
---

# Inventory​Set​Scheduled​Changes​User​Error​Code

enum

Possible error codes that can be returned by `InventorySetScheduledChangesUserError`.

## Valid values

* DUPLICATE\_​FROM\_​NAME

  The item can only have one scheduled change for quantity name as the fromName.

* DUPLICATE\_​TO\_​NAME

  The item can only have one scheduled change for quantity name as the toName.

* ERROR\_​UPDATING\_​SCHEDULED

  There was an error updating the scheduled changes.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INCLUSION

  The specified field is invalid.

* INVALID\_​FROM\_​NAME

  The specified fromName is invalid.

* INVALID\_​REASON

  The specified reason is invalid.

* INVALID\_​TO\_​NAME

  The specified toName is invalid.

* INVENTORY\_​ITEM\_​NOT\_​FOUND

  The inventory item was not found.

* INVENTORY\_​STATE\_​NOT\_​FOUND

  The inventory item was not found at the location specified.

* ITEMS\_​EMPTY

  At least 1 item must be provided.

* LEDGER\_​DOCUMENT\_​INVALID

  The ledger document URI is invalid.

* LOCATION\_​NOT\_​FOUND

  The location couldn't be found.

* SAME\_​FROM\_​TO\_​NAMES

  The from\_name and to\_name can't be the same.

***

## Fields

* [Inventory​Set​Scheduled​Changes​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError#field-InventorySetScheduledChangesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventorySetScheduledChanges`.

***

## Map

### Fields with this enum

* <-|[Inventory​Set​Scheduled​Changes​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError#field-InventorySetScheduledChangesUserError.fields.code)
