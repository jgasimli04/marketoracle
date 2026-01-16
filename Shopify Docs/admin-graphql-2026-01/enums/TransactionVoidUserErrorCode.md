---
title: TransactionVoidUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `TransactionVoidUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionVoidUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TransactionVoidUserErrorCode.md
---

# Transaction​Void​User​Error​Code

enum

Possible error codes that can be returned by `TransactionVoidUserError`.

## Valid values

* AUTH\_​NOT\_​SUCCESSFUL

  Transaction must be a successful authorization.

* AUTH\_​NOT\_​VOIDABLE

  Transaction must be voidable.

* GENERIC\_​ERROR

  A generic error occurred while attempting to void the transaction.

* TRANSACTION\_​NOT\_​FOUND

  Transaction does not exist.

***

## Fields

* [Transaction​Void​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError#field-TransactionVoidUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `TransactionVoid`.

***

## Map

### Fields with this enum

* <-|[Transaction​Void​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError#field-TransactionVoidUserError.fields.code)
