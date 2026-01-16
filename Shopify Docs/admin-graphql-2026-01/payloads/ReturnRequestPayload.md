---
title: ReturnRequestPayload - GraphQL Admin
description: Return type for `returnRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnRequestPayload.md
---

# Return​Request​Payload

payload

Return type for `returnRequest` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The requested return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

  mutation

  Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

  Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

  For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput)

    required

    ### Arguments

    The input fields for requesting a return.

  ***

***

## Map

### Mutations with this payload

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/returnRequest)
