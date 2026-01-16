---
title: PublicationCreatePayload - GraphQL Admin
description: Return type for `publicationCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationCreatePayload.md
---

# Publication​Create​Payload

payload

Return type for `publicationCreate` mutation.

## Fields

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  The publication that's been created.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [publication​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)

  mutation

  Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) customers can access through a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).

  You can create an empty publication and add products later, or prepopulate it with all existing products. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish) field determines whether the publication automatically adds newly created products.

  * input

    [Publication​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput)

    required

    ### Arguments

    The input fields to use when creating the publication.

  ***

***

## Map

### Mutations with this payload

* [publication​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/publicationCreate)
