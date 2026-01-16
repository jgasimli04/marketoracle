---
title: SubscriptionBillingAttemptInventoryPolicy - GraphQL Admin
description: The inventory policy for a billing attempt.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy.md
---

# Subscription​Billing​Attempt​Inventory​Policy

enum

The inventory policy for a billing attempt.

## Valid values

* ALLOW\_​OVERSELLING

  Override the merchant's product variant inventory policy and allow overselling for this billing attempt.

* PRODUCT\_​VARIANT\_​INVENTORY\_​POLICY

  Respect the merchant's product variant inventory policy for this billing attempt.

***

## Fields

* [Subscription​Billing​Attempt​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput#fields-inventoryPolicy)

  INPUT OBJECT

  The input fields required to complete a subscription billing attempt.

* [subscription​Billing​Cycle​Bulk​Charge.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge#arguments-inventoryPolicy)

  ARGUMENT

* [subscription​Billing​Cycle​Charge.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge#arguments-inventoryPolicy)

  ARGUMENT

***

## Map

### Inputs with this enum

* [Subscription​Billing​Attempt​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput#fields-inventoryPolicy)

### Arguments with this enum

* <-|[subscription​Billing​Cycle​Bulk​Charge.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge#arguments-inventoryPolicy)
* <-|[subscription​Billing​Cycle​Charge.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge#arguments-inventoryPolicy)
