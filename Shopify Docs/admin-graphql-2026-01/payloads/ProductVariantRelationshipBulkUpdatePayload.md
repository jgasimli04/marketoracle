---
title: ProductVariantRelationshipBulkUpdatePayload - GraphQL Admin
description: Return type for `productVariantRelationshipBulkUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantRelationshipBulkUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantRelationshipBulkUpdatePayload.md
---

# Product​Variant​Relationship​Bulk​Update​Payload

payload

Return type for `productVariantRelationshipBulkUpdate` mutation.

## Fields

* parent​Product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants with successfully updated product variant relationships.

* user​Errors

  [\[Product​Variant​Relationship​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [product​Variant​Relationship​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantRelationshipBulkUpdate)
