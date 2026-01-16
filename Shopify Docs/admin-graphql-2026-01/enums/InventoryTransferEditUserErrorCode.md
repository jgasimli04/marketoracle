---
title: InventoryTransferEditUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `InventoryTransferEditUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferEditUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferEditUserErrorCode.md
---

# Inventory​Transfer​Edit​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferEditUserError`.

## Valid values

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVENTORY\_​STATE\_​NOT\_​ACTIVE

  The item is not stocked at the intended location.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* TAG\_​EXCEEDS\_​MAX\_​LENGTH

  The tag exceeds the maximum length.

* TRANSFER\_​LOCATION\_​IMMUTABLE

  The location of a transfer cannot be updated. Only Draft Transfers can mutate their locations.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

* TRANSFER\_​ORIGIN\_​CANNOT\_​BE\_​THE\_​SAME\_​AS\_​DESTINATION

  The origin location cannot be the same as the destination location.

***

## Fields

* [Inventory​Transfer​Edit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError#field-InventoryTransferEditUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferEdit`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Edit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError#field-InventoryTransferEditUserError.fields.code)
