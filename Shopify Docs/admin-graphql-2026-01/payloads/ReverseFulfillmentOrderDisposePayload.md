---
title: ReverseFulfillmentOrderDisposePayload - GraphQL Admin
description: Return type for `reverseFulfillmentOrderDispose` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseFulfillmentOrderDisposePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReverseFulfillmentOrderDisposePayload.md
---

# Reverse​Fulfillment​Order​Dispose​Payload

payload

Return type for `reverseFulfillmentOrderDispose` mutation.

## Fields

* reverse​Fulfillment​Order​Line​Items

  [\[Reverse​Fulfillment​Order​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  The disposed reverse fulfillment order line items.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

  mutation

  Disposes reverse fulfillment order line items.

  * disposition​Inputs

    [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

    required

    ### Arguments

    The input parameters required to dispose reverse fulfillment order line items.

  ***

***

## Map

### Mutations with this payload

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/types/reverseFulfillmentOrderDispose)
