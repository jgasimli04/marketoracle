---
title: CollectionReorderProductsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `CollectionReorderProductsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionReorderProductsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionReorderProductsUserErrorCode.md
---

# Collection​Reorder​Products​User​Error​Code

enum

Possible error codes that can be returned by `CollectionReorderProductsUserError`.

## Valid values

* COLLECTION\_​NOT\_​FOUND

  The collection was not found. Please check the collection ID and try again.

* INVALID\_​MOVE

  The move is invalid.

* MANUALLY\_​SORTED\_​COLLECTION

  The collection is not manually sorted. Can't reorder products unless collection is manually sorted.

* TOO\_​MANY\_​ATTEMPTS\_​TO\_​REORDER\_​PRODUCTS

  Products are currently being reordered. Please try again later.

***

## Fields

* [Collection​Reorder​Products​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionReorderProductsUserError#field-CollectionReorderProductsUserError.fields.code)

  OBJECT

  Errors related to order customer removal.

***

## Map

### Fields with this enum

* <-|[Collection​Reorder​Products​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionReorderProductsUserError#field-CollectionReorderProductsUserError.fields.code)
