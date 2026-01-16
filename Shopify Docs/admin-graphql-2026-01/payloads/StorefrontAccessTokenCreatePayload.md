---
title: StorefrontAccessTokenCreatePayload - GraphQL Admin
description: Return type for `storefrontAccessTokenCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StorefrontAccessTokenCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StorefrontAccessTokenCreatePayload.md
---

# Storefront​Access​Token​Create​Payload

payload

Return type for `storefrontAccessTokenCreate` mutation.

## Fields

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* storefront​Access​Token

  [Storefront​Access​Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

  The storefront access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

  mutation

  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

  Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

  Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

  * input

    [Storefront​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

    required

    ### Arguments

    Provides the input fields for creating a storefront access token.

  ***

***

## Map

### Mutations with this payload

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/storefrontAccessTokenCreate)
