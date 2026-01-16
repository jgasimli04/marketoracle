---
title: ProductVariantsBulkCreateStrategy - GraphQL Admin
description: >-
  The set of strategies available for use on the `productVariantsBulkCreate`
  mutation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy.md
---

# Product​Variants​Bulk​Create​Strategy

enum

The set of strategies available for use on the `productVariantsBulkCreate` mutation.

## Valid values

* DEFAULT

  The default strategy. Deletes the standalone default ("Default Title") variant when it's the only variant on the product. Preserves the standalone custom variant.

* PRESERVE\_​STANDALONE\_​VARIANT

  Preserves the existing standalone variant when the product has only a single default ("Default Title") or a single custom variant.

* REMOVE\_​STANDALONE\_​VARIANT

  Deletes the existing standalone variant when the product has only a single default ("Default Title") or custom variant.

***

## Fields

* [product​Variants​Bulk​Create.strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate#arguments-strategy)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[product​Variants​Bulk​Create.strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate#arguments-strategy)
