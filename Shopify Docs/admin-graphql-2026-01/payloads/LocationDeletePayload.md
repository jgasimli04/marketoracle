---
title: LocationDeletePayload - GraphQL Admin
description: Return type for `locationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationDeletePayload.md
---

# Location​Delete​Payload

payload

Return type for `locationDelete` mutation.

## Fields

* deleted​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location that was deleted.

* location​Delete​User​Errors

  [\[Location​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete)

  mutation

  Deletes a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to delete.

  ***

***

## Map

### Mutations with this payload

* [location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/locationDelete)
