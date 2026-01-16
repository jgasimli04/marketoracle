---
title: LocationAddUserError - GraphQL Admin
description: An error that occurs while adding a location.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError.md
---

# Location​Add​User​Error

object

Requires `read_locations` access scope.

An error that occurs while adding a location.

## Fields

* code

  [Location​Add​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationAddUserErrorCode)

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

* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

  mutation

  Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Locations represent physical places like warehouses, retail stores, or fulfillment centers.

  The location requires a name and address with at least a country code. You can specify whether the location fulfills online orders, which determines if its inventory is available for online sales. You can also attach custom [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional information about the location.

  * input

    [Location​Add​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput)

    required

    ### Arguments

    The properties of the location to add.

  ***

***

## <\~> LocationAddUserError Mutations

### Mutated by

* <\~>[location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-LocationAddUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
