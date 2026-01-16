---
title: RemoveFromReturnPayload - GraphQL Admin
description: Return type for `removeFromReturn` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/RemoveFromReturnPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/RemoveFromReturnPayload.md
---

# Remove​From​Return​Payload

payload

Return type for `removeFromReturn` mutation.

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

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)

  mutation

  Removes return and/or exchange lines from a return.

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    The return line items to remove from the return.

  * exchange​Line​Items

    [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

    The exchange line items to remove from the return.

  ***

***

## Map

### Mutations with this payload

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/types/removeFromReturn)
