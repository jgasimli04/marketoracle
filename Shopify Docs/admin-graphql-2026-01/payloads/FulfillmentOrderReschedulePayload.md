---
title: FulfillmentOrderReschedulePayload - GraphQL Admin
description: Return type for `fulfillmentOrderReschedule` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderReschedulePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderReschedulePayload.md
---

# Fulfillment​Order​Reschedule​Payload

payload

Return type for `fulfillmentOrderReschedule` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  A fulfillment order with the rescheduled line items.

  Fulfillment orders may be merged if they have the same `fulfillAt` datetime.

  If the fulfillment order is merged then the resulting fulfillment order will be returned. Otherwise the original fulfillment order will be returned with an updated `fulfillAt` datetime.

* user​Errors

  [\[Fulfillment​Order​Reschedule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

  mutation

  Reschedules a scheduled fulfillment order.

  Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

  The fulfillment order will be marked as ready for fulfillment at this date and time.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to reschedule.

  * fulfill​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    A future date and time when the fulfillment order will be marked as ready for fulfillment.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderReschedule)
