---
title: LocationAddPayload - GraphQL Admin
description: Return type for `locationAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/LocationAddPayload.md
---

# Location​Add​Payload

payload

Return type for `locationAdd` mutation.

## Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was added.

* user​Errors

  [\[Location​Add​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/locationAdd)
