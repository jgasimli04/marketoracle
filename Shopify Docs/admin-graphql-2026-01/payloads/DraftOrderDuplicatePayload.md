---
title: DraftOrderDuplicatePayload - GraphQL Admin
description: Return type for `draftOrderDuplicate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderDuplicatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderDuplicatePayload.md
---

# Draft​Order​Duplicate​Payload

payload

Return type for `draftOrderDuplicate` mutation.

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The newly duplicated draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

  mutation

  Duplicates a draft order.

  * draft​Order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order to duplicate.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderDuplicate)
