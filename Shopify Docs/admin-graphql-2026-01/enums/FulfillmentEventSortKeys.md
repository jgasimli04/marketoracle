---
title: FulfillmentEventSortKeys - GraphQL Admin
description: The set of valid sort keys for the FulfillmentEvent query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventSortKeys.md
---

# Fulfillment​Event​Sort​Keys

enum

The set of valid sort keys for the FulfillmentEvent query.

## Valid values

* HAPPENED\_​AT

  Sort by the `happened_at` value.

* ID

  Sort by the `id` value.

***

## Fields

* [Fulfillment.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events.arguments.sortKey)

  ARGUMENT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

## Map

### Arguments with this enum

* <-|[Fulfillment.events(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events.arguments.sortKey)
