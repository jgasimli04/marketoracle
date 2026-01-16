---
title: LocationActivatePayload - GraphQL Admin
description: Return type for `locationActivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationActivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationActivatePayload.md
---

# Location​Activate​Payload

payload

Return type for `locationActivate` mutation.

## Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was activated.

* location​Activate​User​Errors

  [\[Location​Activate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

  mutation

  Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to activate.

  ***

***

## Map

### Mutations with this payload

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/types/locationActivate)
