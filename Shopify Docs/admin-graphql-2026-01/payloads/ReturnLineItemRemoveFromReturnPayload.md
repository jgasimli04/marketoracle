---
title: ReturnLineItemRemoveFromReturnPayload - GraphQL Admin
description: Return type for `returnLineItemRemoveFromReturn` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnLineItemRemoveFromReturnPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnLineItemRemoveFromReturnPayload.md
---

# Return​Line​Item​Remove​From​Return​Payload

payload

Return type for `returnLineItemRemoveFromReturn` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The modified return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Line​Item​Remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnLineItemRemoveFromReturn)

  mutation

  Deprecated

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    required

    The return line items to remove from the return.

  ***

***

## Map
