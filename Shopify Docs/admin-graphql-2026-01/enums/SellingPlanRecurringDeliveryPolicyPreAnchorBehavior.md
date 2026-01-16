---
title: SellingPlanRecurringDeliveryPolicyPreAnchorBehavior - GraphQL Admin
description: >-
  The fulfillment or delivery behaviors of the first fulfillment when the
  orderis placed before the anchor.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior.md
---

# Selling​Plan​Recurring​Delivery​Policy​Pre​Anchor​Behavior

enum

The fulfillment or delivery behaviors of the first fulfillment when the orderis placed before the anchor.

## Valid values

* ASAP

  The orders placed can be fulfilled or delivered immediately. The orders placed inside a cutoff can be fulfilled or delivered at the next anchor.

* NEXT

  The orders placed can be fulfilled or delivered at the next anchor date. The orders placed inside a cutoff will skip the next anchor and can be fulfilled or delivered at the following anchor.

***

## Fields

* [Selling​Plan​Recurring​Delivery​Policy.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringDeliveryPolicy#field-SellingPlanRecurringDeliveryPolicy.fields.preAnchorBehavior)

  OBJECT

  Represents a recurring selling plan delivery policy.

* [Selling​Plan​Recurring​Delivery​Policy​Input.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput#fields-preAnchorBehavior)

  INPUT OBJECT

  The input fields to create or update a recurring delivery policy.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Recurring​Delivery​Policy.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringDeliveryPolicy#field-SellingPlanRecurringDeliveryPolicy.fields.preAnchorBehavior)

### Inputs with this enum

* [Selling​Plan​Recurring​Delivery​Policy​Input.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput#fields-preAnchorBehavior)
