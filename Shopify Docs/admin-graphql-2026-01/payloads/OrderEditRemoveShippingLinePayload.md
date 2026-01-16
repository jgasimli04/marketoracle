---
title: OrderEditRemoveShippingLinePayload - GraphQL Admin
description: Return type for `orderEditRemoveShippingLine` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveShippingLinePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveShippingLinePayload.md
---

# Order​Edit​Remove​Shipping​Line​Payload

payload

Return type for `orderEditRemoveShippingLine` mutation.

## Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Remove​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

  mutation

  Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to remove.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditRemoveShippingLine)
