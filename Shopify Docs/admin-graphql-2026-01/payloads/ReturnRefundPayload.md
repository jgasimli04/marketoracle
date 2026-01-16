---
title: ReturnRefundPayload - GraphQL Admin
description: Return type for `returnRefund` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnRefundPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnRefundPayload.md
---

# Return​Refund​Payload

payload

Return type for `returnRefund` mutation.

## Fields

* refund

  [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  The created refund.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

  mutation

  Deprecated

  * return​Refund​Input

    [Return​Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput)

    required

    ### Arguments

    The input fields to refund a return.

  ***

***

## Map
