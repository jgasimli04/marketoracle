---
title: TaxonomyCategoryAttribute - GraphQL Admin
description: A product taxonomy attribute interface.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute.md
---

# Taxonomy​Category​Attribute

union

A product taxonomy attribute interface.

## Possible types

* [Taxonomy​Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyAttribute)

  OBJECT

  A Shopify product taxonomy attribute.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

* [Taxonomy​Choice​List​Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute)

  OBJECT

  A Shopify product taxonomy choice list attribute.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID of the TaxonomyAttribute.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the product taxonomy attribute. For example, Color.

  * values

    [Taxonomy​Value​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection)

    non-null

    A list of values on the choice list attribute.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    ***

* [Taxonomy​Measurement​Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyMeasurementAttribute)

  OBJECT

  A Shopify product taxonomy measurement attribute.

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

## Fields with this union

* [Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

  OBJECT

  A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

  Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

* [Taxonomy​Category​Attribute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple TaxonomyCategoryAttributes.

* [Taxonomy​Category​Attribute​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge#field-TaxonomyCategoryAttributeEdge.fields.node)

  OBJECT

  An auto-generated type which holds one TaxonomyCategoryAttribute and a cursor during pagination.

***

```graphql
union TaxonomyCategoryAttribute = TaxonomyAttribute | TaxonomyChoiceListAttribute | TaxonomyMeasurementAttribute
```
