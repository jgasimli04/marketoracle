---
title: DelegateAccessTokenCreatePayload - GraphQL Admin
description: Return type for `delegateAccessTokenCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DelegateAccessTokenCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DelegateAccessTokenCreatePayload.md
---

# Delegate​Access​Token​Create​Payload

payload

Return type for `delegateAccessTokenCreate` mutation.

## Fields

* delegate​Access​Token

  [Delegate​Access​Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken)

  The delegate access token.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[Delegate​Access​Token​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

  mutation

  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

  Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

  Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

  * input

    [Delegate​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

    required

    ### Arguments

    The input fields for creating a delegate access token.

  ***

***

## Map

### Mutations with this payload

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/delegateAccessTokenCreate)
