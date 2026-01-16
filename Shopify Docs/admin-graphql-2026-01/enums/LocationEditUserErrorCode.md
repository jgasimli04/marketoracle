---
title: LocationEditUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `LocationEditUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationEditUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationEditUserErrorCode.md
---

# Location​Edit​User​Error​Code

enum

Possible error codes that can be returned by `LocationEditUserError`.

## Valid values

* APP\_​NOT\_​AUTHORIZED

  ApiPermission metafields can only be created or updated by the app owner.

* BLANK

  The input value is blank.

* CANNOT\_​DISABLE\_​ONLINE\_​ORDER\_​FULFILLMENT

  At least one location must fulfill online orders.

* CANNOT\_​MODIFY\_​ONLINE\_​ORDER\_​FULFILLMENT\_​FOR\_​FS\_​LOCATION

  Cannot modify the online order fulfillment preference for fulfillment service locations.

* CAPABILITY\_​VIOLATION

  The metafield violates a capability restriction.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* GENERIC\_​ERROR

  An error occurred while editing the location.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​TYPE

  The type is invalid.

* INVALID\_​US\_​ZIPCODE

  The ZIP code is not a valid US ZIP code.

* INVALID\_​VALUE

  The value is invalid for the metafield type or for the definition options.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNSTRUCTURED\_​RESERVED\_​NAMESPACE

  Unstructured reserved namespace.

***

## Fields

* [Location​Edit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError#field-LocationEditUserError.fields.code)

  OBJECT

  An error that occurs while editing a location.

***

## Map

### Fields with this enum

* <-|[Location​Edit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError#field-LocationEditUserError.fields.code)
