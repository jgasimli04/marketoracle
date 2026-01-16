---
title: SubscriptionBillingCycleBulkFilters - GraphQL Admin
description: The input fields for filtering subscription billing cycles in bulk actions.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters.md
---

# Subscription​Billing​Cycle​Bulk​Filters

input\_object

The input fields for filtering subscription billing cycles in bulk actions.

## Fields

* billing​Attempt​Status

  [Subscription​Billing​Cycle​Billing​Attempt​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBillingAttemptStatus)

  Default:ANY

  Filters the billing cycles based on the presence of billing attempts.

* billing​Cycle​Status

  [\[Subscription​Billing​Cycle​Billing​Cycle​Status!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBillingCycleStatus)

  Filters the billing cycles based on their status.

* contract​Status

  [\[Subscription​Contract​Subscription​Status!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

  Filters the billing cycles based on the status of their associated subscription contracts.

***

## Map

No referencing types
