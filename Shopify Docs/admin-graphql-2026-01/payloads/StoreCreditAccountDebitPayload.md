---
title: StoreCreditAccountDebitPayload - GraphQL Admin
description: Return type for `storeCreditAccountDebit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StoreCreditAccountDebitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StoreCreditAccountDebitPayload.md
---

# Store​Credit​Account​Debit​Payload

payload

Return type for `storeCreditAccountDebit` mutation.

## Fields

* store​Credit​Account​Transaction

  [Store​Credit​Account​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

  The store credit account transaction that was created.

* user​Errors

  [\[Store​Credit​Account​Debit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

  mutation

  Creates a debit transaction that decreases the store credit account balance by the given amount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * debit​Input

    [Store​Credit​Account​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

    required

    The input fields for a store credit account debit transaction.

  ***

***

## Map

### Mutations with this payload

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/types/storeCreditAccountDebit)
