---
title: DraftOrderDeletePayload - GraphQL Admin
description: Return type for `draftOrderDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderDeletePayload.md
---

# Draft​Order​Delete​Payload

payload

Return type for `draftOrderDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete)

  mutation

  Deletes a draft order.

  * input

    [Draft​Order​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderDeleteInput)

    required

    ### Arguments

    Specify the draft order to delete by its ID.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderDelete)
