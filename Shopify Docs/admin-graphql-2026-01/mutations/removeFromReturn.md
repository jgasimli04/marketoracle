---
title: removeFromReturn - GraphQL Admin
description: Removes return and/or exchange lines from a return.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn.md
---

# remove​From​Return

mutation

Requires `write_returns` access scope. Also: The user must have `return_orders` permission.

Removes return and/or exchange lines from a return.

## Arguments

* exchange​Line​Items

  [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

  The exchange line items to remove from the return.

* return​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the return for line item removal.

* return​Line​Items

  [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

  The return line items to remove from the return.

***

## Remove​From​Return​Payload returns

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The modified return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### removeFromReturn reference

## Mutation Reference

```graphql
mutation removeFromReturn($returnId: ID!, $returnLineItems: [ReturnLineItemRemoveFromReturnInput!], $exchangeLineItems: [ExchangeLineItemRemoveFromReturnInput!]) {
  removeFromReturn(returnId: $returnId, returnLineItems: $returnLineItems, exchangeLineItems: $exchangeLineItems) {
    return {
      # Return fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "returnId": "gid://shopify/<objectName>/10079785100",
  "returnLineItems": [
    {
      "returnLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1
    }
  ],
  "exchangeLineItems": [
    {
      "exchangeLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1
    }
  ]
}
```

##### Schema

```graphql
input ReturnLineItemRemoveFromReturnInput {
  returnLineItemId: ID!
  quantity: Int!
}

input ExchangeLineItemRemoveFromReturnInput {
  exchangeLineItemId: ID!
  quantity: Int!
}
```
