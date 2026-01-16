---
title: CustomerRfmGroup - GraphQL Admin
description: 'The RFM (Recency, Frequency, Monetary) group for a customer.'
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerRfmGroup'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerRfmGroup.md'
---

# Customer​Rfm​Group

enum

The RFM (Recency, Frequency, Monetary) group for a customer.

## Valid values

* ACTIVE

  Customers with recent purchases, some orders, and moderate spend.

* ALMOST\_​LOST

  Customers without recent purchases, fewer orders, and with lower spend.

* AT\_​RISK

  Customers without recent purchases, but with a strong history of orders and spend.

* CHAMPIONS

  Customers with very recent purchases, many orders, and the most spend.

* DORMANT

  Customers without recent orders, with infrequent orders, and with low spend.

* LOYAL

  Customers with recent purchases, many orders, and the most spend.

* NEEDS\_​ATTENTION

  Customers with recent purchases, some orders, and moderate spend.

* NEW

  Customers with very recent purchases, few orders, and low spend.

* PREVIOUSLY\_​LOYAL

  Customers without recent purchases, but with a very strong history of orders and spend.

* PROMISING

  Customers with recent purchases, few orders, and low spend.

* PROSPECTS

  Customers with no orders yet.

***

## Fields

* [Customer​Statistics.rfmGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics#field-CustomerStatistics.fields.rfmGroup)

  OBJECT

  A customer's computed statistics.

***

## Map

### Fields with this enum

* <-|[Customer​Statistics.rfmGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics#field-CustomerStatistics.fields.rfmGroup)
