---
title: MetafieldsSetUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldsSet`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError.md
---

# Metafields​Set​User​Error

object

An error that occurs during the execution of `MetafieldsSet`.

## Fields

* code

  [Metafields​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The index of the array element that's causing the error.

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

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

## <\~> MetafieldsSetUserError Mutations

### Mutated by

* <\~>[metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldsSetUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
