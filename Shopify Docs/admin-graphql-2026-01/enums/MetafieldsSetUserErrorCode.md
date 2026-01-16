---
title: MetafieldsSetUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `MetafieldsSetUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode.md
---

# Metafields​Set​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldsSetUserError`.

## Valid values

* APP\_​NOT\_​AUTHORIZED

  ApiPermission metafields can only be created or updated by the app owner.

* BLANK

  The input value is blank.

* CAPABILITY\_​VIOLATION

  The metafield violates a capability restriction.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​COMPARE\_​DIGEST

  The compareDigest is invalid.

* INVALID\_​TYPE

  The type is invalid.

* INVALID\_​VALUE

  The value is invalid for the metafield type or for the definition options.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* PRESENT

  The input value needs to be blank.

* STALE\_​OBJECT

  The metafield has been modified since it was loaded.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

***

## Fields

* [Metafields​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldsSet`.

***

## Map

### Fields with this enum

* <-|[Metafields​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)
