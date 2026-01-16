---
title: ReturnReopenPayload - GraphQL Admin
description: Return type for `returnReopen` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnReopenPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnReopenPayload.md
---

# Return​Reopen​Payload

payload

Return type for `returnReopen` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The reopened return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)

  mutation

  Reopens a closed return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to reopen.

  ***

***

## Map

### Mutations with this payload

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/types/returnReopen)
