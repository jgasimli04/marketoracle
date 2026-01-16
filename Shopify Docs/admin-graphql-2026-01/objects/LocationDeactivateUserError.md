---
title: LocationDeactivateUserError - GraphQL Admin
description: >-
  The possible errors that can be returned when executing the
  `locationDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError.md
---

# Location​Deactivate​User​Error

object

Requires `read_locations` access scope.

The possible errors that can be returned when executing the `locationDeactivate` mutation.

## Fields

* code

  [Location​Deactivate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeactivateUserErrorCode)

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

## <\~> LocationDeactivateUserError Mutations

### Mutated by

* <\~>[location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-LocationDeactivateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
