---
title: OrderRiskLevel - GraphQL Admin
description: >-
  The likelihood that an order is fraudulent.

  This enum is deprecated in favor of

  [RiskAssessmentResult](https://shopify.dev/api/admin-graphql/latest/enums/RiskAssessmentResult)

  which allows for more granular risk levels, including PENDING and NONE.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskLevel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskLevel.md'
---

# Order​Risk​Level

enum

The likelihood that an order is fraudulent. This enum is deprecated in favor of [RiskAssessmentResult](https://shopify.dev/api/admin-graphql/latest/enums/RiskAssessmentResult) which allows for more granular risk levels, including PENDING and NONE.

## Valid values

* HIGH

  There is a high level of risk that this order is fraudulent.

* LOW

  There is a low level of risk that this order is fraudulent.

* MEDIUM

  There is a medium level of risk that this order is fraudulent.

***

## Fields

### Deprecated fields

* [Order.riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.riskLevel)

  OBJECT

  Deprecated

* [Order​Risk.level](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRisk#field-OrderRisk.fields.level)

  OBJECT

  Deprecated

***

## Map
