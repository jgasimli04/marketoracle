---
title: CollectionDuplicateOperationRole - GraphQL Admin
description: The role a collection plays in a duplication operation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionDuplicateOperationRole
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionDuplicateOperationRole.md
---

# Collection​Duplicate​Operation​Role

enum

The role a collection plays in a duplication operation.

## Valid values

* SOURCE

  Products are being duplicated from this collection.

* TARGET

  Products are being duplicated onto this collection.

***

## Fields

* [Collection​Duplicate​Operation.collectionRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateOperation#field-CollectionDuplicateOperation.fields.collectionRole)

  OBJECT

  Represents an in-progress collection duplication operation. Collection duplication is a synchronous operation for simple collections, and an asynchronous operation for collections containing too many products to process synchronously.

***

## Map

### Fields with this enum

* <-|[Collection​Duplicate​Operation.collectionRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateOperation#field-CollectionDuplicateOperation.fields.collectionRole)
