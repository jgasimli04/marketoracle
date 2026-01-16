---
title: ErrorsWebPixelUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ErrorsWebPixelUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsWebPixelUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsWebPixelUserErrorCode.md
---

# Errors​Web​Pixel​User​Error​Code

enum

Possible error codes that can be returned by `ErrorsWebPixelUserError`.

## Valid values

* BLANK

  The input value is blank.

* INVALID\_​CONFIGURATION\_​JSON

  The provided settings is not a valid JSON.

* INVALID\_​RUNTIME\_​CONTEXT

  The provided runtime context is invalid.

* INVALID\_​SETTINGS

  The provided settings does not match the expected settings definition on the app.

* INVALID\_​SETTINGS\_​DEFINITION

  The settings definition of the web pixel extension is in an invalid state on the app.

* NO\_​EXTENSION

  No extension found.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* TAKEN

  The input value is already taken.

* UNEXPECTED\_​ERROR

  An unexpected error occurred.

* UNABLE\_​TO\_​DELETE

  Deprecated

***

## Fields

* [Errors​Web​Pixel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError#field-ErrorsWebPixelUserError.fields.code)

  OBJECT

  An error that occurs during the execution of a web pixel mutation.

***

## Map

### Fields with this enum

* <-|[Errors​Web​Pixel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError#field-ErrorsWebPixelUserError.fields.code)
