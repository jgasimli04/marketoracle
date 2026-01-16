---
title: SellingPlanFixedDeliveryPolicyPreAnchorBehavior - GraphQL Admin
description: >-
  The fulfillment or delivery behavior of the first fulfillment when the orderis
  placed before the anchor.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior.md
---

# Selling​Plan​Fixed​Delivery​Policy​Pre​Anchor​Behavior

enum

The fulfillment or delivery behavior of the first fulfillment when the orderis placed before the anchor.

## Valid values

* ASAP

  Orders placed can be fulfilled / delivered immediately. Orders placed inside a cutoff can be fulfilled / delivered at the next anchor.

* NEXT

  Orders placed can be fulfilled / delivered at the next anchor date. Orders placed inside a cutoff will skip the next anchor and can be fulfilled / delivered at the following anchor.

***

## Fields

* [Selling​Plan​Fixed​Delivery​Policy.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy#field-SellingPlanFixedDeliveryPolicy.fields.preAnchorBehavior)

  OBJECT

  Represents a fixed selling plan delivery policy.

* [Selling​Plan​Fixed​Delivery​Policy​Input.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-preAnchorBehavior)

  INPUT OBJECT

  The input fields required to create or update a fixed delivery policy.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Fixed​Delivery​Policy.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy#field-SellingPlanFixedDeliveryPolicy.fields.preAnchorBehavior)

### Inputs with this enum

* [Selling​Plan​Fixed​Delivery​Policy​Input.preAnchorBehavior](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-preAnchorBehavior)
