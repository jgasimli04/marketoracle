---
title: StoreCreditAccountCreditPayload - GraphQL Admin
description: Return type for `storeCreditAccountCredit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StoreCreditAccountCreditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StoreCreditAccountCreditPayload.md
---

# Store​Credit​Account​Credit​Payload

payload

Return type for `storeCreditAccountCredit` mutation.

## Fields

* store​Credit​Account​Transaction

  [Store​Credit​Account​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

  The store credit account transaction that was created.

* user​Errors

  [\[Store​Credit​Account​Credit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

  mutation

  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

  Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

  Credits can optionally include an expiration date.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * credit​Input

    [Store​Credit​Account​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

    required

    The input fields for a store credit account credit transaction.

  ***

***

## Map

### Mutations with this payload

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/types/storeCreditAccountCredit)
