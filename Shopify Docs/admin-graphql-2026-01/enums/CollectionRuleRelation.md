---
title: CollectionRuleRelation - GraphQL Admin
description: Specifies the relationship between the `column` and the `condition`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation.md
---

# Collection​Rule​Relation

enum

Specifies the relationship between the `column` and the `condition`.

## Valid values

* CONTAINS

  The attribute contains the condition.

* ENDS\_​WITH

  The attribute ends with the condition.

* EQUALS

  The attribute is equal to the condition.

* GREATER\_​THAN

  The attribute is greater than the condition.

* IS\_​NOT\_​SET

  The attribute is not set (equal to `null`).

* IS\_​SET

  The attribute is set (not equal to `null`).

* LESS\_​THAN

  The attribute is less than the condition.

* NOT\_​CONTAINS

  The attribute does not contain the condition.

* NOT\_​EQUALS

  The attribute does not equal the condition.

* STARTS\_​WITH

  The attribute starts with the condition.

***

## Fields

* [Collection​Rule.relation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.relation)

  OBJECT

  Represents at rule that's used to assign products to a collection.

* [Collection​Rule​Conditions.allowedRelations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.allowedRelations)

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

* [Collection​Rule​Conditions.defaultRelation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.defaultRelation)

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

* [Collection​Rule​Input.relation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput#fields-relation)

  INPUT OBJECT

  The input fields for a rule to associate with a collection.

***

## Map

### Fields with this enum

* <-|[Collection​Rule.relation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.relation)
* <-|[Collection​Rule​Conditions.allowedRelations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.allowedRelations)
* <-|[Collection​Rule​Conditions.defaultRelation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.defaultRelation)

### Inputs with this enum

* [Collection​Rule​Input.relation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput#fields-relation)
