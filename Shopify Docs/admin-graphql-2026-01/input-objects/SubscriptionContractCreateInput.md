---
title: SubscriptionContractCreateInput - GraphQL Admin
description: The input fields required to create a Subscription Contract.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput.md
---

# Subscription​Contract​Create​Input

input\_object

The input fields required to create a Subscription Contract.

## Fields

* contract

  [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

  required

  The attributes used as input for the Subscription Draft.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency used for the subscription contract.

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer to associate with the subscription contract.

* next​Billing​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The next billing date for the subscription contract.

***

## Map

No referencing types
