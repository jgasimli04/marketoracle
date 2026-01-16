---
title: AppRevokeAccessScopesAppRevokeScopeErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `AppRevokeAccessScopesAppRevokeScopeError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevokeAccessScopesAppRevokeScopeErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevokeAccessScopesAppRevokeScopeErrorCode.md
---

# App​Revoke​Access​Scopes​App​Revoke​Scope​Error​Code

enum

Possible error codes that can be returned by `AppRevokeAccessScopesAppRevokeScopeError`.

## Valid values

* APP\_​NOT\_​INSTALLED

  App is not installed on shop.

* APPLICATION\_​CANNOT\_​BE\_​FOUND

  The application cannot be found.

* CANNOT\_​REVOKE\_​IMPLIED\_​SCOPES

  Already granted implied scopes cannot be revoked.

* CANNOT\_​REVOKE\_​REQUIRED\_​SCOPES

  Required scopes cannot be revoked.

* CANNOT\_​REVOKE\_​UNDECLARED\_​SCOPES

  Cannot revoke optional scopes that haven't been declared.

* MISSING\_​SOURCE\_​APP

  No app found on the access token.

* UNKNOWN\_​SCOPES

  The requested list of scopes to revoke includes invalid handles.

***

## Fields

* [App​Revoke​Access​Scopes​App​Revoke​Scope​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError#field-AppRevokeAccessScopesAppRevokeScopeError.fields.code)

  OBJECT

  Represents an error that happens while revoking a granted scope.

***

## Map

### Fields with this enum

* <-|[App​Revoke​Access​Scopes​App​Revoke​Scope​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError#field-AppRevokeAccessScopesAppRevokeScopeError.fields.code)
