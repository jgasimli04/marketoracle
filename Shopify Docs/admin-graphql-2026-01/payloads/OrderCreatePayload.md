---
title: OrderCreatePayload - GraphQL Admin
description: Return type for `orderCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCreatePayload.md
---

# Order​Create​Payload

payload

Return type for `orderCreate` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that was created.

* user​Errors

  [\[Order​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate)

  mutation

  Creates an order with attributes such as customer information, line items, and shipping and billing addresses.

  Use the `orderCreate` mutation to programmatically generate orders in scenarios where orders aren't created through the standard checkout process, such as when importing orders from an external system or creating orders for wholesale customers.

  The `orderCreate` mutation doesn't support applying multiple discounts, such as discounts on line items. Automatic discounts won't be applied unless you replicate the logic of those discounts in your custom implementation. You can [apply a discount code](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput), but only one discount code can be set for each order.

  ***

  Note

  If you're using the `orderCreate` mutation with a [trial](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/free-trial) or [development store](https://shopify.dev/docs/api/development-stores), then you can create a maximum of five new orders per minute.

  ***

  After you create an order, you can make subsequent edits to the order using one of the following mutations:

  * [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate): Used for simple updates to an order, such as changing the order's note, tags, or customer information.
  * [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin): Used when you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * order

    [Order​Create​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput)

    required

    ### Arguments

    The attributes of the new order.

  * options

    [Order​Create​Options​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput)

    The strategies for updating inventory and whether to send shipping and order confirmations to customers.

  ***

***

## Map

### Mutations with this payload

* [order​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/orderCreate)
