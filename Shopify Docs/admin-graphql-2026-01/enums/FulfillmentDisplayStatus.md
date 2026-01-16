---
title: FulfillmentDisplayStatus - GraphQL Admin
description: The display status of a fulfillment.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentDisplayStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentDisplayStatus.md
---

# Fulfillment​Display​Status

enum

The display status of a fulfillment.

## Valid values

* ATTEMPTED\_​DELIVERY

  Displayed as **Attempted delivery**.

* CANCELED

  Displayed as **Canceled**.

* CARRIER\_​PICKED\_​UP

  Displayed as **Picked up by carrier**.

* CONFIRMED

  Displayed as **Confirmed**.

* DELAYED

  Displayed as **Delayed**.

* DELIVERED

  Displayed as **Delivered**.

* FAILURE

  Displayed as **Failure**.

* FULFILLED

  Displayed as **Fulfilled**.

* IN\_​TRANSIT

  Displayed as **In transit**.

* LABEL\_​PRINTED

  Displayed as **Label printed**.

* LABEL\_​PURCHASED

  Displayed as **Label purchased**.

* LABEL\_​VOIDED

  Displayed as **Label voided**.

* MARKED\_​AS\_​FULFILLED

  Displayed as **Marked as fulfilled**.

* NOT\_​DELIVERED

  Displayed as **Not delivered**.

* OUT\_​FOR\_​DELIVERY

  Displayed as **Out for delivery**.

* PICKED\_​UP

  Displayed as **Picked up**.

* READY\_​FOR\_​PICKUP

  Displayed as **Ready for pickup**.

* SUBMITTED

  Displayed as **Submitted**.

***

## Fields

* [Fulfillment.displayStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.displayStatus)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

## Map

### Fields with this enum

* <-|[Fulfillment.displayStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.displayStatus)
