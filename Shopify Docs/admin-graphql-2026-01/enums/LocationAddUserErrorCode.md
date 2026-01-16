---
title: LocationAddUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `LocationAddUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationAddUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationAddUserErrorCode.md
---

# Location​Add​User​Error​Code

enum

Possible error codes that can be returned by `LocationAddUserError`.

## Valid values

* APP\_​NOT\_​AUTHORIZED

  ApiPermission metafields can only be created or updated by the app owner.

* BLANK

  The input value is blank.

* CAPABILITY\_​VIOLATION

  The metafield violates a capability restriction.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* GENERIC\_​ERROR

  An error occurred while adding the location.

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

* [Location​Add​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError#field-LocationAddUserError.fields.code)

  OBJECT

  An error that occurs while adding a location.

***

## Map

### Fields with this enum

* <-|[Location​Add​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError#field-LocationAddUserError.fields.code)
