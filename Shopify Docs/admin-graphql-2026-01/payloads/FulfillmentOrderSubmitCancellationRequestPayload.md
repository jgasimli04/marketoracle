---
title: FulfillmentOrderSubmitCancellationRequestPayload - GraphQL Admin
description: Return type for `fulfillmentOrderSubmitCancellationRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSubmitCancellationRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSubmitCancellationRequestPayload.md
---

# Fulfillment​Order​Submit​Cancellation​Request​Payload

payload

Return type for `fulfillmentOrderSubmitCancellationRequest` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order specified in the cancelation request.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Submit​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)

  mutation

  Sends a cancellation request to the fulfillment service of a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for the cancellation request.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Submit​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderSubmitCancellationRequest)
