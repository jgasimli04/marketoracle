---
title: CollectionRuleSetInput - GraphQL Admin
description: The input fields for a rule set of the collection.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput.md
---

# Collection​Rule​Set​Input

input\_object

The input fields for a rule set of the collection.

## Fields

* applied​Disjunctively

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether products must match any or all of the rules to be included in the collection. If true, then products must match at least one of the rules to be included in the collection. If false, then products must match all of the rules to be included in the collection.

* rules

  [\[Collection​Rule​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput)

  The rules used to assign products to the collection.

***

## Input objects using this input

* [Collection​Input.ruleSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-ruleSet)

  INPUT OBJECT

  The input fields required to create a collection.

***

## Map

### Input objects using this input

* [Collection​Input.ruleSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-ruleSet)
