---
title: CustomerMergeErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CustomerMergeUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorCode.md
---

# Customer​Merge​Error​Code

enum

Possible error codes that can be returned by `CustomerMergeUserError`.

## Valid values

* CUSTOMER\_​HAS\_​GIFT\_​CARDS

  The customer cannot be merged because it has associated gift cards.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID\_​CUSTOMER

  The customer cannot be merged.

* INVALID\_​CUSTOMER\_​ID

  The customer ID is invalid.

* MISSING\_​OVERRIDE\_​ATTRIBUTE

  The customer is missing the attribute requested for override.

* OVERRIDE\_​ATTRIBUTE\_​INVALID

  The override attribute is invalid.

***

## Fields

* [Customer​Merge​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError#field-CustomerMergeUserError.fields.code)

  OBJECT

  An error that occurs while merging two customers.

***

## Map

### Fields with this enum

* <-|[Customer​Merge​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError#field-CustomerMergeUserError.fields.code)
