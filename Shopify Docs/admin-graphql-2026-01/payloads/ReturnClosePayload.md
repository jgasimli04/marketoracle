---
title: ReturnClosePayload - GraphQL Admin
description: Return type for `returnClose` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnClosePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnClosePayload.md
---

# Return​Close​Payload

payload

Return type for `returnClose` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The closed return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)

  mutation

  Indicates a return is complete, either when a refund has been made and items restocked, or simply when it has been marked as returned in the system.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to close.

  ***

***

## Map

### Mutations with this payload

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/types/returnClose)
