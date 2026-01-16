---
title: AppSubscriptionStatus - GraphQL Admin
description: The status of the app subscription.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus.md
---

# App​Subscription​Status

enum

The status of the app subscription.

## Valid values

* ACTIVE

  The app subscription has been approved by the merchant. Active app subscriptions are billed to the shop. After payment, partners receive payouts.

* CANCELLED

  The app subscription was cancelled by the app. This could be caused by the app being uninstalled, a new app subscription being activated, or a direct cancellation by the app. This is a terminal state.

* DECLINED

  The app subscription was declined by the merchant. This is a terminal state.

* EXPIRED

  The app subscription wasn't approved by the merchant within two days of being created. This is a terminal state.

* FROZEN

  The app subscription is on hold due to non-payment. The subscription re-activates after payments resume.

* PENDING

  The app subscription is pending approval by the merchant.

* ACCEPTED

  Deprecated

***

## Fields

* [App​Subscription.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.status)

  OBJECT

  A recurring billing agreement that associates an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) with a merchant's shop. Each subscription contains one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure. The pricing structure can include recurring charges, usage-based pricing, or both.

  The subscription tracks billing details including the current period end date, trial days, and [`AppSubscriptionStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus).

  Merchants must approve subscriptions through a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) before billing begins. Test subscriptions allow developers to verify billing flows without actual charges.

  Learn more about [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing) and [testing charges](https://shopify.dev/docs/apps/launch/billing/managed-pricing#test-charges).

***

## Map

### Fields with this enum

* <-|[App​Subscription.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.status)
