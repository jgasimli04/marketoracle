---
title: ReturnDeclineRequestPayload - GraphQL Admin
description: Return type for `returnDeclineRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnDeclineRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnDeclineRequestPayload.md
---

# Return​Decline​Request​Payload

payload

Return type for `returnDeclineRequest` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The declined return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)

  mutation

  Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

  * input

    [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

    required

    ### Arguments

    The input fields for declining a customer's return request.

  ***

***

## Map

### Mutations with this payload

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/returnDeclineRequest)
