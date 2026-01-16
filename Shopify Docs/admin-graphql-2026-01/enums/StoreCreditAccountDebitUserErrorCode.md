---
title: StoreCreditAccountDebitUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `StoreCreditAccountDebitUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountDebitUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditAccountDebitUserErrorCode.md
---

# Store​Credit​Account​Debit​User​Error​Code

enum

Possible error codes that can be returned by `StoreCreditAccountDebitUserError`.

## Valid values

* ACCOUNT\_​NOT\_​FOUND

  The store credit account could not be found.

* INSUFFICIENT\_​FUNDS

  The store credit account does not have sufficient funds to satisfy the request.

* MISMATCHING\_​CURRENCY

  The currency provided does not match the currency of the store credit account.

* NEGATIVE\_​OR\_​ZERO\_​AMOUNT

  A positive amount must be used to debit a store credit account.

***

## Fields

* [Store​Credit​Account​Debit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError#field-StoreCreditAccountDebitUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `StoreCreditAccountDebit`.

***

## Map

### Fields with this enum

* <-|[Store​Credit​Account​Debit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError#field-StoreCreditAccountDebitUserError.fields.code)
