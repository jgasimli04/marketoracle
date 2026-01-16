---
title: DelegateAccessTokenDestroyUserError - GraphQL Admin
description: An error that occurs during the execution of `DelegateAccessTokenDestroy`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError.md
---

# Delegate​Access​Token​Destroy​User​Error

object

An error that occurs during the execution of `DelegateAccessTokenDestroy`.

## Fields

* code

  [Delegate​Access​Token​Destroy​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenDestroyUserErrorCode)

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

* [delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

  mutation

  Destroys a delegate access token.

  * access​Token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Provides the delegate access token to destroy.

  ***

***

## <\~> DelegateAccessTokenDestroyUserError Mutations

### Mutated by

* <\~>[delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DelegateAccessTokenDestroyUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
