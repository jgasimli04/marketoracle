---
title: CollectionRuleInput - GraphQL Admin
description: The input fields for a rule to associate with a collection.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput.md
---

# Collection​Rule​Input

input\_object

The input fields for a rule to associate with a collection.

## Fields

* column

  [Collection​Rule​Column!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleColumn)

  non-null

  The attribute that the rule focuses on. For example, `title` or `product_type`.

* condition

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value that the operator is applied to. For example, `Hats`.

* condition​Object​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The object ID that points to additional attributes for the collection rule. This is only required when using metafield definition rules.

* relation

  [Collection​Rule​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation)

  non-null

  The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.

***

## Input objects using this input

* [Collection​Rule​Set​Input.rules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput#fields-rules)

  INPUT OBJECT

  The input fields for a rule set of the collection.

***

## Map

### Input objects using this input

* [Collection​Rule​Set​Input.rules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput#fields-rules)
