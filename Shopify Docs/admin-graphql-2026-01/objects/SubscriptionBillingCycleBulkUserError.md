---
title: SubscriptionBillingCycleBulkUserError - GraphQL Admin
description: >-
  Represents an error that happens during the execution of
  subscriptionBillingCycles mutations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError.md
---

# Subscription​Billing​Cycle​Bulk​User​Error

object

Requires `read_own_subscription_contracts` access scope.

Represents an error that happens during the execution of subscriptionBillingCycles mutations.

## Fields

* code

  [Subscription​Billing​Cycle​Bulk​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBulkUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)

  mutation

  Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  ***

***

## <\~> SubscriptionBillingCycleBulkUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)
* <\~>[subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionBillingCycleBulkUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
