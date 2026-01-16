---
title: CustomerSegmentMembersQueryUserError - GraphQL Admin
description: Represents a customer segment members query custom error.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQueryUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQueryUserError.md
---

# Customer​Segment​Members​Query​User​Error

object

Requires `read_customers` access scope.

Represents a customer segment members query custom error.

## Fields

* code

  [Customer​Segment​Members​Query​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSegmentMembersQueryUserErrorCode)

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

* [customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

  mutation

  Creates a customer segment members query.

  * input

    [Customer​Segment​Members​Query​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput)

    required

    ### Arguments

    The input fields to create a customer segment members query.

  ***

***

## <\~> CustomerSegmentMembersQueryUserError Mutations

### Mutated by

* <\~>[customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerSegmentMembersQueryUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
