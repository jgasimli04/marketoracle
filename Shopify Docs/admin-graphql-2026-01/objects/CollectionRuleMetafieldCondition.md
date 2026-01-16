---
title: CollectionRuleMetafieldCondition - GraphQL Admin
description: Identifies a metafield definition used as a rule for the smart collection.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition.md
---

# Collection​Rule​Metafield​Condition

object

Requires `read_products` access scope.

Identifies a metafield definition used as a rule for the smart collection.

## Fields

* metafield​Definition

  [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  The metafield definition associated with the condition.

***

## Map

### Possible type in

* [Collection​Rule​Condition​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject)
* [Collection​Rule​Conditions​Rule​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionsRuleObject)
