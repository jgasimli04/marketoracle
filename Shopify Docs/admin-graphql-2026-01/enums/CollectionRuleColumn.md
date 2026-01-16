---
title: CollectionRuleColumn - GraphQL Admin
description: >-
  Specifies the attribute of a product being used to populate the smart
  collection.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleColumn'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleColumn.md
---

# Collection​Rule​Column

enum

Specifies the attribute of a product being used to populate the smart collection.

## Valid values

* IS\_​PRICE\_​REDUCED

  An attribute evaluated based on the `compare_at_price` attribute of the product's variants. With `is_set` relation, the rule matches products with at least one variant with `compare_at_price` set. With `is_not_set` relation, the rule matches matches products with at least one variant with `compare_at_price` not set.

* PRODUCT\_​CATEGORY\_​ID

  This rule type is designed to dynamically include products in a smart collection based on their category id. When a specific product category is set as a condition, this rule will match products that are directly assigned to the specified category.

* PRODUCT\_​CATEGORY\_​ID\_​WITH\_​DESCENDANTS

  This rule type is designed to dynamically include products in a smart collection based on their category id. When a specific product category is set as a condition, this rule will not only match products that are directly assigned to the specified category but also include any products categorized under any descendant of that category.

* PRODUCT\_​METAFIELD\_​DEFINITION

  This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.

* PRODUCT\_​TAXONOMY\_​NODE\_​ID

  The [`product_taxonomy_node_id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productCategory) attribute.

* TAG

  The [`tag`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.tags) attribute.

* TITLE

  The [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.title) attribute.

* TYPE

  The [`type`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productType) attribute.

* VARIANT\_​COMPARE\_​AT\_​PRICE

  The [`variant_compare_at_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.compareAtPrice) attribute.

* VARIANT\_​INVENTORY

  The [`variant_inventory`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryQuantity) attribute.

* VARIANT\_​METAFIELD\_​DEFINITION

  This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.

* VARIANT\_​PRICE

  The [`variant_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.price) attribute.

* VARIANT\_​TITLE

  The [`variant_title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.title) attribute.

* VARIANT\_​WEIGHT

  The [`variant_weight`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryItem.measurement.weight) attribute.

* VENDOR

  The [`vendor`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.vendor) attribute.

***

## Fields

* [Collection​Rule.column](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.column)

  OBJECT

  Represents at rule that's used to assign products to a collection.

* [Collection​Rule​Conditions.ruleType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.ruleType)

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

* [Collection​Rule​Input.column](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput#fields-column)

  INPUT OBJECT

  The input fields for a rule to associate with a collection.

***

## Map

### Fields with this enum

* <-|[Collection​Rule.column](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.column)
* <-|[Collection​Rule​Conditions.ruleType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.ruleType)

### Inputs with this enum

* [Collection​Rule​Input.column](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput#fields-column)
