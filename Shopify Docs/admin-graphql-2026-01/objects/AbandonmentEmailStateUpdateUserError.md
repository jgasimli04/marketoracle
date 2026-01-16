---
title: AbandonmentEmailStateUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `AbandonmentEmailStateUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError.md
---

# Abandonment​Email​State​Update​User​Error

object

An error that occurs during the execution of `AbandonmentEmailStateUpdate`.

## Fields

* code

  [Abandonment​Email​State​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailStateUpdateUserErrorCode)

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

* [abandonment​Email​State​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * email​State

    [Abandonment​Email​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState)

    required

    The new email state of the abandonment.

  * email​Sent​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time for when the email was sent, if that is the case.

  * email​State​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the email was or was not sent.

  ***

***

## <\~> AbandonmentEmailStateUpdateUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-AbandonmentEmailStateUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
