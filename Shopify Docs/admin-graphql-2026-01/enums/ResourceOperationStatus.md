---
title: ResourceOperationStatus - GraphQL Admin
description: Represents the state of this catalog operation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus.md
---

# Resource​Operation​Status

enum

Represents the state of this catalog operation.

## Valid values

* ACTIVE

  Operation is currently running.

* COMPLETE

  Operation is complete.

* CREATED

  Operation has been created.

***

## Fields

* [Add​All​Products​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation#field-AddAllProductsOperation.fields.status)

  OBJECT

  Represents an operation publishing all products to a publication.

* [Catalog​Csv​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogCsvOperation#field-CatalogCsvOperation.fields.status)

  OBJECT

  A catalog csv operation represents a CSV file import.

* [Publication​Resource​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation#field-PublicationResourceOperation.fields.status)

  OBJECT

  A bulk update operation on a publication.

* [Resource​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation#fields-status)

  INTERFACE

  Represents a merchandising background operation interface.

***

## Map

### Fields with this enum

* <-|[Add​All​Products​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation#field-AddAllProductsOperation.fields.status)
* <-|[Catalog​Csv​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogCsvOperation#field-CatalogCsvOperation.fields.status)
* <-|[Publication​Resource​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationResourceOperation#field-PublicationResourceOperation.fields.status)
