---
title: OrderEditRemoveDiscountPayload - GraphQL Admin
description: Return type for `orderEditRemoveDiscount` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveDiscountPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveDiscountPayload.md
---

# Order​Edit​Remove​Discount​Payload

payload

Return type for `orderEditRemoveDiscount` mutation.

## Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Remove​Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveDiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

  mutation

  Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditRemoveDiscount)
