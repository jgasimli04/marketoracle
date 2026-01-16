---
title: LocationEditPayload - GraphQL Admin
description: Return type for `locationEdit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationEditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationEditPayload.md
---

# Location​Edit​Payload

payload

Return type for `locationEdit` mutation.

## Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was edited.

* user​Errors

  [\[Location​Edit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/types/locationEdit)
