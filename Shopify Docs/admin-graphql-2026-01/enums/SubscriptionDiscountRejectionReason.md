---
title: SubscriptionDiscountRejectionReason - GraphQL Admin
description: The reason a discount on a subscription draft was rejected.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason.md
---

# Subscription​Discount​Rejection​Reason

enum

The reason a discount on a subscription draft was rejected.

## Valid values

* CURRENTLY\_​INACTIVE

  Discount is inactive.

* CUSTOMER\_​NOT\_​ELIGIBLE

  Given customer does not qualify for the discount.

* CUSTOMER\_​USAGE\_​LIMIT\_​REACHED

  Customer usage limit has been reached.

* INCOMPATIBLE\_​PURCHASE\_​TYPE

  Purchase type does not qualify for the discount.

* INTERNAL\_​ERROR

  Internal error during discount code validation.

* NO\_​ENTITLED\_​LINE\_​ITEMS

  Discount does not apply to any of the given line items.

* NO\_​ENTITLED\_​SHIPPING\_​LINES

  No applicable shipping lines.

* NOT\_​FOUND

  Discount code is not found.

* PURCHASE\_​NOT\_​IN\_​RANGE

  Purchase amount of items does not qualify for the discount.

* QUANTITY\_​NOT\_​IN\_​RANGE

  Quantity of items does not qualify for the discount.

* USAGE\_​LIMIT\_​REACHED

  Discount usage limit has been reached.

***

## Fields

* [Subscription​Applied​Code​Discount.rejectionReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount#field-SubscriptionAppliedCodeDiscount.fields.rejectionReason)

  OBJECT

  Represents an applied code discount.

* [Subscription​Manual​Discount.rejectionReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount#field-SubscriptionManualDiscount.fields.rejectionReason)

  OBJECT

  Custom subscription discount.

***

## Map

### Fields with this enum

* <-|[Subscription​Applied​Code​Discount.rejectionReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount#field-SubscriptionAppliedCodeDiscount.fields.rejectionReason)
* <-|[Subscription​Manual​Discount.rejectionReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount#field-SubscriptionManualDiscount.fields.rejectionReason)
