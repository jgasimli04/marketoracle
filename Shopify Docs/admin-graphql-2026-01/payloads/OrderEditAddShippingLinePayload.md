---
title: OrderEditAddShippingLinePayload - GraphQL Admin
description: Return type for `orderEditAddShippingLine` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddShippingLinePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddShippingLinePayload.md
---

# Order​Edit​Add​Shipping​Line​Payload

payload

Return type for `orderEditAddShippingLine` mutation.

## Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* calculated​Shipping​Line

  [Calculated​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine)

  The [calculated shipping line](https://shopify.dev/api/admin-graphql/latest/objects/calculatedshippingline) that's added during this order edit.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Add​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAddShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

  mutation

  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.

  * shipping​Line

    [Order​Edit​Add​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput)

    required

    The shipping line to be added.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditAddShippingLine)
