---
title: PublicationOperation - GraphQL Admin
description: The possible types of publication operations.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/PublicationOperation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/PublicationOperation.md
---

# Publication​Operation

union

Requires The user must have `read_products` or `read_publications` access.

The possible types of publication operations.

## Possible types

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

## Fields with this union

* [Publication.operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.operation)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

***

```graphql
union PublicationOperation = AddAllProductsOperation | CatalogCsvOperation | PublicationResourceOperation
```
