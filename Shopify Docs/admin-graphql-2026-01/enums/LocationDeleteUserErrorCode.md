---
title: LocationDeleteUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `LocationDeleteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeleteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeleteUserErrorCode.md
---

# Location​Delete​User​Error​Code

enum

Possible error codes that can be returned by `LocationDeleteUserError`.

## Valid values

* GENERIC\_​ERROR

  An error occurred while deleting the location.

* LOCATION\_​HAS\_​ACTIVE\_​RETAIL\_​SUBSCRIPTION

  The location cannot be deleted while it has any active Retail subscriptions in the Point of Sale channel.

* LOCATION\_​HAS\_​INVENTORY

  The location cannot be deleted while it has inventory.

* LOCATION\_​HAS\_​PENDING\_​ORDERS

  The location cannot be deleted while it has pending orders.

* LOCATION\_​IS\_​ACTIVE

  The location cannot be deleted while it is active.

* LOCATION\_​NOT\_​FOUND

  Location not found.

***

## Fields

* [Location​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError#field-LocationDeleteUserError.fields.code)

  OBJECT

  An error that occurs while deleting a location.

***

## Map

### Fields with this enum

* <-|[Location​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError#field-LocationDeleteUserError.fields.code)
