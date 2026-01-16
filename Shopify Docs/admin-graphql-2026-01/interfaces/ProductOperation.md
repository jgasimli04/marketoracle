---
title: ProductOperation - GraphQL Admin
description: >-
  An interface representing asynchronous operations on products. Tracks the
  status and details of background product mutations like `productSet`,
  `productDelete`, `productDuplicate`, and `productBundle` operations. Provides
  status field (CREATED, ACTIVE, COMPLETE) and product field to monitor
  long-running product operations.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation.md
---

# Product​Operation

interface

Requires `read_products` access scope.

An interface representing asynchronous operations on products. Tracks the status and details of background product mutations like `productSet`, `productDelete`, `productDuplicate`, and `productBundle` operations. Provides status field (CREATED, ACTIVE, COMPLETE) and product field to monitor long-running product operations.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which the operation is being performed.

* status

  [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

  non-null

  The status of this operation.

***

## Types implemented in

* [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  OBJECT

  An entity that represents details of an asynchronous [ProductBundleCreate](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productBundleCreate) or [ProductBundleUpdate](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productBundleUpdate) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/productOperation) query using the ID that was returned when the bundle was created or updated, this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the created or updated product.

  The `userErrors` field provides mutation errors that occurred during the operation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product on which the operation is being performed.

  * status

    [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

    non-null

    The status of this operation.

  * user​Errors

    [\[Product​Bundle​Mutation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleMutationUserError)

    non-null

    Returns mutation errors occurred during background mutation processing.

* [Product​Delete​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation)

  OBJECT

  An entity that represents details of an asynchronous [ProductDelete](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productDelete) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/productOperation) query using the ID that was returned when the product was deleted, this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `deletedProductId` field provides the ID of the deleted product.

  The `userErrors` field provides mutation errors that occurred during the operation.

  * deleted​Product​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the deleted product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product on which the operation is being performed.

  * status

    [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

    non-null

    The status of this operation.

  * user​Errors

    [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

    non-null

    Returns mutation errors occurred during background mutation processing.

* [Product​Duplicate​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation)

  OBJECT

  An entity that represents details of an asynchronous [ProductDuplicate](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productDuplicate) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/productOperation) query using the ID that was returned [when the product was duplicated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the original product.

  The `newProduct` field provides the details of the new duplicate of the product.

  The `userErrors` field provides mutation errors that occurred during the operation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * new​Product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The newly created duplicate of the original product.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product on which the operation is being performed.

  * status

    [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

    non-null

    The status of this operation.

  * user​Errors

    [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

    non-null

    Returns mutation errors occurred during background mutation processing.

* [Product​Set​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

  OBJECT

  An entity that represents details of an asynchronous [ProductSet](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/productSet) mutation.

  By querying this entity with the [productOperation](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/productOperation) query using the ID that was returned [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously), this can be used to check the status of an operation.

  The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

  The `product` field provides the details of the created or updated product.

  The `userErrors` field provides mutation errors that occurred during the operation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product on which the operation is being performed.

  * status

    [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

    non-null

    The status of this operation.

  * user​Errors

    [\[Product​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

    non-null

    Returns mutation errors occurred during background mutation processing.

***

##### Variables

```json
{
	"product": "",
	"status": ""
}
```

##### Schema

```graphql
interface ProductOperation {
  product: Product
  status: ProductOperationStatus!
}
```
