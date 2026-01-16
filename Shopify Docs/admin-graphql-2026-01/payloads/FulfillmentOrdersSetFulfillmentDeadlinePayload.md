---
title: FulfillmentOrdersSetFulfillmentDeadlinePayload - GraphQL Admin
description: Return type for `fulfillmentOrdersSetFulfillmentDeadline` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrdersSetFulfillmentDeadlinePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrdersSetFulfillmentDeadlinePayload.md
---

# Fulfillment​Orders​Set​Fulfillment​Deadline​Payload

payload

Return type for `fulfillmentOrdersSetFulfillmentDeadline` mutation.

## Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the fulfillment deadline was successfully set.

* user​Errors

  [\[Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline)

  mutation

  Sets the latest date and time by which the fulfillment orders need to be fulfilled.

  * fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the fulfillment orders for which the deadline is being set.

  * fulfillment​Deadline

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The new fulfillment deadline of the fulfillment orders.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrdersSetFulfillmentDeadline)
