---
title: FulfillmentOrderClosePayload - GraphQL Admin
description: Return type for `fulfillmentOrderClose` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderClosePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderClosePayload.md
---

# Fulfillment​Order​Close​Payload

payload

Return type for `fulfillmentOrderClose` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was marked as incomplete.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)

  mutation

  Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items, and closes the fulfillment request.

  This mutation can only be called for fulfillment orders that meet the following criteria:

  * Assigned to a fulfillment service location,
  * The fulfillment request has been accepted,
  * The fulfillment order status is `IN_PROGRESS`.

  This mutation can only be called by the fulfillment service app that accepted the fulfillment request. Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to move the fulfillment order line items to another location and fulfill from there, remove and refund the line items, or to request fulfillment from the same fulfillment service again.

  Closing a fulfillment order is explained in [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as incomplete.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for marking the fulfillment order as incomplete.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Close](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderClose)
