---
title: ResourceOperation - GraphQL Admin
description: Represents a merchandising background operation interface.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation.md
---

# Resource​Operation

interface

Requires `read_products` access scope or `read_publications` access scope.

Represents a merchandising background operation interface.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* processed​Row​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The count of processed rows, summing imported, failed, and skipped rows.

* row​Count

  [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

  Represents a rows objects within this background operation.

* status

  [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

  non-null

  The status of this operation.

***

## Types implemented in

* [Add​All​Products​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation)

  OBJECT

  Represents an operation publishing all products to a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * processed​Row​Count

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The count of processed rows, summing imported, failed, and skipped rows.

  * row​Count

    [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

    Represents a rows objects within this background operation.

  * status

    [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

    non-null

    The status of this operation.

* [Catalog​Csv​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogCsvOperation)

  OBJECT

  A catalog csv operation represents a CSV file import.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * processed​Row​Count

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The count of processed rows, summing imported, failed, and skipped rows.

  * row​Count

    [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

    Represents a rows objects within this background operation.

  * status

    [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

    non-null

    The status of this operation.

* [Publication​Resource​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation)

  OBJECT

  A bulk update operation on a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * processed​Row​Count

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The count of processed rows, summing imported, failed, and skipped rows.

  * row​Count

    [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

    Represents a rows objects within this background operation.

  * status

    [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

    non-null

    The status of this operation.

***

##### Variables

```json
{
	"id": "",
	"processedRowCount": "",
	"rowCount": "",
	"status": ""
}
```

##### Schema

```graphql
interface ResourceOperation {
  id: ID!
  processedRowCount: Int
  rowCount: RowCount
  status: ResourceOperationStatus!
}
```
