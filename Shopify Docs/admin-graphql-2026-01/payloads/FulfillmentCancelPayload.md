---
title: FulfillmentCancelPayload - GraphQL Admin
description: Return type for `fulfillmentCancel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCancelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCancelPayload.md
---

# Fulfillment​Cancel​Payload

payload

Return type for `fulfillmentCancel` mutation.

## Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The canceled fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

  mutation

  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

  The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

  Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment to be canceled.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentCancel)
