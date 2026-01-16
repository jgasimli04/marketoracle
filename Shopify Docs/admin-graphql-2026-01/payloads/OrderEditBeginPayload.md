---
title: OrderEditBeginPayload - GraphQL Admin
description: Return type for `orderEditBegin` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditBeginPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditBeginPayload.md
---

# Order​Edit​Begin​Payload

payload

Return type for `orderEditBegin` mutation.

## Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The order that will be edited.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

  mutation

  Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This mutation creates an [`OrderEditSession`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession) and returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing how the order looks with your changes applied.

  Order editing follows a three-step workflow: Begin the edit with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin), apply changes using mutations like [`orderEditAddVariant`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant) or [`orderEditSetQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity), and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The session tracks all staged changes until you commit or abandon them.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to begin editing.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Begin](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditBegin)
