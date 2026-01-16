---
title: PublicationDeletePayload - GraphQL Admin
description: Return type for `publicationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublicationDeletePayload.md
---

# Publication​Delete​Payload

payload

Return type for `publicationDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the publication that was deleted.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationDelete)

  mutation

  Deletes a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to delete.

  ***

***

## Map

### Mutations with this payload

* [publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/publicationDelete)
