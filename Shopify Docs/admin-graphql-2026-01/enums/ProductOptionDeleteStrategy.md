---
title: ProductOptionDeleteStrategy - GraphQL Admin
description: The set of strategies available for use on the `productOptionDelete` mutation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy.md
---

# Product​Option​Delete​Strategy

enum

Requires `read_products` access scope.

The set of strategies available for use on the `productOptionDelete` mutation.

## Valid values

* DEFAULT

  The default strategy, the specified `Option` may only have one corresponding `value`.

* NON\_​DESTRUCTIVE

  An `Option` with multiple `values` can be deleted, but the operation only succeeds if no product variants get deleted.

* POSITION

  An `Option` with multiple `values` can be deleted. Remaining variants will be deleted, highest `position` first, in the event of duplicates being detected.

***

## Fields

* [product​Options​Delete.strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete#arguments-strategy)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[product​Options​Delete.strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete#arguments-strategy)
