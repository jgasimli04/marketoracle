---
title: DelegateAccessTokenCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `DelegateAccessTokenCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError.md
---

# Delegate​Access​Token​Create​User​Error

object

An error that occurs during the execution of `DelegateAccessTokenCreate`.

## Fields

* code

  [Delegate​Access​Token​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenCreateUserErrorCode)

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

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

  mutation

  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

  Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

  Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

  * input

    [Delegate​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

    required

    ### Arguments

    The input fields for creating a delegate access token.

  ***

***

## <\~> DelegateAccessTokenCreateUserError Mutations

### Mutated by

* <\~>[delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DelegateAccessTokenCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
