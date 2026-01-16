---
title: BusinessCustomerErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `BusinessCustomerUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BusinessCustomerErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BusinessCustomerErrorCode.md
---

# Business​Customer​Error​Code

enum

Possible error codes that can be returned by `BusinessCustomerUserError`.

## Valid values

* BLANK

  The input value is blank.

* FAILED\_​TO\_​DELETE

  Deleting the resource failed.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​INPUT

  The input is invalid.

* LIMIT\_​REACHED

  The number of resources exceeded the limit.

* NO\_​INPUT

  The input is empty.

* REQUIRED

  Missing a required field.

* RESOURCE\_​NOT\_​FOUND

  The resource wasn't found.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The field value is too long.

* UNEXPECTED\_​TYPE

  Unexpected type.

***

## Fields

* [Business​Customer​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.code)

  OBJECT

  An error that happens during the execution of a business customer mutation.

***

## Map

### Fields with this enum

* <-|[Business​Customer​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.code)
