---
title: DeliveryCustomizationError - GraphQL Admin
description: >-
  An error that occurs during the execution of a delivery customization
  mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError.md
---

# Delivery​Customization​Error

object

Requires `read_delivery_customizations` access scope.

An error that occurs during the execution of a delivery customization mutation.

## Fields

* code

  [Delivery​Customization​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryCustomizationErrorCode)

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

* [delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation)

  mutation

  Activates and deactivates delivery customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the delivery customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the delivery customizations.

  ***

* [delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)

  mutation

  Creates a delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    ### Arguments

    The input data used to create the delivery customization.

  ***

* [delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete)

  mutation

  Creates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  ***

* [delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

  mutation

  Updates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    The input data used to update the delivery customization.

  ***

***

## <\~> DeliveryCustomizationError Mutations

### Mutated by

* <\~>[delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation)
* <\~>[delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)
* <\~>[delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete)
* <\~>[delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DeliveryCustomizationError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
