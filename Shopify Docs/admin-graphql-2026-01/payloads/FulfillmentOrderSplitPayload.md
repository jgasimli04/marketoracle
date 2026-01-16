---
title: FulfillmentOrderSplitPayload - GraphQL Admin
description: Return type for `fulfillmentOrderSplit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSplitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderSplitPayload.md
---

# Fulfillment​Order​Split​Payload

payload

Return type for `fulfillmentOrderSplit` mutation.

## Fields

* fulfillment​Order​Splits

  [\[Fulfillment​Order​Split​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult)

  The result of the fulfillment order splits.

* user​Errors

  [\[Fulfillment​Order​Split​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

  mutation

  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

  If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

  * fulfillment​Order​Splits

    [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

    required

    ### Arguments

    The fulfillment orders, line items and quantities to be split into new fulfillment orders.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderSplit)
