---
title: SellingPlanFixedBillingPolicyInput - GraphQL Admin
description: The input fields required to create or update a fixed billing policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedBillingPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedBillingPolicyInput.md
---

# Selling​Plan​Fixed​Billing​Policy​Input

input\_object

The input fields required to create or update a fixed billing policy.

## Fields

* checkout​Charge

  [Selling​Plan​Checkout​Charge​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanCheckoutChargeInput)

  The checkout charge policy for the selling plan.

* remaining​Balance​Charge​Exact​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time to capture the full payment.

* remaining​Balance​Charge​Time​After​Checkout

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The period after capturing the payment for the amount due (`remainingBalanceChargeTrigger`), and before capturing the full payment. Expressed as an ISO8601 duration.

* remaining​Balance​Charge​Trigger

  [Selling​Plan​Remaining​Balance​Charge​Trigger](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRemainingBalanceChargeTrigger)

  When to capture the payment for the amount due.

***

## Input objects using this input

* [Selling​Plan​Billing​Policy​Input.fixed](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanBillingPolicyInput#fields-fixed)

  INPUT OBJECT

  The input fields that are required to create or update a billing policy type.

***

## Map

### Input objects using this input

* [Selling​Plan​Billing​Policy​Input.fixed](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanBillingPolicyInput#fields-fixed)
