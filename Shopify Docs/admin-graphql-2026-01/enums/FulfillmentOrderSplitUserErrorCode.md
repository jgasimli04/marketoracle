---
title: FulfillmentOrderSplitUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `FulfillmentOrderSplitUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSplitUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSplitUserErrorCode.md
---

# Fulfillment​Order​Split​User​Error​Code

enum

Possible error codes that can be returned by `FulfillmentOrderSplitUserError`.

## Valid values

* FULFILLMENT\_​ORDER\_​NOT\_​FOUND

  The fulfillment order could not be found.

* GREATER\_​THAN

  The fulfillment order line item quantity must be greater than 0.

* INVALID\_​LINE\_​ITEM\_​QUANTITY

  The fulfillment order line item quantity is invalid.

* NO\_​LINE\_​ITEMS\_​PROVIDED\_​TO\_​SPLIT

  The fulfillment order must have at least one line item input to split.

***

## Fields

* [Fulfillment​Order​Split​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError#field-FulfillmentOrderSplitUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderSplit`.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Order​Split​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError#field-FulfillmentOrderSplitUserError.fields.code)
