---
title: FulfillmentCreateV2Payload - GraphQL Admin
description: Return type for `fulfillmentCreateV2` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCreateV2Payload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentCreateV2Payload.md
---

# Fulfillment​Create​V2Payload

payload

Return type for `fulfillmentCreateV2` mutation.

## Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The created fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Create​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreateV2)

  mutation

  Deprecated

  * fulfillment

    [Fulfillment​V2Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

***

## Map
