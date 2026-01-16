---
title: publicationCreate - GraphQL Admin
description: >-
  Creates a
  [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
  that controls which
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  and
  [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
  customers can access through a
  [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).


  You can create an empty publication and add products later, or prepopulate it
  with all existing products. The
  [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish)
  field determines whether the publication automatically adds newly created
  products.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate.md
---

# publication​Create

mutation

Requires `write_publications` access scope. Also: The user must have a permission to create and edit catalogs.

Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) customers can access through a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).

You can create an empty publication and add products later, or prepopulate it with all existing products. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish) field determines whether the publication automatically adds newly created products.

## Arguments

* input

  [Publication​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput)

  required

  The input fields to use when creating the publication.

***

## Publication​Create​Payload returns

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  The publication that's been created.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### publicationCreate reference

## Mutation Reference

```graphql
mutation publicationCreate($input: PublicationCreateInput!) {
  publicationCreate(input: $input) {
    publication {
      # Publication fields
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
  "input": {
    "catalogId": "gid://shopify/<objectName>/10079785100",
    "defaultState": "EMPTY",
    "autoPublish": true
  }
}
```

##### Schema

```graphql
input PublicationCreateInput {
  catalogId: ID
  defaultState: PublicationCreateInputPublicationDefaultState
  autoPublish: Boolean
}
```
