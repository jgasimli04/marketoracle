---
title: FulfillmentCreatePayload - GraphQL Admin
description: Return type for `fulfillmentCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCreatePayload.md
---

# Fulfillment​Create​Payload

payload

Return type for `fulfillmentCreate` mutation.

## Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The created fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

  mutation

  Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

  Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

  Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

  * fulfillment

    [Fulfillment​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentCreate)
