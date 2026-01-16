---
title: CustomerCancelDataErasureErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `CustomerCancelDataErasureUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerCancelDataErasureErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerCancelDataErasureErrorCode.md
---

# Customer​Cancel​Data​Erasure​Error​Code

enum

Possible error codes that can be returned by `CustomerCancelDataErasureUserError`.

## Valid values

* DOES\_​NOT\_​EXIST

  Customer does not exist.

* FAILED\_​TO\_​CANCEL

  Failed to cancel customer data erasure.

* NOT\_​BEING\_​ERASED

  Customer's data is not scheduled for erasure.

* UNAUTHORIZED\_​CANCELLATION

  Only the original requester can cancel this data erasure.

***

## Fields

* [Customer​Cancel​Data​Erasure​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError#field-CustomerCancelDataErasureUserError.fields.code)

  OBJECT

  An error that occurs when cancelling a customer data erasure request.

***

## Map

### Fields with this enum

* <-|[Customer​Cancel​Data​Erasure​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError#field-CustomerCancelDataErasureUserError.fields.code)
