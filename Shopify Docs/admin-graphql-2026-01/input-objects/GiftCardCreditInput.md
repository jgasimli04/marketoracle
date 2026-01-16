---
title: GiftCardCreditInput - GraphQL Admin
description: The input fields for a gift card credit transaction.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput.md
---

# Gift​Card​Credit​Input

input\_object

The input fields for a gift card credit transaction.

## Fields

* credit​Amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount to credit the gift card.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the credit.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time the credit was processed. Defaults to current date and time.

***

## Map

No referencing types
