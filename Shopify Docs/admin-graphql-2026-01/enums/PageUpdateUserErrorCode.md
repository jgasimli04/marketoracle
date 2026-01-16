---
title: PageUpdateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PageUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PageUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PageUpdateUserErrorCode.md
---

# Page​Update​User​Error​Code

enum

Possible error codes that can be returned by `PageUpdateUserError`.

## Valid values

* BLANK

  The input value is blank.

* INVALID

  The input value is invalid.

* INVALID\_​PUBLISH\_​DATE

  Can’t set isPublished to true and also set a future publish date.

* INVALID\_​TYPE

  The metafield type is invalid.

* INVALID\_​VALUE

  The value is invalid for the metafield type or for the definition options.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* TAKEN

  The input value is already taken.

* TOO\_​BIG

  The input value is too big.

* TOO\_​LONG

  The input value is too long.

***

## Fields

* [Page​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError#field-PageUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `PageUpdate`.

***

## Map

### Fields with this enum

* <-|[Page​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError#field-PageUpdateUserError.fields.code)
