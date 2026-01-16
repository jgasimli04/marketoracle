---
title: CarrierServiceUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `CarrierServiceUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError.md
---

# Carrier​Service​Update​User​Error

object

An error that occurs during the execution of `CarrierServiceUpdate`.

## Fields

* code

  [Carrier​Service​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceUpdateUserErrorCode)

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

* [carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

  mutation

  Updates a carrier service. Only the app that creates a carrier service can update it.

  * input

    [Delivery​Carrier​Service​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

    required

    ### Arguments

    The input fields used to update a carrier service.

  ***

***

## <\~> CarrierServiceUpdateUserError Mutations

### Mutated by

* <\~>[carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CarrierServiceUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
