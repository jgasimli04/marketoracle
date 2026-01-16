---
title: OrderEditUpdateShippingLinePayload - GraphQL Admin
description: Return type for `orderEditUpdateShippingLine` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditUpdateShippingLinePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditUpdateShippingLinePayload.md
---

# Order​Edit​Update​Shipping​Line​Payload

payload

Return type for `orderEditUpdateShippingLine` mutation.

## Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Update​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

  mutation

  Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.

  * shipping​Line

    [Order​Edit​Update​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput)

    required

    The updated shipping line.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to update.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditUpdateShippingLine)
