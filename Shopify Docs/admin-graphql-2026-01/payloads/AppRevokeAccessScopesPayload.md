---
title: AppRevokeAccessScopesPayload - GraphQL Admin
description: Return type for `appRevokeAccessScopes` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppRevokeAccessScopesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppRevokeAccessScopesPayload.md
---

# App​Revoke​Access​Scopes​Payload

payload

Return type for `appRevokeAccessScopes` mutation.

## Fields

* revoked

  [\[Access​Scope!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  The list of scope handles that have been revoked.

* user​Errors

  [\[App​Revoke​Access​Scopes​App​Revoke​Scope​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

  mutation

  Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling it. This provides granular control over what data and functionality apps can access.

  For example, if a merchant no longer wants an app to access customer information but still wants to use its inventory features, they can revoke the customer-related scopes while keeping inventory permissions active.

  Use the `appRevokeAccessScopes` mutation to:

  * Remove specific permissions from installed apps
  * Maintain app functionality while minimizing data exposure

  The mutation returns details about which scopes were successfully revoked and any errors that prevented certain permissions from being removed.

  Learn more about [managing app permissions](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#revoke-granted-scopes-dynamically).

  * scopes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The list of scope handles to revoke.

  ***

***

## Map

### Mutations with this payload

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/types/appRevokeAccessScopes)
