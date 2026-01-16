---
title: MobilePlatformApplicationUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MobilePlatformApplicationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MobilePlatformApplicationUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MobilePlatformApplicationUserErrorCode.md
---

# Mobile​Platform​Application​User​Error​Code

enum

Possible error codes that can be returned by `MobilePlatformApplicationUserError`.

## Valid values

* INVALID

  The input value is invalid.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* TOO\_​LONG

  The input value is too long.

***

## Fields

* [Mobile​Platform​Application​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError#field-MobilePlatformApplicationUserError.fields.code)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

***

## Map

### Fields with this enum

* <-|[Mobile​Platform​Application​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError#field-MobilePlatformApplicationUserError.fields.code)
