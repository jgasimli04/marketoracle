---
title: FulfillmentOrderReleaseHoldPayload - GraphQL Admin
description: Return type for `fulfillmentOrderReleaseHold` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderReleaseHoldPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderReleaseHoldPayload.md
---

# Fulfillment​Order​Release​Hold​Payload

payload

Return type for `fulfillmentOrderReleaseHold` mutation.

## Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which the hold was released.

* user​Errors

  [\[Fulfillment​Order​Release​Hold​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReleaseHoldUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

  mutation

  Releases the fulfillment hold on a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order for which to release the fulfillment hold.

  * hold​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the fulfillment holds to release.\
    \
    Holds will only be released if they belong to the fulfillment order specified by the `id` argument.\
    \
    **NOTE:** If not supplied, all holds for the fulfillment order will be released. It is highly recommended that apps supply the ids of the holds that they intend to release. Releasing all holds on a fulfillment order will result in the fulfillment order being released prematurely and items being incorrectly fulfilled.

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A configurable ID used to track the automation system releasing this hold.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderReleaseHold)
