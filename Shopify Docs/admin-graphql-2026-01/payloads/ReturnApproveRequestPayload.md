---
title: ReturnApproveRequestPayload - GraphQL Admin
description: Return type for `returnApproveRequest` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnApproveRequestPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnApproveRequestPayload.md
---

# Return​Approve​Request​Payload

payload

Return type for `returnApproveRequest` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The approved return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)

  mutation

  Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

  * input

    [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

    required

    ### Arguments

    The input fields to approve a return.

  ***

***

## Map

### Mutations with this payload

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/types/returnApproveRequest)
