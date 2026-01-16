---
title: AppUsageRecordSortKeys - GraphQL Admin
description: The set of valid sort keys for the AppUsageRecord query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppUsageRecordSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppUsageRecordSortKeys.md
---

# App​Usage​Record​Sort​Keys

enum

The set of valid sort keys for the AppUsageRecord query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

***

## Fields

* [App​Subscription​Line​Item.usageRecords(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.sortKey)

  ARGUMENT

  Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.

  If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.

  Use the `AppSubscriptionLineItem` object to:

  * View the pricing terms a merchant has agreed to
  * Distinguish between recurring and usage fee components
  * Access detailed billing information for each pricing component

  This read-only object provides visibility into the subscription's pricing structure without allowing modifications.

  Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

***

## Map

### Arguments with this enum

* <-|[App​Subscription​Line​Item.usageRecords(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.sortKey)
