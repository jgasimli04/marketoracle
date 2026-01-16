---
title: SellingPlanAnchorType - GraphQL Admin
description: Represents the anchor type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanAnchorType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanAnchorType.md
---

# Selling​Plan​Anchor​Type

enum

Represents the anchor type.

## Valid values

* MONTHDAY

  Which day of the month, between 1-31.

* WEEKDAY

  Which day of the week, between 1-7.

* YEARDAY

  Which days of the month and year, month between 1-12, and day between 1-31.

***

## Fields

* [Selling​Plan​Anchor.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor#field-SellingPlanAnchor.fields.type)

  OBJECT

  Specifies the date when delivery or fulfillment is completed by a merchant for a given time cycle. You can also define a cutoff for which customers are eligible to enter this cycle and the desired behavior for customers who start their subscription inside the cutoff period.

  Some example scenarios where anchors can be useful to implement advanced delivery behavior:

  * A merchant starts fulfillment on a specific date every month.
  * A merchant wants to bill the 1st of every quarter.
  * A customer expects their delivery every Tuesday.

  For more details, see [About Selling Plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans#anchors).

* [Selling​Plan​Anchor​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput#fields-type)

  INPUT OBJECT

  The input fields required to create or update a selling plan anchor.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Anchor.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor#field-SellingPlanAnchor.fields.type)

### Inputs with this enum

* [Selling​Plan​Anchor​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput#fields-type)
