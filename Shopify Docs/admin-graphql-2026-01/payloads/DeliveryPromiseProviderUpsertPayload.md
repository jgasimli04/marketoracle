---
title: DeliveryPromiseProviderUpsertPayload - GraphQL Admin
description: Return type for `deliveryPromiseProviderUpsert` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryPromiseProviderUpsertPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliveryPromiseProviderUpsertPayload.md
---

# Delivery​Promise​Provider​Upsert​Payload

payload

Return type for `deliveryPromiseProviderUpsert` mutation.

## Fields

* delivery​Promise​Provider

  [Delivery​Promise​Provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider)

  The created or updated delivery promise provider.

* user​Errors

  [\[Delivery​Promise​Provider​Upsert​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProviderUpsertUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

  mutation

  Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Whether the delivery promise provider is active. Defaults to `true` when creating a provider.

  * fulfillment​Delay

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.

  * time​Zone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises. Defaults to `UTC` when creating a provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location that will be associated with the delivery promise provider.

  ***

***

## Map

### Mutations with this payload

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/types/deliveryPromiseProviderUpsert)
