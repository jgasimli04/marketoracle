---
title: FulfillmentOrderAcceptFulfillmentRequestPayload - GraphQL Admin
description: Return type for `fulfillmentOrderAcceptFulfillmentRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderAcceptFulfillmentRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderAcceptFulfillmentRequestPayload.md
---

# Fulfillment​Order​Accept​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderAcceptFulfillmentRequest` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose fulfillment request was accepted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Accept​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)

  mutation

  Accepts a fulfillment request that the fulfillment service has received for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) which signals that the fulfillment service will process and fulfill the order. The fulfillment service can optionally provide a message to the merchant and an estimated shipped date when accepting the request.

  Learn more about [accepting fulfillment requests](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#accept-a-fulfillment-request).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the fulfillment request.

  * estimated​Shipped​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The estimated date and time when the fulfillment order will be shipped.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Accept​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderAcceptFulfillmentRequest)
