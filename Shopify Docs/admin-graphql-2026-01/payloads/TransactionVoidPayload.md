---
title: TransactionVoidPayload - GraphQL Admin
description: Return type for `transactionVoid` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TransactionVoidPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TransactionVoidPayload.md
---

# Transaction​Void​Payload

payload

Return type for `transactionVoid` mutation.

## Fields

* transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The created void transaction.

* user​Errors

  [\[Transaction​Void​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

  mutation

  Trigger the voiding of an uncaptured authorization transaction.

  * parent​Transaction​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An uncaptured authorization transaction.

  ***

***

## Map

### Mutations with this payload

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/types/transactionVoid)
