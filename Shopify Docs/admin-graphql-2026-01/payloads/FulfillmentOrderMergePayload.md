---
title: FulfillmentOrderMergePayload - GraphQL Admin
description: Return type for `fulfillmentOrderMerge` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderMergePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentOrderMergePayload.md
---

# Fulfillment​Order​Merge​Payload

payload

Return type for `fulfillmentOrderMerge` mutation.

## Fields

* fulfillment​Order​Merges

  [\[Fulfillment​Order​Merge​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult)

  The result of the fulfillment order merges.

* user​Errors

  [\[Fulfillment​Order​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

  mutation

  Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

  * fulfillment​Order​Merge​Inputs

    [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

    required

    ### Arguments

    One or more sets of fulfillment orders to be merged.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentOrderMerge)
