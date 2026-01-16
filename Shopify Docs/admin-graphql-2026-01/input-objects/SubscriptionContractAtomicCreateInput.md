---
title: SubscriptionContractAtomicCreateInput - GraphQL Admin
description: The input fields required to create a Subscription Contract.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput.md
---

# Subscription​Contract​Atomic​Create​Input

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

* discount​Codes

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Default:\[]

  A list of discount redeem codes to apply to the subscription contract.

* lines

  [\[Subscription​Atomic​Line​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput)

  required

  A list of new Subscription Lines.

* next​Billing​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The next billing date for the subscription contract.This field is independent of billing cycles.It stores metadata set by the apps, and thus not managed by Shopify.It can be queried from subscriptionContract.nextBillingDate.

***

## Map

No referencing types
