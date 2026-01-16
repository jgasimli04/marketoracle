---
title: catalogUpdate - GraphQL Admin
description: >-
  Updates an existing
  [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)
  configuration. Catalogs control product publishing and pricing for specific
  contexts like
  [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or
  B2B [company
  locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).


  You can modify the catalog's title, status, and associated context. You can
  also update the
  [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)
  that determines pricing adjustments or the
  [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
  that controls which products customers see.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate.md'
---

# catalog​Update

mutation

Requires `write_products` access scope. Also: The user must have permission to create and edit catalogs.

Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishing and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

You can modify the catalog's title, status, and associated context. You can also update the [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) that determines pricing adjustments or the [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which products customers see.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the catalog to update.

* input

  [Catalog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput)

  required

  The properties of the updated catalog.

***

## Catalog​Update​Payload returns

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The updated catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### catalogUpdate reference

## Mutation Reference

```graphql
mutation catalogUpdate($id: ID!, $input: CatalogUpdateInput!) {
  catalogUpdate(id: $id, input: $input) {
    catalog {
      # Catalog fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "id": "gid://shopify/<objectName>/10079785100",
  "input": {
    "title": "<your-title>",
    "status": "ACTIVE",
    "context": {
      "marketIds": [
        "gid://shopify/<objectName>/10079785100"
      ],
      "companyLocationIds": [
        "gid://shopify/<objectName>/10079785100"
      ]
    },
    "priceListId": "gid://shopify/<objectName>/10079785100",
    "publicationId": "gid://shopify/<objectName>/10079785100"
  }
}
```

##### Schema

```graphql
input CatalogUpdateInput {
  title: String
  status: CatalogStatus
  context: CatalogContextInput
  priceListId: ID
  publicationId: ID
}

input CatalogContextInput {
  marketIds: [ID!]
  companyLocationIds: [ID!]
}
```
