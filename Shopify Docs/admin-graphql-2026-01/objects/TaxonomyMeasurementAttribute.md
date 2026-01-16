---
title: TaxonomyMeasurementAttribute - GraphQL Admin
description: A Shopify product taxonomy measurement attribute.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyMeasurementAttribute
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyMeasurementAttribute.md
---

# Taxonomy​Measurement​Attribute

object

A Shopify product taxonomy measurement attribute.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID of the TaxonomyAttribute.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product taxonomy attribute. For example, Color.

* options

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  The product taxonomy attribute options.

***

## Map

### Possible type in

* [Taxonomy​Category​Attribute](https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ||-TaxonomyMeasurementAttribute Implements

### Implements

* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
