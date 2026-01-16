---
title: LocationDeactivatePayload - GraphQL Admin
description: Return type for `locationDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationDeactivatePayload.md
---

# Location​Deactivate​Payload

payload

Return type for `locationDeactivate` mutation.

## Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was deactivated.

* location​Deactivate​User​Errors

  [\[Location​Deactivate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

  mutation

  Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

  ***

  Caution

  As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to deactivate.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

  ***

***

## Map

### Mutations with this payload

* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/locationDeactivate)
