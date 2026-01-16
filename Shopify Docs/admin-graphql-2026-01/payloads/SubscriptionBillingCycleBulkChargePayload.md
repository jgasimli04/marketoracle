---
title: SubscriptionBillingCycleBulkChargePayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleBulkCharge` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleBulkChargePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleBulkChargePayload.md
---

# Subscription​Billing​Cycle​Bulk​Charge​Payload

payload

Return type for `subscriptionBillingCycleBulkCharge` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that performs the action on the targeted billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​Bulk​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)

  mutation

  Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleBulkCharge)
