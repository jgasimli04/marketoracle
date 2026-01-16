---
title: LocationActivateUserError - GraphQL Admin
description: An error that occurs while activating a location.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError.md
---

# Location​Activate​User​Error

object

Requires `read_locations` access scope.

An error that occurs while activating a location.

## Fields

* code

  [Location​Activate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationActivateUserErrorCode)

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

## <\~> LocationActivateUserError Mutations

### Mutated by

* <\~>[location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-LocationActivateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
