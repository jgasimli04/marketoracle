---
title: DisputeStatus - GraphQL Admin
description: The possible statuses of a dispute.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeStatus.md'
---

# Dispute​Status

enum

The possible statuses of a dispute.

## Valid values

* ACCEPTED

* LOST

* NEEDS\_​RESPONSE

* UNDER\_​REVIEW

* WON

* CHARGE\_​REFUNDED

  Deprecated

***

## Fields

* [Order​Dispute​Summary.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary#field-OrderDisputeSummary.fields.status)

  OBJECT

  A summary of the important details for a dispute on an order.

* [Shopify​Payments​Dispute.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.status)

  OBJECT

  A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution.

***

## Map

### Fields with this enum

* <-|[Order​Dispute​Summary.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary#field-OrderDisputeSummary.fields.status)
* <-|[Shopify​Payments​Dispute.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.status)
