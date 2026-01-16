---
title: UniqueMetafieldValueInput - GraphQL Admin
description: The input fields that identify a unique valued metafield.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UniqueMetafieldValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UniqueMetafieldValueInput.md
---

# Unique​Metafield​Value​Input

input\_object

The input fields that identify a unique valued metafield.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key for the metafield.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

* value

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value of the metafield.

***

## Input objects using this input

* [Collection​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a collection.

* [Customer​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a customer.

* [Customer​Set​Identifiers.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetIdentifiers#fields-customId)

  INPUT OBJECT

  The input fields required to identify a customer.

* [Location​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a location.

* [Order​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a order.

* [Product​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a product.

* [Product​Set​Identifiers.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers#fields-customId)

  INPUT OBJECT

  The input fields required to identify a resource.

* [Product​Variant​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantIdentifierInput#fields-customId)

  INPUT OBJECT

  The input fields for identifying a product variant.

***

## Map

### Input objects using this input

* [Collection​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput#fields-customId)
* [Customer​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerIdentifierInput#fields-customId)
* [Customer​Set​Identifiers.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetIdentifiers#fields-customId)
* [Location​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationIdentifierInput#fields-customId)
* [Order​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderIdentifierInput#fields-customId)
* [Product​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput#fields-customId)
* [Product​Set​Identifiers.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers#fields-customId)
* [Product​Variant​Identifier​Input.customId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantIdentifierInput#fields-customId)
