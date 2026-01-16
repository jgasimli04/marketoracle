---
title: ReturnErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ReturnUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnErrorCode.md'
---

# Return​Error​Code

enum

Possible error codes that can be returned by `ReturnUserError`.

## Valid values

* ALREADY\_​EXISTS

  The requested resource already exists.

* BLANK

  The input value is blank.

* CREATION\_​FAILED

  A requested resource could not be created.

* EQUAL\_​TO

  The input value should be equal to the value allowed.

* FEATURE\_​NOT\_​ENABLED

  A required feature is not enabled.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be greater than or equal to the minimum value allowed.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* INVALID\_​STATE

  A resource was not in the correct state for the operation to succeed.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* MISSING\_​PERMISSION

  The user does not have permission to perform the operation.

* NOT\_​A\_​NUMBER

  The input value is not a number.

* NOT\_​EDITABLE

  A requested item is not editable.

* NOT\_​FOUND

  A requested item could not be found.

* NOTIFICATION\_​FAILED

  A requested notification could not be sent.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

* TOO\_​BIG

  The input value is too big.

* TOO\_​LONG

  The input value is too long.

* TOO\_​MANY\_​ARGUMENTS

  Too many arguments provided.

* TOO\_​SHORT

  The input value is too short.

* WRONG\_​LENGTH

  The input value is the wrong length.

***

## Fields

* [Return​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError#field-ReturnUserError.fields.code)

  OBJECT

  An error that occurs during the execution of a return mutation.

***

## Map

### Fields with this enum

* <-|[Return​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError#field-ReturnUserError.fields.code)
