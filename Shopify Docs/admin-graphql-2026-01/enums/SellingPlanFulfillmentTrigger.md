---
title: SellingPlanFulfillmentTrigger - GraphQL Admin
description: Describes what triggers fulfillment.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFulfillmentTrigger
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFulfillmentTrigger.md
---

# Selling​Plan​Fulfillment​Trigger

enum

Describes what triggers fulfillment.

## Valid values

* ANCHOR

  Use the anchor values to calculate fulfillment date.

* ASAP

  As soon as possible.

* EXACT\_​TIME

  At an exact time defined by the fulfillment\_exact\_time field.

* UNKNOWN

  Unknown. Usually to be determined in the future.

***

## Fields

* [Selling​Plan​Fixed​Delivery​Policy.fulfillmentTrigger](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy#field-SellingPlanFixedDeliveryPolicy.fields.fulfillmentTrigger)

  OBJECT

  Represents a fixed selling plan delivery policy.

* [Selling​Plan​Fixed​Delivery​Policy​Input.fulfillmentTrigger](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-fulfillmentTrigger)

  INPUT OBJECT

  The input fields required to create or update a fixed delivery policy.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Fixed​Delivery​Policy.fulfillmentTrigger](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy#field-SellingPlanFixedDeliveryPolicy.fields.fulfillmentTrigger)

### Inputs with this enum

* [Selling​Plan​Fixed​Delivery​Policy​Input.fulfillmentTrigger](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-fulfillmentTrigger)
