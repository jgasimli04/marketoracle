---
title: FulfillmentEventStatus - GraphQL Admin
description: The status that describes a fulfillment or delivery event.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus.md
---

# Fulfillment​Event​Status

enum

The status that describes a fulfillment or delivery event.

## Valid values

* ATTEMPTED\_​DELIVERY

  A delivery was attempted.

* CARRIER\_​PICKED\_​UP

  The fulfillment has been picked up by the carrier.

* CONFIRMED

  The fulfillment is confirmed. This is the default value when no other information is available.

* DELAYED

  The fulfillment is delayed.

* DELIVERED

  The fulfillment was successfully delivered.

* FAILURE

  The fulfillment request failed.

* IN\_​TRANSIT

  The fulfillment is in transit.

* LABEL\_​PRINTED

  A purchased shipping label has been printed.

* LABEL\_​PURCHASED

  A shipping label has been purchased.

* OUT\_​FOR\_​DELIVERY

  The fulfillment is out for delivery.

* READY\_​FOR\_​PICKUP

  The fulfillment is ready to be picked up.

***

## Fields

* [Fulfillment​Event.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status)

  OBJECT

  A tracking event that records the status and location of a fulfillment at a specific point in time. Each event captures details such as the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status) (for example, in transit, out for delivery, delivered) and any [messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.message) associated with the event.

  Fulfillment events provide a chronological history of a package's journey from shipment to delivery. They include timestamps, geographic coordinates, and estimated delivery dates to track fulfillment progress.

* [Fulfillment​Event​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-status)

  INPUT OBJECT

  The input fields used to create a fulfillment event.

* [Order​Create​Fulfillment​Input.shipmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput#fields-shipmentStatus)

  INPUT OBJECT

  The input fields for a fulfillment to create for an order.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Event.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status)

### Inputs with this enum

* [Fulfillment​Event​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-status)
* [Order​Create​Fulfillment​Input.shipmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFulfillmentInput#fields-shipmentStatus)
