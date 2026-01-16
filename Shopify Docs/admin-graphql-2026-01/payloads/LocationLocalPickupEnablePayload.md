---
title: LocationLocalPickupEnablePayload - GraphQL Admin
description: Return type for `locationLocalPickupEnable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationLocalPickupEnablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationLocalPickupEnablePayload.md
---

# Location​Local​Pickup​Enable​Payload

payload

Return type for `locationLocalPickupEnable` mutation.

## Fields

* local​Pickup​Settings

  [Delivery​Local​Pickup​Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings)

  The local pickup settings that were enabled.

* user​Errors

  [\[Delivery​Location​Local​Pickup​Settings​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)

  mutation

  Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checkout and optional instructions for finding or accessing the pickup location.

  * local​Pickup​Settings

    [Delivery​Location​Local​Pickup​Enable​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput)

    required

    ### Arguments

    The settings required to enable local pickup for a location.

  ***

***

## Map

### Mutations with this payload

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/types/locationLocalPickupEnable)
