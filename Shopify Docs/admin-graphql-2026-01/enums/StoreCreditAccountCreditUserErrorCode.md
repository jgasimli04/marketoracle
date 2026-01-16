---
title: StoreCreditAccountCreditUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `StoreCreditAccountCreditUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountCreditUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountCreditUserErrorCode.md
---

# Store​Credit​Account​Credit​User​Error​Code

enum

Possible error codes that can be returned by `StoreCreditAccountCreditUserError`.

## Valid values

* ACCOUNT\_​NOT\_​FOUND

  The store credit account could not be found.

* CREDIT\_​LIMIT\_​EXCEEDED

  The operation would cause the account's credit limit to be exceeded.

* EXPIRES\_​AT\_​IN\_​PAST

  The expiry date must be in the future.

* MISMATCHING\_​CURRENCY

  The currency provided does not match the currency of the store credit account.

* NEGATIVE\_​OR\_​ZERO\_​AMOUNT

  A positive amount must be used to credit a store credit account.

* OWNER\_​NOT\_​FOUND

  Owner does not exist.

* UNSUPPORTED\_​CURRENCY

  The currency provided is not currently supported.

***

## Fields

* [Store​Credit​Account​Credit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError#field-StoreCreditAccountCreditUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `StoreCreditAccountCredit`.

***

## Map

### Fields with this enum

* <-|[Store​Credit​Account​Credit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError#field-StoreCreditAccountCreditUserError.fields.code)
