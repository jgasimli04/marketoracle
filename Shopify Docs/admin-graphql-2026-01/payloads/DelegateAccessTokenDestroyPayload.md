---
title: DelegateAccessTokenDestroyPayload - GraphQL Admin
description: Return type for `delegateAccessTokenDestroy` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DelegateAccessTokenDestroyPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DelegateAccessTokenDestroyPayload.md
---

# Delegate​Access​Token​Destroy​Payload

payload

Return type for `delegateAccessTokenDestroy` mutation.

## Fields

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* status

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The status of the delegate access token destroy operation. Returns true if successful.

* user​Errors

  [\[Delegate​Access​Token​Destroy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

  mutation

  Destroys a delegate access token.

  * access​Token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Provides the delegate access token to destroy.

  ***

***

## Map

### Mutations with this payload

* [delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/types/delegateAccessTokenDestroy)
