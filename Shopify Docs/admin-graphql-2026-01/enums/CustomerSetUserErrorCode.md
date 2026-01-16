---
title: CustomerSetUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CustomerSetUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSetUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSetUserErrorCode.md
---

# Customer​Set​User​Error​Code

enum

Possible error codes that can be returned by `CustomerSetUserError`.

## Valid values

* BLANK

  The input value is blank.

* ID\_​NOT\_​ALLOWED

  The id field is not allowed if identifier is provided.

* INCLUSION

  The input value isn't included in the list.

* INPUT\_​MISMATCH

  The identifier value does not match the value of the corresponding field in the input.

* INVALID

  The input value is invalid.

* METAFIELD\_​MISMATCH

  The input argument `metafields` (if present) must contain the `customId` value.

* MISSING\_​FIELD\_​REQUIRED

  The input field corresponding to the identifier is required.

* NOT\_​FOUND

  Resource matching the identifier was not found.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

***

## Fields

* [Customer​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSetUserError#field-CustomerSetUserError.fields.code)

  OBJECT

  Defines errors for CustomerSet mutation.

***

## Map

### Fields with this enum

* <-|[Customer​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSetUserError#field-CustomerSetUserError.fields.code)
