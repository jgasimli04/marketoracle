---
title: OrderCapturePayload - GraphQL Admin
description: Return type for `orderCapture` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCapturePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCapturePayload.md
---

# Order​Capture​Payload

payload

Return type for `orderCapture` mutation.

## Fields

* transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The created capture transaction.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)

  mutation

  Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

  The `orderCapture` mutation can be used in the following scenarios:

  * To capture the full amount of an authorized transaction
  * To capture a partial payment by specifying an amount less than the total order amount
  * To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

  ***

  Note

  Multi-capture functionality is only available to stores on a [Shopify Plus plan](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan). For multi-currency orders, the [`currency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency) field is required and should match the presentment currency from the order.

  ***

  After capturing a payment, you can:

  * View the transaction details including status, amount, and processing information.
  * Track the captured amount in both shop and presentment currencies.
  * Monitor the transaction's settlement status.

  Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

  * input

    [Order​Capture​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

## Map

### Mutations with this payload

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/types/orderCapture)
