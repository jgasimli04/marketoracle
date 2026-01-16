---
title: OrderEditAddLineItemDiscountPayload - GraphQL Admin
description: Return type for `orderEditAddLineItemDiscount` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddLineItemDiscountPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddLineItemDiscountPayload.md
---

# Order​Edit​Add​Line​Item​Discount​Payload

payload

Return type for `orderEditAddLineItemDiscount` mutation.

## Fields

* added​Discount​Staged​Change

  [Order​Staged​Change​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount)

  The discount applied to a line item during this order edit.

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The line item with the edits applied but not saved.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

  mutation

  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

  To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to add the discount to.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The discount to add to the line item.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditAddLineItemDiscount)
