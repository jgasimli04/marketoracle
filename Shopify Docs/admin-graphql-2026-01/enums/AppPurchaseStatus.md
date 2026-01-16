---
title: AppPurchaseStatus - GraphQL Admin
description: >-
  The approval status of the app purchase.


  The merchant is charged for the purchase immediately after approval, and the
  status changes to `active`.

  If the payment fails, then the app purchase remains `pending`.


  Purchases start as `pending` and can change to: `active`, `declined`,
  `expired`. After a purchase changes, it

  remains in that final state.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus.md'
---

# App​Purchase​Status

enum

The approval status of the app purchase.

The merchant is charged for the purchase immediately after approval, and the status changes to `active`. If the payment fails, then the app purchase remains `pending`.

Purchases start as `pending` and can change to: `active`, `declined`, `expired`. After a purchase changes, it remains in that final state.

## Valid values

* ACTIVE

  The app purchase was approved by the merchant and has been activated by the app. Active app purchases are charged to the merchant and are paid out to the partner.

* DECLINED

  The app purchase was declined by the merchant.

* EXPIRED

  The app purchase was not accepted within two days of being created.

* PENDING

  The app purchase is pending approval by the merchant.

* ACCEPTED

  Deprecated

***

## Fields

* [App​Purchase.status](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase#fields-status)

  INTERFACE

  Services and features purchased once by the store.

* [App​Purchase​One​Time.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.status)

  OBJECT

  Represents a one-time purchase of app services or features by a merchant, tracking the transaction details and status throughout the billing lifecycle. This object captures essential information about non-recurring charges, including price and merchant acceptance status.

  One-time purchases are particularly valuable for apps offering premium features, professional services, or digital products that don't require ongoing subscriptions. For instance, a photography app might sell premium filters as one-time purchases, while a marketing app could charge for individual campaign setups or advanced analytics reports.

  Use the `AppPurchaseOneTime` object to:

  * Track the status of individual feature purchases and service charges
  * Track payment status for premium content or digital products
  * Access purchase details to enable or disable features based on payment status

  The purchase status indicates whether the charge is pending merchant approval, has been accepted and processed, or was declined. This status tracking is crucial for apps that need to conditionally enable features based on successful payment completion.

  Purchase records include creation timestamps, pricing details, and test flags to distinguish between production charges and development testing. The test flag ensures that development and staging environments don't generate actual charges while maintaining realistic billing flow testing.

  For detailed implementation patterns and billing best practices, see the [one-time-charges page](https://shopify.dev/docs/apps/launch/billing/one-time-charges).

***

## Map

### Fields with this enum

* <-|[App​Purchase​One​Time.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.status)
