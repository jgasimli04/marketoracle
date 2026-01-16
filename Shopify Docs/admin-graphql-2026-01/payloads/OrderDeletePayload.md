---
title: OrderDeletePayload - GraphQL Admin
description: Return type for `orderDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderDeletePayload.md
---

# Order​Delete​Payload

payload

Return type for `orderDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deleted order ID.

* user​Errors

  [\[Order​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete)

  mutation

  Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.

  You can only delete [specific order types](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order). Other orders you can cancel using the [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation instead.

  ***

  Caution

  This action is irreversible. You can't recover deleted orders.

  ***

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be deleted.

  ***

***

## Map

### Mutations with this payload

* [order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/orderDelete)
