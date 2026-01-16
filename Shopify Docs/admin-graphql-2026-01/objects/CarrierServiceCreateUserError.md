---
title: CarrierServiceCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `CarrierServiceCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError.md
---

# Carrier​Service​Create​User​Error

object

An error that occurs during the execution of `CarrierServiceCreate`.

## Fields

* code

  [Carrier​Service​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceCreateUserErrorCode)

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

* [carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

  mutation

  Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

  When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

  * input

    [Delivery​Carrier​Service​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

    required

    ### Arguments

    The input fields used to create a carrier service.

  ***

***

## <\~> CarrierServiceCreateUserError Mutations

### Mutated by

* <\~>[carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CarrierServiceCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
