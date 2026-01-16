---
title: CarrierServiceDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `CarrierServiceDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceDeleteUserError.md
---

# Carrier​Service​Delete​User​Error

object

An error that occurs during the execution of `CarrierServiceDelete`.

## Fields

* code

  [Carrier​Service​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceDeleteUserErrorCode)

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

* [carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceDelete)

  mutation

  Removes an existing carrier service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the carrier service to delete.

  ***

***

## <\~> CarrierServiceDeleteUserError Mutations

### Mutated by

* <\~>[carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CarrierServiceDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
