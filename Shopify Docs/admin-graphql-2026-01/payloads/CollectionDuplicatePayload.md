---
title: CollectionDuplicatePayload - GraphQL Admin
description: Return type for `collectionDuplicate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionDuplicatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionDuplicatePayload.md
---

# Collection​Duplicate​Payload

payload

Return type for `collectionDuplicate` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The newly created duplicate collection. Will contain all data if duplication completed synchronously. If async processing is required, the collection will be created but products will be added in the background and can be tracked via the job field or the collection's active\_operations field.

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The background job copying manually included products onto the target collection. Only returned if async processing is required, otherwise products will be copied synchronously when the collection is created.

* user​Errors

  [\[Collection​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

  mutation

  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  An existing collection ID and new title are required.

  ## Publication Duplication

  Publications may be excluded by passing `copyPublications: false` in the input.

  ## Metafields

  Metafield values are not duplicated if the unique values capability is enabled.

  * input

    [Collection​Duplicate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput)

    required

    ### Arguments

    The input for duplicating a collection.

  ***

***

## Map

### Mutations with this payload

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionDuplicate)
