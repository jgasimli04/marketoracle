---
title: ReturnStatus - GraphQL Admin
description: The status of a return.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnStatus.md'
---

# Return​Status

enum

The status of a return.

## Valid values

* CANCELED

  The return has been canceled.

* CLOSED

  The return has been completed.

* DECLINED

  The return was declined.

* OPEN

  The return is in progress.

* REQUESTED

  The return was requested.

***

## Fields

* [Return.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.status)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

## Map

### Fields with this enum

* <-|[Return.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.status)
