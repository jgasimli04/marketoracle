---
title: BulkOperationUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `BulkOperationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationUserErrorCode.md
---

# Bulk​Operation​User​Error​Code

enum

Possible error codes that can be returned by `BulkOperationUserError`.

## Valid values

* INVALID

  The input value is invalid.

* LIMIT\_​REACHED

  Bulk operations limit reached. Please try again later.

* OPERATION\_​IN\_​PROGRESS

  A bulk operation is already in progress.

***

## Fields

* [Bulk​Operation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError#field-BulkOperationUserError.fields.code)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

***

## Map

### Fields with this enum

* <-|[Bulk​Operation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError#field-BulkOperationUserError.fields.code)
