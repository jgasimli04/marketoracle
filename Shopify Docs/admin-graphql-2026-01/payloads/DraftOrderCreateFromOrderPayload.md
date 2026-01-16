---
title: DraftOrderCreateFromOrderPayload - GraphQL Admin
description: Return type for `draftOrderCreateFromOrder` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCreateFromOrderPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderCreateFromOrderPayload.md
---

# Draft​Order​Create​From​Order​Payload

payload

Return type for `draftOrderCreateFromOrder` mutation.

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The created draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

  mutation

  Creates a draft order from order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the order's id that we create the draft order from.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderCreateFromOrder)
