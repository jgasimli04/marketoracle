---
title: DeliveryPromiseProviderUpsertUserError - GraphQL Admin
description: An error that occurs during the execution of `DeliveryPromiseProviderUpsert`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProviderUpsertUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProviderUpsertUserError.md
---

# Delivery​Promise​Provider​Upsert​User​Error

object

An error that occurs during the execution of `DeliveryPromiseProviderUpsert`.

## Fields

* code

  [Delivery​Promise​Provider​Upsert​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryPromiseProviderUpsertUserErrorCode)

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

## <\~> DeliveryPromiseProviderUpsertUserError Mutations

### Mutated by

* <\~>[delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DeliveryPromiseProviderUpsertUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
