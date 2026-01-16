---
title: AppSubscriptionReplacementBehavior - GraphQL Admin
description: >-
  The replacement behavior when creating an app subscription for a merchant with
  an already existing app subscription.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior.md
---

# App​Subscription​Replacement​Behavior

enum

The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

## Valid values

* APPLY\_​IMMEDIATELY

  Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription.

* APPLY\_​ON\_​NEXT\_​BILLING\_​CYCLE

  Defers canceling the merchant's current app subscription and applying the newly created app subscription until the start of the next billing cycle. This value is ignored if the new app subscription is using a different currency than the current app subscription, in which case the new app subscription is applied immediately.

* STANDARD

  Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription, with the exception of the following scenarios where replacing the current app subscription will be deferred until the start of the next billing cycle.

  1. The current app subscription is annual and the newly created app subscription is annual, using the same currency, but is of a lesser value.
  2. The current app subscription is annual and the newly created app subscription is monthly and using the same currency.
  3. The current app subscription and the newly created app subscription are identical except for the `discount` value.

***

## Fields

* [app​Subscription​Create.replacementBehavior](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#arguments-replacementBehavior)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[app​Subscription​Create.replacementBehavior](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#arguments-replacementBehavior)
