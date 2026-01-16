---
title: ProductVariantRelationshipBulkUpdateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `ProductVariantRelationshipBulkUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError.md
---

# Product​Variant​Relationship​Bulk​Update​User​Error

object

An error that occurs during the execution of `ProductVariantRelationshipBulkUpdate`.

## Fields

* code

  [Product​Variant​Relationship​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantRelationshipBulkUpdateUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [product​Variant​Relationship​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)

  mutation

  Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  Each bundle variant can contain up to 30 component variants with specified quantities. After an app assigns components to a bundle, only that app can manage those components.

  ***

  Note

  For most use cases, use [`productBundleCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate) instead, which creates product fixed bundles. `productVariantRelationshipBulkUpdate` is for [variant fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle), where each variant has its own component configuration.

  ***

  * input

    [\[Product​Variant​Relationship​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput)

    required

    ### Arguments

    The input options for the product variant being updated.

  ***

***

## <\~> ProductVariantRelationshipBulkUpdateUserError Mutations

### Mutated by

* <\~>[product​Variant​Relationship​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductVariantRelationshipBulkUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
