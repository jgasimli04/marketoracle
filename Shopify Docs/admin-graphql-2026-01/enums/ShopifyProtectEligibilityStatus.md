---
title: ShopifyProtectEligibilityStatus - GraphQL Admin
description: >-
  The status of an order's eligibility for protection against fraudulent
  chargebacks by Shopify Protect.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectEligibilityStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectEligibilityStatus.md
---

# Shopify​Protect​Eligibility​Status

enum

The status of an order's eligibility for protection against fraudulent chargebacks by Shopify Protect.

## Valid values

* ELIGIBLE

  The order is eligible for protection against fraudulent chargebacks. If an order is updated, the order's eligibility may change and protection could be removed.

* NOT\_​ELIGIBLE

  The order isn't eligible for protection against fraudulent chargebacks.

* PENDING

  The eligibility of the order is pending and has not yet been determined.

***

## Fields

* [Shopify​Protect​Order​Eligibility.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderEligibility#field-ShopifyProtectOrderEligibility.fields.status)

  OBJECT

  The eligibility details of an order's protection against fraudulent chargebacks by Shopify Protect.

***

## Map

### Fields with this enum

* <-|[Shopify​Protect​Order​Eligibility.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderEligibility#field-ShopifyProtectOrderEligibility.fields.status)
