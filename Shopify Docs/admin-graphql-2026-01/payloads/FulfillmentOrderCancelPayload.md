---
title: FulfillmentOrderCancelPayload - GraphQL Admin
description: Return type for `fulfillmentOrderCancel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderCancelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderCancelPayload.md
---

# Fulfillment​Order​Cancel​Payload

payload

Return type for `fulfillmentOrderCancel` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was marked as canceled.

* replacement​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was created to replace the canceled fulfillment order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)

  mutation

  Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order to represent the work left to be done. The original fulfillment order will be marked as closed.

  This mutation works when the fulfillment order has a `SUBMITTED` or `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens immediately because the fulfillment service hasn't accepted the request.

  ***

  Note

  Orders that have had cancellation requested but the cancellation has yet to be accepted by the fulfillment service might still have work completed despite cancellation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as canceled.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderCancel)
