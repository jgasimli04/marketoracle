---
title: SellingPlanRemainingBalanceChargeTrigger - GraphQL Admin
description: When to capture the payment for the remaining amount due.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRemainingBalanceChargeTrigger
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRemainingBalanceChargeTrigger.md
---

# Selling​Plan​Remaining​Balance​Charge​Trigger

enum

When to capture the payment for the remaining amount due.

## Valid values

* EXACT\_​TIME

  At an exact time defined by the remaining\_balance\_charge\_exact\_time field.

* NO\_​REMAINING\_​BALANCE

  When there's no remaining balance to be charged after checkout.

* ON\_​FULFILLMENT

  When the order is fulfilled.

* TIME\_​AFTER\_​CHECKOUT

  After the duration defined by the remaining\_balance\_charge\_time\_after\_checkout field.

***

## Fields

* [Selling​Plan​Fixed​Billing​Policy.remainingBalanceChargeTrigger](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy#field-SellingPlanFixedBillingPolicy.fields.remainingBalanceChargeTrigger)

  OBJECT

  The fixed selling plan billing policy defines how much of the price of the product will be billed to customer at checkout. If there is an outstanding balance, it determines when it will be paid.

* [Selling​Plan​Fixed​Billing​Policy​Input.remainingBalanceChargeTrigger](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedBillingPolicyInput#fields-remainingBalanceChargeTrigger)

  INPUT OBJECT

  The input fields required to create or update a fixed billing policy.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Fixed​Billing​Policy.remainingBalanceChargeTrigger](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy#field-SellingPlanFixedBillingPolicy.fields.remainingBalanceChargeTrigger)

### Inputs with this enum

* [Selling​Plan​Fixed​Billing​Policy​Input.remainingBalanceChargeTrigger](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedBillingPolicyInput#fields-remainingBalanceChargeTrigger)
