---
title: LocationLocalPickupDisablePayload - GraphQL Admin
description: Return type for `locationLocalPickupDisable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationLocalPickupDisablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationLocalPickupDisablePayload.md
---

# Location​Local​Pickup​Disable​Payload

payload

Return type for `locationLocalPickupDisable` mutation.

## Fields

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location for which local pickup was disabled.

* user​Errors

  [\[Delivery​Location​Local​Pickup​Settings​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupDisable)

  mutation

  Disables local pickup for a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to disable local pickup for.

  ***

***

## Map

### Mutations with this payload

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/types/locationLocalPickupDisable)
