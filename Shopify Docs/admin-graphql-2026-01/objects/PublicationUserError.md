---
title: PublicationUserError - GraphQL Admin
description: Defines errors encountered while managing a publication.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError.md
---

# Publication​User​Error

object

Defines errors encountered while managing a publication.

## Fields

* code

  [Publication​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PublicationUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationDelete)

  mutation

  Deletes a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to delete.

  ***

* [publication​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

  mutation

  Updates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  You can add or remove [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) from the publication, with a maximum of 50 items per operation. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate#arguments-input.fields.autoPublish) field determines whether new products automatically display in this publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to update.

  * input

    [Publication​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput)

    required

    The input fields to use when updating the publication.

  ***

***

## <\~> PublicationUserError Mutations

### Mutated by

* <\~>[publication​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)
* <\~>[publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationDelete)
* <\~>[publication​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PublicationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
