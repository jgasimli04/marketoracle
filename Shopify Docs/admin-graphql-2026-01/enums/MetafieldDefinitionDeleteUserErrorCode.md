---
title: MetafieldDefinitionDeleteUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MetafieldDefinitionDeleteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionDeleteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionDeleteUserErrorCode.md
---

# Metafield​Definition​Delete​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldDefinitionDeleteUserError`.

## Valid values

* APP\_​CONFIG\_​MANAGED

  Definition is managed by app configuration and cannot be modified through the API.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* ID\_​TYPE\_​DELETION\_​ERROR

  Deleting an id type metafield definition requires deletion of its associated metafields.

* INTERNAL\_​ERROR

  An internal error occurred.

* METAFIELD\_​DEFINITION\_​IN\_​USE

  Action cannot proceed. Definition is currently in use.

* NOT\_​FOUND

  Definition not found.

* PRESENT

  The input value needs to be blank.

* REFERENCE\_​TYPE\_​DELETION\_​ERROR

  Deleting a reference type metafield definition requires deletion of its associated metafields.

* RESERVED\_​NAMESPACE\_​ORPHANED\_​METAFIELDS

  Deleting a definition in a reserved namespace requires deletion of its associated metafields.

* STANDARD\_​METAFIELD\_​DEFINITION\_​DEPENDENT\_​ON\_​APP

  Definition is required by an installed app and cannot be deleted.

***

## Fields

* [Metafield​Definition​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError#field-MetafieldDefinitionDeleteUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionDelete`.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError#field-MetafieldDefinitionDeleteUserError.fields.code)
