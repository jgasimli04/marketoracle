---
title: StoreCreditAccountCreditInput - GraphQL Admin
description: The input fields for a store credit account credit transaction.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput.md
---

# Store​Credit​Account​Credit​Input

input\_object

The input fields for a store credit account credit transaction.

## Fields

* credit​Amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount to credit the store credit account.

* expires​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the credit expires.

* notify

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to send a notification to the account owner when the store credit is issued. Defaults to `false`.

***

## Map

No referencing types
