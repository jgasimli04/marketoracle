---
title: SellingPlanRecurringBillingPolicyInput - GraphQL Admin
description: The input fields required to create or update a recurring billing policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringBillingPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringBillingPolicyInput.md
---

# Selling​Plan​Recurring​Billing​Policy​Input

input\_object

The input fields required to create or update a recurring billing policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput)

  Specific anchor dates upon which the billing interval calculations should be made.

* interval

  [Selling​Plan​Interval](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  The billing frequency, it can be either: day, week, month or year.

* interval​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of intervals between billings.

* max​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Maximum number of billing iterations.

* min​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Minimum number of billing iterations.

***

## Input objects using this input

* [Selling​Plan​Billing​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanBillingPolicyInput#fields-recurring)

  INPUT OBJECT

  The input fields that are required to create or update a billing policy type.

***

## Map

### Input objects using this input

* [Selling​Plan​Billing​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanBillingPolicyInput#fields-recurring)
