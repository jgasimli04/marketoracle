---
title: ShopPolicyUserError - GraphQL Admin
description: An error that occurs during the execution of a shop policy mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError.md
---

# Shop​Policy​User​Error

object

An error that occurs during the execution of a shop policy mutation.

## Fields

* code

  [Shop​Policy​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyErrorCode)

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

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

  mutation

  Updates a shop policy.

  * shop​Policy

    [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

    required

    ### Arguments

    The properties to use when updating the shop policy.

  ***

***

## <\~> ShopPolicyUserError Mutations

### Mutated by

* <\~>[shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ShopPolicyUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
