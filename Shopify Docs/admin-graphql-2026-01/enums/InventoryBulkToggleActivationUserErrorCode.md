---
title: InventoryBulkToggleActivationUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryBulkToggleActivationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryBulkToggleActivationUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryBulkToggleActivationUserErrorCode.md
---

# Inventory​Bulk​Toggle​Activation​User​Error​Code

enum

Possible error codes that can be returned by `InventoryBulkToggleActivationUserError`.

## Valid values

* CANNOT\_​DEACTIVATE\_​FROM\_​ONLY\_​LOCATION

  Cannot unstock an inventory item from the only location at which it is stocked.

* COMMITTED\_​INVENTORY\_​AT\_​LOCATION

  Cannot unstock this inventory item from this location because it has committed quantities.

* FAILED\_​TO\_​STOCK\_​AT\_​LOCATION

  Failed to stock this inventory item at this location.

* FAILED\_​TO\_​UNSTOCK\_​FROM\_​LOCATION

  Failed to unstock this inventory item from this location.

* GENERIC\_​ERROR

  An error occurred while setting the activation status.

* INCOMING\_​INVENTORY\_​AT\_​LOCATION

  Cannot unstock this inventory item from this location because it has incoming quantities.

* INVENTORY\_​ITEM\_​NOT\_​FOUND

  The inventory item was not found.

* INVENTORY\_​MANAGED\_​BY\_​3RD\_​PARTY

  Cannot stock this inventory item at this location because it is managed by a third-party fulfillment service.

* INVENTORY\_​MANAGED\_​BY\_​SHOPIFY

  Cannot stock this inventory item at this location because it is managed by Shopify.

* LOCATION\_​NOT\_​FOUND

  The location was not found.

* MISSING\_​SKU

  Cannot stock this inventory item at this location because the variant is missing a SKU.

* RESERVED\_​INVENTORY\_​AT\_​LOCATION

  Cannot unstock this inventory item from this location because it has unavailable quantities.

* COMMITTED\_​AND\_​INCOMING\_​INVENTORY\_​AT\_​LOCATION

  Deprecated

***

## Fields

* [Inventory​Bulk​Toggle​Activation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError#field-InventoryBulkToggleActivationUserError.fields.code)

  OBJECT

  An error that occurred while setting the activation status of an inventory item.

***

## Map

### Fields with this enum

* <-|[Inventory​Bulk​Toggle​Activation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError#field-InventoryBulkToggleActivationUserError.fields.code)
