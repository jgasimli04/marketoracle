---
title: OrderEditRemoveLineItemDiscountPayload - GraphQL Admin
description: Return type for `orderEditRemoveLineItemDiscount` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveLineItemDiscountPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditRemoveLineItemDiscountPayload.md
---

# Order​Edit​Remove​Line​Item​Discount​Payload

payload

Return type for `orderEditRemoveLineItemDiscount` mutation.

## Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The calculated line item after removal of the discount.

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

* [order​Edit​Remove​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveLineItemDiscount)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the line item discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

***

## Map
