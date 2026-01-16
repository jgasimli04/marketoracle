---
title: OrderRiskRecommendationResult - GraphQL Admin
description: List of possible values for an OrderRiskRecommendation recommendation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskRecommendationResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskRecommendationResult.md
---

# Order​Risk​Recommendation​Result

enum

List of possible values for an OrderRiskRecommendation recommendation.

## Valid values

* ACCEPT

  Recommends fulfilling the order.

* CANCEL

  Recommends cancelling the order.

* INVESTIGATE

  Recommends investigating the order by contacting buyers.

* NONE

  There is no recommended action for the order.

***

## Fields

* [Order​Risk​Summary.recommendation](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary#field-OrderRiskSummary.fields.recommendation)

  OBJECT

  Summary of risk characteristics for an order.

  See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).

***

## Map

### Fields with this enum

* <-|[Order​Risk​Summary.recommendation](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary#field-OrderRiskSummary.fields.recommendation)
