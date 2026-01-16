---
title: FulfillmentOrderHoldPayload - GraphQL Admin
description: Return type for `fulfillmentOrderHold` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderHoldPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderHoldPayload.md
---

# Fulfillment​Order​Hold​Payload

payload

Return type for `fulfillmentOrderHold` mutation.

## Fields

* fulfillment​Hold

  [Fulfillment​Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold)

  The fulfillment hold created for the fulfillment order. Null if no hold was created.

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which a fulfillment hold was applied.

* remaining​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The remaining fulfillment order containing the line items to which the hold wasn't applied, if specific line items were specified to be placed on hold.

* user​Errors

  [\[Fulfillment​Order​Hold​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

  mutation

  Applies a fulfillment hold on a fulfillment order.

  As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order on which a fulfillment hold is applied.

  * fulfillment​Hold

    [Fulfillment​Order​Hold​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

    required

    The details of the fulfillment hold applied on the fulfillment order.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderHold)
