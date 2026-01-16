---
title: MobilePlatformApplicationUserError - GraphQL Admin
description: >-
  An error in the input of a mutation. Mutations return `UserError` objects to
  indicate validation failures, such as invalid field values or business logic
  violations, that prevent the operation from completing.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError.md
---

# Mobile​Platform​Application​User​Error

object

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

## Fields

* code

  [Mobile​Platform​Application​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MobilePlatformApplicationUserErrorCode)

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

* [mobile​Platform​Application​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate)

  mutation

  Create a mobile platform application.

  * input

    [Mobile​Platform​Application​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput)

    required

    ### Arguments

    The input to create a mobile platform application.

  ***

* [mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete)

  mutation

  Delete a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be deleted.

  ***

* [mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate)

  mutation

  Update a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be updated.

  * input

    [Mobile​Platform​Application​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationUpdateInput)

    required

    The input to updat a Mobile Platform Application.

  ***

***

## <\~> MobilePlatformApplicationUserError Mutations

### Mutated by

* <\~>[mobile​Platform​Application​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate)
* <\~>[mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete)
* <\~>[mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MobilePlatformApplicationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
