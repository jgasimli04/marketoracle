---
title: CollectionRuleConditions - GraphQL Admin
description: >-
  Defines the available columns and relationships that can be used when creating
  rules for smart collections. This provides the schema for building automated
  collection logic based on product attributes.


  For example, merchants can create rules like "product type equals 'Shirts'" or
  "vendor contains 'Nike'" using the conditions defined in this object to
  automatically populate collections.


  Use `CollectionRuleConditions` to:

  - Discovering valid field options for smart collection rule interfaces

  - Understanding which conditions are available for automated collections

  - Exploring available product attributes for collection automation

  - Learning about proper field relationships for rule implementation


  The conditions define which product fields can be used in smart collection
  rules and what types of comparisons are allowed for each field.


  Learn more about [smart
  collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions.md
---

# Collection​Rule​Conditions

object

Requires `read_products` access scope.

Defines the available columns and relationships that can be used when creating rules for smart collections. This provides the schema for building automated collection logic based on product attributes.

For example, merchants can create rules like "product type equals 'Shirts'" or "vendor contains 'Nike'" using the conditions defined in this object to automatically populate collections.

Use `CollectionRuleConditions` to:

* Discovering valid field options for smart collection rule interfaces
* Understanding which conditions are available for automated collections
* Exploring available product attributes for collection automation
* Learning about proper field relationships for rule implementation

The conditions define which product fields can be used in smart collection rules and what types of comparisons are allowed for each field.

Learn more about [smart collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

## Fields

* allowed​Relations

  [\[Collection​Rule​Relation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation)

  non-null

  Allowed relations of the rule.

* default​Relation

  [Collection​Rule​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation)

  non-null

  Most commonly used relation for this rule.

* rule​Object

  [Collection​Rule​Conditions​Rule​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionsRuleObject)

  Additional attributes defining the rule.

* rule​Type

  [Collection​Rule​Column!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleColumn)

  non-null

  Type of the rule.

***

## Map

No referencing types

***

## Queries

* [collection​Rules​Conditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionRulesConditions)

  query

  Lists all rules that can be used to create smart collections.

***

## \<?>CollectionRuleConditions Queries

### Queried by

* \<?>[collection​Rules​Conditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionRulesConditions)
