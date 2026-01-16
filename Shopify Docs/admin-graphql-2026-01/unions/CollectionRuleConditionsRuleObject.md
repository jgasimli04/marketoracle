---
title: CollectionRuleConditionsRuleObject - GraphQL Admin
description: Specifies object with additional rule attributes.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionsRuleObject
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionsRuleObject.md
---

# Collection​Rule​Conditions​Rule​Object

union

Requires `read_products` access scope.

Specifies object with additional rule attributes.

## Possible types

* [Collection​Rule​Metafield​Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition)

  OBJECT

  Identifies a metafield definition used as a rule for the smart collection.

  * metafield​Definition

    [Metafield​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

    non-null

    The metafield definition associated with the condition.

***

## Fields with this union

* [Collection​Rule​Conditions.ruleObject](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.ruleObject)

  OBJECT

  Defines the available columns and relationships that can be used when creating rules for smart collections. This provides the schema for building automated collection logic based on product attributes.

  For example, merchants can create rules like "product type equals 'Shirts'" or "vendor contains 'Nike'" using the conditions defined in this object to automatically populate collections.

  Use `CollectionRuleConditions` to:

  * Discovering valid field options for smart collection rule interfaces
  * Understanding which conditions are available for automated collections
  * Exploring available product attributes for collection automation
  * Learning about proper field relationships for rule implementation

  The conditions define which product fields can be used in smart collection rules and what types of comparisons are allowed for each field.

  Learn more about [smart collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

***

```graphql
union CollectionRuleConditionsRuleObject = CollectionRuleMetafieldCondition
```
