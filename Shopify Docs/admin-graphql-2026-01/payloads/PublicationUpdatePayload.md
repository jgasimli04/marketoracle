---
title: PublicationUpdatePayload - GraphQL Admin
description: Return type for `publicationUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationUpdatePayload.md
---

# Publication​Update​Payload

payload

Return type for `publicationUpdate` mutation.

## Fields

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  The publication that's been updated.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [publication​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/publicationUpdate)
