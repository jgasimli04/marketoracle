---
title: CalculatedShippingLineStagedStatus - GraphQL Admin
description: Represents the staged status of a CalculatedShippingLine on a CalculatedOrder.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CalculatedShippingLineStagedStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CalculatedShippingLineStagedStatus.md
---

# Calculated​Shipping​Line​Staged​Status

enum

Represents the staged status of a CalculatedShippingLine on a CalculatedOrder.

## Valid values

* ADDED

  The shipping line was added as part of the current order edit.

* NONE

  The shipping line has no staged changes associated with it.

* REMOVED

  The shipping line was removed as part of the current order edit.

***

## Fields

* [Calculated​Shipping​Line.stagedStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine#field-CalculatedShippingLine.fields.stagedStatus)

  OBJECT

  A shipping line item involved in order editing that may be newly added or have new changes applied.

***

## Map

### Fields with this enum

* <-|[Calculated​Shipping​Line.stagedStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine#field-CalculatedShippingLine.fields.stagedStatus)
