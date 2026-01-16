---
title: PubSubServerPixelUpdatePayload - GraphQL Admin
description: Return type for `pubSubServerPixelUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubServerPixelUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubServerPixelUpdatePayload.md
---

# Pub​Sub​Server​Pixel​Update​Payload

payload

Return type for `pubSubServerPixelUpdate` mutation.

## Fields

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The server pixel as configured by the mutation.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)

  mutation

  Updates the server pixel to connect to a Google PubSub endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * pub​Sub​Project

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The Google PubSub project ID.

  * pub​Sub​Topic

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Google PubSub topic ID.

  ***

***

## Map

### Mutations with this payload

* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/pubSubServerPixelUpdate)
