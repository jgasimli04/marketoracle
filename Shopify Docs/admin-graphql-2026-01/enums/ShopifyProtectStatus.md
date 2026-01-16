---
title: ShopifyProtectStatus - GraphQL Admin
description: The status of an order's protection with Shopify Protect.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectStatus'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyProtectStatus.md
---

# Shopify​Protect​Status

enum

The status of an order's protection with Shopify Protect.

## Valid values

* ACTIVE

  The protection for the order is active and eligible for reimbursement against fraudulent chargebacks. If an order is updated, the order's eligibility may change and protection could become inactive.

* INACTIVE

  The protection for an order isn't active because the order didn't meet eligibility requirements.

* NOT\_​PROTECTED

  The order received a chargeback but the order wasn't protected because it didn't meet coverage requirements.

* PENDING

  The protection for the order is pending and has not yet been determined.

* PROTECTED

  The order received a fraudulent chargeback and it was protected.

***

## Fields

* [Shopify​Protect​Order​Summary.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary#field-ShopifyProtectOrderSummary.fields.status)

  OBJECT

  A summary of Shopify Protect details for an order.

***

## Map

### Fields with this enum

* <-|[Shopify​Protect​Order​Summary.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary#field-ShopifyProtectOrderSummary.fields.status)
