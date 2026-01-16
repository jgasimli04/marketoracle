---
title: GiftCardDebitInput - GraphQL Admin
description: The input fields for a gift card debit transaction.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput.md
---

# Gift​Card​Debit​Input

input\_object

The input fields for a gift card debit transaction.

## Fields

* debit​Amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount to debit the gift card.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the debit.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time the debit was processed. Defaults to current date and time.

***

## Map

No referencing types
