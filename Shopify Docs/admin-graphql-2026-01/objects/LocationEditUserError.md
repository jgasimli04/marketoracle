---
title: LocationEditUserError - GraphQL Admin
description: An error that occurs while editing a location.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError.md
---

# Location​Edit​User​Error

object

Requires `read_locations` access scope or `read_fulfillments` access scope.

An error that occurs while editing a location.

## Fields

* code

  [Location​Edit​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationEditUserErrorCode)

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

* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

  mutation

  Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's name, address, whether it fulfills online orders, and custom [`metafields`](https://shopify.dev/docs/apps/build/custom-data).

  Apps that created a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can edit the associated location to ensure accurate representation of their fulfillment network.

  ***

  Note

  You can't disable the [`fulfillsOnlineOrders`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit#arguments-input.fields.fulfillsOnlineOrders) setting for fulfillment service locations.

  ***

  Learn more about [editing locations for fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to edit.

  * input

    [Location​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput)

    required

    The updated properties for the location.

  ***

***

## <\~> LocationEditUserError Mutations

### Mutated by

* <\~>[location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-LocationEditUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
