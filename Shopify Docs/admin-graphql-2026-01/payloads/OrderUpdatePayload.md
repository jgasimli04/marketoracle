---
title: OrderUpdatePayload - GraphQL Admin
description: Return type for `orderUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderUpdatePayload.md
---

# Order​Update​Payload

payload

Return type for `orderUpdate` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The updated order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)

  mutation

  Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

  If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * input

    [Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput)

    required

    ### Arguments

    The attributes of the updated order.

  ***

***

## Map

### Mutations with this payload

* [order​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/orderUpdate)
