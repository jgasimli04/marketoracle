---
title: FulfillmentOrderSubmitFulfillmentRequestPayload - GraphQL Admin
description: Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSubmitFulfillmentRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSubmitFulfillmentRequestPayload.md
---

# Fulfillment​Order​Submit​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation.

## Fields

* original​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The original fulfillment order intended to request fulfillment for.

* submitted​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was submitted to the fulfillment service. This will be the same as the original fulfillment order field. The exception to this is partial fulfillment requests or fulfillment request for cancelled or incomplete fulfillment orders.

* unsubmitted​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  This field will only be present for partial fulfillment requests. This will represent the new fulfillment order with the remaining line items not submitted to the fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Submit​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

  mutation

  Sends a fulfillment request to the fulfillment service assigned to a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). The fulfillment service must then accept or reject the request before processing can begin.

  You can either request fulfillment for all line items or specify individual items with quantities for partial fulfillment. When requesting partial fulfillment, Shopify splits the original fulfillment order into two: one with the submitted items and another with the remaining unsubmitted items. Include an optional message to communicate special instructions to the fulfillment service, such as gift wrapping or handling requirements.

  Learn more about [managing fulfillment requests as a fulfillment service](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-4-act-on-fulfillment-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer should be notified when fulfillments are created for this fulfillment order.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be requested for fulfillment. If left blank, all line items of the fulfillment order are requested for fulfillment.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Submit​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderSubmitFulfillmentRequest)
