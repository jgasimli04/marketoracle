---
title: DisputeType - GraphQL Admin
description: The possible types for a dispute.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeType.md'
---

# Dispute​Type

enum

The possible types for a dispute.

## Valid values

* CHARGEBACK

  The dispute has turned into a chargeback.

* INQUIRY

  The dispute is in the inquiry phase.

***

## Fields

* [Order​Dispute​Summary.initiatedAs](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary#field-OrderDisputeSummary.fields.initiatedAs)

  OBJECT

  A summary of the important details for a dispute on an order.

* [Shopify​Payments​Dispute.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.type)

  OBJECT

  A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution.

***

## Map

### Fields with this enum

* <-|[Order​Dispute​Summary.initiatedAs](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary#field-OrderDisputeSummary.fields.initiatedAs)
* <-|[Shopify​Payments​Dispute.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.type)
