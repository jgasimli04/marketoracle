---
title: ThemeCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `ThemeCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError.md
---

# Theme​Create​User​Error

object

An error that occurs during the execution of `ThemeCreate`.

## Fields

* code

  [Theme​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeCreateUserErrorCode)

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

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

  mutation

  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

  New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

  * source

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the theme to be created.

  * role

    [Theme​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    Default:UNPUBLISHED

    The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

  ***

***

## <\~> ThemeCreateUserError Mutations

### Mutated by

* <\~>[theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ThemeCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
