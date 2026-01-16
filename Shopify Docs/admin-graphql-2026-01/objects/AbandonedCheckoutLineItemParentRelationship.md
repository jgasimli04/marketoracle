---
title: AbandonedCheckoutLineItemParentRelationship - GraphQL Admin
description: The line relationship between two line items in an abandoned checkout.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemParentRelationship
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemParentRelationship.md
---

# Abandoned​Checkout​Line​Item​Parent​Relationship

object

Requires `read_orders` access scope. Also: The user must have manage\_abandoned\_checkouts permission.

The line relationship between two line items in an abandoned checkout.

## Fields

* parent

  [Abandoned​Checkout​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem)

  non-null

  The parent line item of the current line item.

***

## Map

### Fields with this object

* {}[AbandonedCheckoutLineItem.parentRelationship](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.parentRelationship)
