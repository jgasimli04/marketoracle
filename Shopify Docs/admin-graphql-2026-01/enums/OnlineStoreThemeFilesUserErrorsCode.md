---
title: OnlineStoreThemeFilesUserErrorsCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `OnlineStoreThemeFilesUserErrors`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFilesUserErrorsCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFilesUserErrorsCode.md
---

# Online​Store​Theme​Files​User​Errors​Code

enum

Possible error codes that can be returned by `OnlineStoreThemeFilesUserErrors`.

## Valid values

* ACCESS\_​DENIED

  Access denied.

* DUPLICATE\_​FILE\_​INPUT

  There are files with the same filename.

* ERROR

  Error.

* FILE\_​VALIDATION\_​ERROR

  The file is invalid.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* THEME\_​FILES\_​CONFLICT

  There are theme files with conflicts.

* THEME\_​LIMITED\_​PLAN

  This action is not available on your current plan. Please upgrade to access theme editing features.

* THROTTLED

  Too many updates in a short period. Please try again later.

***

## Fields

* [Online​Store​Theme​Files​User​Errors.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors#field-OnlineStoreThemeFilesUserErrors.fields.code)

  OBJECT

  User errors for theme file operations.

***

## Map

### Fields with this enum

* <-|[Online​Store​Theme​Files​User​Errors.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors#field-OnlineStoreThemeFilesUserErrors.fields.code)
