---
title: DraftOrderUpdatePayload - GraphQL Admin
description: Return type for `draftOrderUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderUpdatePayload.md
---

# Draft​Order​Update​Payload

payload

Return type for `draftOrderUpdate` mutation.

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The updated draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

  mutation

  Updates a draft order.

  If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to update.

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    The draft order properties to update.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderUpdate)
