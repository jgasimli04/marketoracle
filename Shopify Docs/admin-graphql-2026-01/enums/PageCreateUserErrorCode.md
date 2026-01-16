---
title: PageCreateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PageCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PageCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PageCreateUserErrorCode.md
---

# Page​Create​User​Error​Code

enum

Possible error codes that can be returned by `PageCreateUserError`.

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

* TAKEN

  The input value is already taken.

* TOO\_​BIG

  The input value is too big.

* TOO\_​LONG

  The input value is too long.

***

## Fields

* [Page​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError#field-PageCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `PageCreate`.

***

## Map

### Fields with this enum

* <-|[Page​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError#field-PageCreateUserError.fields.code)
