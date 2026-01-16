---
title: LocationDeactivateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `LocationDeactivateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeactivateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeactivateUserErrorCode.md
---

# Location​Deactivate​User​Error​Code

enum

Possible error codes that can be returned by `LocationDeactivateUserError`.

## Valid values

* CANNOT\_​DISABLE\_​ONLINE\_​ORDER\_​FULFILLMENT

  At least one location must fulfill online orders.

* DESTINATION\_​LOCATION\_​IS\_​THE\_​SAME\_​LOCATION

  Destination location is the same as the location to be deactivated.

* DESTINATION\_​LOCATION\_​NOT\_​FOUND\_​OR\_​INACTIVE

  Destination location is not found or inactive.

* DESTINATION\_​LOCATION\_​NOT\_​SHOPIFY\_​MANAGED

  Destination location is not Shopify managed.

* FAILED\_​TO\_​RELOCATE\_​ACTIVE\_​INVENTORIES

  Failed to relocate active inventories to the destination location.

* FAILED\_​TO\_​RELOCATE\_​INCOMING\_​MOVEMENTS

  Failed to relocate incoming movements to the destination location.

* FAILED\_​TO\_​RELOCATE\_​OPEN\_​PURCHASE\_​ORDERS

  Failed to relocate open purchase orders to the destination location.

* HAS\_​ACTIVE\_​INVENTORY\_​ERROR

  Location could not be deactivated without specifying where to relocate inventory at the location.

* HAS\_​ACTIVE\_​RETAIL\_​SUBSCRIPTIONS

  Location needs to be removed from Shopify POS for Retail subscription in Point of Sale channel.

* HAS\_​FULFILLMENT\_​ORDERS\_​ERROR

  Location could not be deactivated because it has pending orders.

* HAS\_​INCOMING\_​FROM\_​EXTERNAL\_​DOCUMENT\_​SOURCES

  Location could not be deactivated because it has incoming inventory quantities from third party applications.

* HAS\_​INCOMING\_​MOVEMENTS\_​ERROR

  Location could not be deactivated because it has open Shopify Fulfillment Network transfers.

* HAS\_​OPEN\_​PURCHASE\_​ORDERS\_​ERROR

  Location could not be deactivated because it has open purchase orders.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* LOCATION\_​NOT\_​FOUND

  Location not found.

* PERMANENTLY\_​BLOCKED\_​FROM\_​DEACTIVATION\_​ERROR

  Location either has a fulfillment service or is the only location with a shipping address.

* TEMPORARILY\_​BLOCKED\_​FROM\_​DEACTIVATION\_​ERROR

  Location has incoming inventory. The location can be deactivated after the inventory has been received.

***

## Fields

* [Location​Deactivate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError#field-LocationDeactivateUserError.fields.code)

  OBJECT

  The possible errors that can be returned when executing the `locationDeactivate` mutation.

***

## Map

### Fields with this enum

* <-|[Location​Deactivate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError#field-LocationDeactivateUserError.fields.code)
