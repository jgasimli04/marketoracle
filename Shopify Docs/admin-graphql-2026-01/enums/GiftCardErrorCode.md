---
title: GiftCardErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `GiftCardUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardErrorCode.md'
---

# Gift​Card​Error​Code

enum

Possible error codes that can be returned by `GiftCardUserError`.

## Valid values

* CUSTOMER\_​NOT\_​FOUND

  The customer could not be found.

* GIFT\_​CARD\_​LIMIT\_​EXCEEDED

  The gift card's value exceeds the allowed limits.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* MISSING\_​ARGUMENT

  Missing a required argument.

* RECIPIENT\_​NOT\_​FOUND

  The recipient could not be found.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

***

## Fields

* [Gift​Card​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError#field-GiftCardUserError.fields.code)

  OBJECT

  Represents an error that happens during the execution of a gift card mutation.

***

## Map

### Fields with this enum

* <-|[Gift​Card​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError#field-GiftCardUserError.fields.code)
