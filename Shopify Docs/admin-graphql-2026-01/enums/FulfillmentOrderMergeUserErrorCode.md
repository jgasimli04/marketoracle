---
title: FulfillmentOrderMergeUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `FulfillmentOrderMergeUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderMergeUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderMergeUserErrorCode.md
---

# Fulfillment​Order​Merge​User​Error​Code

enum

Possible error codes that can be returned by `FulfillmentOrderMergeUserError`.

## Valid values

* FULFILLMENT\_​ORDER\_​NOT\_​FOUND

  The fulfillment order could not be found.

* GREATER\_​THAN

  The fulfillment order line item quantity must be greater than 0.

* INVALID\_​LINE\_​ITEM\_​QUANTITY

  The fulfillment order line item quantity is invalid.

***

## Fields

* [Fulfillment​Order​Merge​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError#field-FulfillmentOrderMergeUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderMerge`.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Order​Merge​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError#field-FulfillmentOrderMergeUserError.fields.code)
