---
title: FulfillmentTrackingInfoUpdateV2Payload - GraphQL Admin
description: Return type for `fulfillmentTrackingInfoUpdateV2` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentTrackingInfoUpdateV2Payload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentTrackingInfoUpdateV2Payload.md
---

# Fulfillment​Tracking​Info​Update​V2Payload

payload

Return type for `fulfillmentTrackingInfoUpdateV2` mutation.

## Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The updated fulfillment with tracking information.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Tracking​Info​Update​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)

  mutation

  Deprecated

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  ***

***

## Map
