---
title: FulfillmentOrderAcceptCancellationRequestPayload - GraphQL Admin
description: Return type for `fulfillmentOrderAcceptCancellationRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderAcceptCancellationRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderAcceptCancellationRequestPayload.md
---

# Fulfillment​Order​Accept​Cancellation​Request​Payload

payload

Return type for `fulfillmentOrderAcceptCancellationRequest` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose cancellation request was accepted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Accept​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)

  mutation

  Accept a cancellation request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the cancellation request.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Accept​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderAcceptCancellationRequest)
