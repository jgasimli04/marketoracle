---
title: FulfillmentEventCreatePayload - GraphQL Admin
description: Return type for `fulfillmentEventCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentEventCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentEventCreatePayload.md
---

# Fulfillment​Event​Create​Payload

payload

Return type for `fulfillmentEventCreate` mutation.

## Fields

* fulfillment​Event

  [Fulfillment​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

  The created fulfillment event.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

  mutation

  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

  Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

  * fulfillment​Event

    [Fulfillment​Event​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

    required

    ### Arguments

    The input fields used to create a fulfillment event for a fulfillment.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentEventCreate)
