---
title: DelegateAccessTokenCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `DelegateAccessTokenCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DelegateAccessTokenCreateUserErrorCode.md
---

# Delegate​Access​Token​Create​User​Error​Code

enum

Possible error codes that can be returned by `DelegateAccessTokenCreateUserError`.

## Valid values

* DELEGATE\_​ACCESS\_​TOKEN

  The parent access token can't be a delegate token.

* EMPTY\_​ACCESS\_​SCOPE

  The access scope can't be empty.

* EXPIRES\_​AFTER\_​PARENT

  The delegate token can't expire after the parent token.

* NEGATIVE\_​EXPIRES\_​IN

  The expires\_in value must be greater than 0.

* PERSISTENCE\_​FAILED

  Persistence failed.

* REFRESH\_​TOKEN

  The parent access token can't have a refresh token.

* UNKNOWN\_​SCOPES

  Unknown scopes.

***

## Fields

* [Delegate​Access​Token​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError#field-DelegateAccessTokenCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `DelegateAccessTokenCreate`.

***

## Map

### Fields with this enum

* <-|[Delegate​Access​Token​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError#field-DelegateAccessTokenCreateUserError.fields.code)
