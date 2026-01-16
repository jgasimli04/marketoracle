---
title: RiskAssessmentResult - GraphQL Admin
description: List of possible values for a RiskAssessment result.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskAssessmentResult'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/RiskAssessmentResult.md
---

# Risk​Assessment​Result

enum

List of possible values for a RiskAssessment result.

## Valid values

* HIGH

  Indicates a high likelihood that the order is fraudulent.

* LOW

  Indicates a low likelihood that the order is fraudulent.

* MEDIUM

  Indicates a medium likelihood that the order is fraudulent.

* NONE

  Indicates that the risk assessment will not provide a recommendation for the order.

* PENDING

  Indicates that the risk assessment is still pending.

***

## Fields

* [Order​Risk​Assessment.riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel)

  OBJECT

  The risk assessments for an order.

  See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

* [Order​Risk​Assessment​Create​Input.riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput#fields-riskLevel)

  INPUT OBJECT

  The input fields for an order risk assessment.

***

## Map

### Fields with this enum

* <-|[Order​Risk​Assessment.riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel)

### Inputs with this enum

* [Order​Risk​Assessment​Create​Input.riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput#fields-riskLevel)
