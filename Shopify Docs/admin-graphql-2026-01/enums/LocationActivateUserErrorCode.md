---
title: LocationActivateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `LocationActivateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationActivateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationActivateUserErrorCode.md
---

# Location​Activate​User​Error​Code

enum

Possible error codes that can be returned by `LocationActivateUserError`.

## Valid values

* GENERIC\_​ERROR

  An error occurred while activating the location.

* HAS\_​NON\_​UNIQUE\_​NAME

  There is already an active location with this name.

* HAS\_​ONGOING\_​RELOCATION

  This location currently cannot be activated as inventory, pending orders or transfers are being relocated from this location.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* LOCATION\_​LIMIT

  Shop has reached its location limit.

* LOCATION\_​NOT\_​FOUND

  Location not found.

***

## Fields

* [Location​Activate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError#field-LocationActivateUserError.fields.code)

  OBJECT

  An error that occurs while activating a location.

***

## Map

### Fields with this enum

* <-|[Location​Activate​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError#field-LocationActivateUserError.fields.code)
