---
title: FulfillmentOrderRejectFulfillmentRequestPayload - GraphQL Admin
description: Return type for `fulfillmentOrderRejectFulfillmentRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderRejectFulfillmentRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderRejectFulfillmentRequestPayload.md
---

# Fulfillment​Order​Reject​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderRejectFulfillmentRequest` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose fulfillment request was rejected.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Reject​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)

  mutation

  Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * reason

    [Fulfillment​Order​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRejectionReason)

    The reason for the fulfillment order rejection.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for rejecting the fulfillment request.

  * line​Items

    [\[Incoming​Request​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/IncomingRequestLineItemInput)

    An optional array of line item rejection details. If none are provided, all line items will be assumed to be unfulfillable.

    **Note**: After the fulfillment request has been rejected, none of the line items will be able to be fulfilled. This field documents which line items specifically were unable to be fulfilled and why.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Reject​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderRejectFulfillmentRequest)
