---
title: AppRevenueAttributionType - GraphQL Admin
description: Represents the billing types of revenue attribution.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType.md
---

# App​Revenue​Attribution​Type

enum

Represents the billing types of revenue attribution.

## Valid values

* APPLICATION\_​PURCHASE

  App purchase related revenue collection.

* APPLICATION\_​SUBSCRIPTION

  App subscription revenue collection.

* APPLICATION\_​USAGE

  App usage-based revenue collection.

* OTHER

  Other app revenue collection type.

***

## Fields

* [App​Revenue​Attribution​Record.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.type)

  OBJECT

  Tracks revenue that was captured outside of Shopify's billing system but needs to be attributed to the app for comprehensive revenue reporting and partner analytics. This object enables accurate revenue tracking when apps process payments through external systems while maintaining visibility into total app performance.

  External revenue attribution is essential for apps that offer multiple payment channels or process certain transactions outside Shopify's billing infrastructure. For example, an enterprise app might process large custom contracts through external payment processors, or a marketplace app could handle direct merchant-to-merchant transactions that still generate app commissions.

  Use the `AppRevenueAttributionRecord` object to:

  * Report revenue from external payment processors and billing systems
  * Track commission-based earnings from marketplace or referral activities
  * Maintain comprehensive revenue analytics across multiple payment channels
  * Ensure accurate partner revenue sharing and commission calculations
  * Generate complete financial reports that include all app-generated revenue streams
  * Support compliance requirements for external revenue documentation

  Each attribution record includes the captured amount, external transaction timestamp, and idempotency keys to prevent duplicate reporting. The record type field categorizes different revenue streams, enabling detailed analytics and reporting segmentation.

  Revenue attribution records are particularly important for apps participating in Shopify's partner program, as they ensure accurate revenue sharing calculations and comprehensive performance metrics. The captured timestamp reflects when the external payment was processed, not when the attribution record was created in Shopify.

  For detailed revenue attribution values, see the [AppRevenueAttributionType enum](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType).

***

## Map

### Fields with this enum

* <-|[App​Revenue​Attribution​Record.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.type)
