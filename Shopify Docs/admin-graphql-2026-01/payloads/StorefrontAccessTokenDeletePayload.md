---
title: StorefrontAccessTokenDeletePayload - GraphQL Admin
description: Return type for `storefrontAccessTokenDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StorefrontAccessTokenDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StorefrontAccessTokenDeletePayload.md
---

# Storefront​Access​Token​Delete​Payload

payload

Return type for `storefrontAccessTokenDelete` mutation.

## Fields

* deleted​Storefront​Access​Token​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted storefront access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [storefront​Access​Token​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete)

  mutation

  Deletes a storefront access token.

  * input

    [Storefront​Access​Token​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

    required

    ### Arguments

    Provides the input fields required to delete a storefront access token.

  ***

***

## Map

### Mutations with this payload

* [storefront​Access​Token​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/storefrontAccessTokenDelete)
