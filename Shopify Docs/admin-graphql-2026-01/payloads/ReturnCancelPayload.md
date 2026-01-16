---
title: ReturnCancelPayload - GraphQL Admin
description: Return type for `returnCancel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnCancelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnCancelPayload.md
---

# Return​Cancel​Payload

payload

Return type for `returnCancel` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The canceled return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)

  mutation

  Cancels a return and restores the items back to being fulfilled. Canceling a return is only available before any work has been done on the return (such as an inspection or refund).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to cancel.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  ***

***

## Map

### Mutations with this payload

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/types/returnCancel)
