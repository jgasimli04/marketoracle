---
title: PaymentCustomizationError - GraphQL Admin
description: An error that occurs during the execution of a payment customization mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError.md
---

# Payment​Customization​Error

object

Requires `read_payment_customizations` access scope.

An error that occurs during the execution of a payment customization mutation.

## Fields

* code

  [Payment​Customization​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentCustomizationErrorCode)

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

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)

  mutation

  Activates and deactivates payment customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the payment customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the payment customizations.

  ***

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)

  mutation

  Creates a payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    ### Arguments

    The input data used to create the payment customization.

  ***

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)

  mutation

  Deletes a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  ***

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

  mutation

  Updates a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    The input data used to update the payment customization.

  ***

***

## <\~> PaymentCustomizationError Mutations

### Mutated by

* <\~>[payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)
* <\~>[payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)
* <\~>[payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)
* <\~>[payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PaymentCustomizationError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
