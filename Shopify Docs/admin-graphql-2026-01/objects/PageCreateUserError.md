---
title: PageCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `PageCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError.md
---

# Page​Create​User​Error

object

An error that occurs during the execution of `PageCreate`.

## Fields

* code

  [Page​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageCreateUserErrorCode)

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

* [page​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

  mutation

  Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

  Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

  The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

  * page

    [Page​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput)

    required

    ### Arguments

    The properties of the new page.

  ***

***

## <\~> PageCreateUserError Mutations

### Mutated by

* <\~>[page​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PageCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
