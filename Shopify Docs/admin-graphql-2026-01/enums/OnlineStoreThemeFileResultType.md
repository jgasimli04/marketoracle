---
title: OnlineStoreThemeFileResultType - GraphQL Admin
description: Type of a theme file operation result.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFileResultType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OnlineStoreThemeFileResultType.md
---

# Online​Store​Theme​File​Result​Type

enum

Type of a theme file operation result.

## Valid values

* BAD\_​REQUEST

  Operation was malformed or invalid.

* CONFLICT

  Operation faced a conflict with the current state of the file.

* ERROR

  Operation encountered an error.

* NOT\_​FOUND

  Operation file could not be found.

* SUCCESS

  Operation was successful.

* TIMEOUT

  Operation timed out.

* UNPROCESSABLE\_​ENTITY

  Operation could not be processed due to issues with input data.

***

## Fields

* [Online​Store​Theme​File​Read​Result.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult#field-OnlineStoreThemeFileReadResult.fields.code)

  OBJECT

  Represents the result of a read operation performed on a theme asset.

***

## Map

### Fields with this enum

* <-|[Online​Store​Theme​File​Read​Result.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult#field-OnlineStoreThemeFileReadResult.fields.code)
