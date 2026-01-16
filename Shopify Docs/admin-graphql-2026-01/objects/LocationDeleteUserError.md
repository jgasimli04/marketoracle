---
title: LocationDeleteUserError - GraphQL Admin
description: An error that occurs while deleting a location.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError.md
---

# Location​Delete​User​Error

object

Requires `read_locations` access scope.

An error that occurs while deleting a location.

## Fields

* code

  [Location​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationDeleteUserErrorCode)

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

## <\~> LocationDeleteUserError Mutations

### Mutated by

* <\~>[location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-LocationDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
