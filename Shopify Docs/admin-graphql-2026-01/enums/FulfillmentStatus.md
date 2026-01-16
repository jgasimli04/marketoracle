---
title: FulfillmentStatus - GraphQL Admin
description: The status of a fulfillment.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentStatus.md'
---

# Fulfillment​Status

enum

The status of a fulfillment.

## Valid values

* CANCELLED

  The fulfillment was canceled.

* ERROR

  There was an error with the fulfillment request.

* FAILURE

  The fulfillment request failed.

* SUCCESS

  The fulfillment was completed successfully.

### Deprecated valid values

* OPEN

  Deprecated

* PENDING

  Deprecated

***

## Fields

* [Fulfillment.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.status)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

## Map

### Fields with this enum

* <-|[Fulfillment.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.status)
