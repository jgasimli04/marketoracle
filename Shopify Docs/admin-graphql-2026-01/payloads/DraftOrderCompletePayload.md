---
title: DraftOrderCompletePayload - GraphQL Admin
description: Return type for `draftOrderComplete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCompletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCompletePayload.md
---

# Draft​Order​Complete​Payload

payload

Return type for `draftOrderComplete` mutation.

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The completed draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

  mutation

  Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

  Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

  You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

  * Mark the order as paid immediately.
  * Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
  * Specify a custom payment amount.
  * Select a specific payment gateway.

  ***

  Note

  When completing a draft order, inventory is [reserved](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The draft order to complete.

  * payment​Pending

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  * payment​Gateway​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The gateway for the completed draft order.

  * source​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A channel definition handle used for sales channel attribution.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderComplete)
