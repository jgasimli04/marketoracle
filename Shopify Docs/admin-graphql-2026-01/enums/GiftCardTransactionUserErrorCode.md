---
title: GiftCardTransactionUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `GiftCardTransactionUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardTransactionUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardTransactionUserErrorCode.md
---

# Gift​Card​Transaction​User​Error​Code

enum

Possible error codes that can be returned by `GiftCardTransactionUserError`.

## Valid values

* GIFT\_​CARD\_​LIMIT\_​EXCEEDED

  The gift card's value exceeds the allowed limits.

* GIFT\_​CARD\_​NOT\_​FOUND

  The gift card could not be found.

* INSUFFICIENT\_​FUNDS

  The gift card does not have sufficient funds to satisfy the request.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* MISMATCHING\_​CURRENCY

  The currency provided does not match the currency of the gift card.

* NEGATIVE\_​OR\_​ZERO\_​AMOUNT

  A positive amount must be used.

***

## Fields

* [Gift​Card​Transaction​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError#field-GiftCardTransactionUserError.fields.code)

  OBJECT

  Represents an error that happens during the execution of a gift card transaction mutation.

***

## Map

### Fields with this enum

* <-|[Gift​Card​Transaction​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError#field-GiftCardTransactionUserError.fields.code)
