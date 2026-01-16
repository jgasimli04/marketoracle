---
title: SuggestedRefundMethod - GraphQL Admin
description: Generic attributes of a suggested refund method.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod.md
---

# Suggested​Refund​Method

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Generic attributes of a suggested refund method.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The suggested amount to refund in shop and presentment currencies.

* maximum​Refundable

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The maximum available amount to refund in shop and presentment currencies.

***

## Types implemented in

* [Suggested​Store​Credit​Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedStoreCreditRefund)

  OBJECT

  The suggested values for a refund to store credit.

  * amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The suggested amount to refund in shop and presentment currencies.

  * expires​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The suggested expiration date for the store credit.

  * maximum​Refundable

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The maximum available amount to refund in shop and presentment currencies.

***

##### Variables

```json
{
	"amount": "",
	"maximumRefundable": ""
}
```

##### Schema

```graphql
interface SuggestedRefundMethod {
  amount: MoneyBag!
  maximumRefundable: MoneyBag!
}
```
