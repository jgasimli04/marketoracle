---
title: CollectionRuleConditionObject - GraphQL Admin
description: Specifies object for the condition of the rule.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject.md
---

# Collection​Rule​Condition​Object

union

Requires `read_products` access scope.

Specifies object for the condition of the rule.

## Possible types

* [Collection​Rule​Category​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleCategoryCondition)

  OBJECT

  Specifies the taxonomy category to used for the condition.

  * value

    [Taxonomy​Category!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

    non-null

    The taxonomy category used as condition.

* [Collection​Rule​Metafield​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition)

  OBJECT

  Identifies a metafield definition used as a rule for the smart collection.

  * metafield​Definition

    [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

    non-null

    The metafield definition associated with the condition.

* [Collection​Rule​Product​Category​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleProductCategoryCondition)

  OBJECT

  Specifies the condition for a Product Category field.

  * value

    [Product​Taxonomy​Node!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductTaxonomyNode)

    non-null

    The value of the condition.

* [Collection​Rule​Text​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleTextCondition)

  OBJECT

  Specifies the condition for a text field.

  * value

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The value of the condition.

***

## Fields with this union

* [Collection​Rule.conditionObject](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.conditionObject)

  OBJECT

  Represents at rule that's used to assign products to a collection.

***

```graphql
union CollectionRuleConditionObject = CollectionRuleCategoryCondition | CollectionRuleMetafieldCondition | CollectionRuleProductCategoryCondition | CollectionRuleTextCondition
```
