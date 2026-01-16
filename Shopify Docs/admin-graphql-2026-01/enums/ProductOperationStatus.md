---
title: ProductOperationStatus - GraphQL Admin
description: Represents the state of this product operation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus.md
---

# Product​Operation​Status

enum

Represents the state of this product operation.

## Valid values

* ACTIVE

  Operation is currently running.

* COMPLETE

  Operation is complete.

* CREATED

  Operation has been created.

***

## Fields

* [Product​Bundle​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation#field-ProductBundleOperation.fields.status)

  OBJECT

  An entity that represents details of an asynchronous [ProductBundleCreate](https://shopify.dev/api/admin-graphql/current/mutations/productBundleCreate) or [ProductBundleUpdate](https://shopify.dev/api/admin-graphql/current/mutations/productBundleUpdate) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query using the ID that was returned when the bundle was created or updated, this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the created or updated product.

  The `userErrors` field provides mutation errors that occurred during the operation.

* [Product​Delete​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation#field-ProductDeleteOperation.fields.status)

  OBJECT

  An entity that represents details of an asynchronous [ProductDelete](https://shopify.dev/api/admin-graphql/current/mutations/productDelete) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query using the ID that was returned when the product was deleted, this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `deletedProductId` field provides the ID of the deleted product.

  The `userErrors` field provides mutation errors that occurred during the operation.

* [Product​Duplicate​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation#field-ProductDuplicateOperation.fields.status)

  OBJECT

  An entity that represents details of an asynchronous [ProductDuplicate](https://shopify.dev/api/admin-graphql/current/mutations/productDuplicate) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query using the ID that was returned [when the product was duplicated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the original product.

  The `newProduct` field provides the details of the new duplicate of the product.

  The `userErrors` field provides mutation errors that occurred during the operation.

* [Product​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation#fields-status)

  INTERFACE

  An interface representing asynchronous operations on products. Tracks the status and details of background product mutations like `productSet`, `productDelete`, `productDuplicate`, and `productBundle` operations. Provides status field (CREATED, ACTIVE, COMPLETE) and product field to monitor long-running product operations.

* [Product​Set​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation#field-ProductSetOperation.fields.status)

  OBJECT

  An entity that represents details of an asynchronous [ProductSet](https://shopify.dev/api/admin-graphql/current/mutations/productSet) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query using the ID that was returned [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the created or updated product.

  The `userErrors` field provides mutation errors that occurred during the operation.

***

## Map

### Fields with this enum

* <-|[Product​Bundle​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation#field-ProductBundleOperation.fields.status)
* <-|[Product​Delete​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation#field-ProductDeleteOperation.fields.status)
* <-|[Product​Duplicate​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation#field-ProductDuplicateOperation.fields.status)
* <-|[Product​Set​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation#field-ProductSetOperation.fields.status)
