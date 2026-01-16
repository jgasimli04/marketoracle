---
title: EventBridgeServerPixelUpdatePayload - GraphQL Admin
description: Return type for `eventBridgeServerPixelUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeServerPixelUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeServerPixelUpdatePayload.md
---

# Event​Bridge​Server​Pixel​Update​Payload

payload

Return type for `eventBridgeServerPixelUpdate` mutation.

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

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

  mutation

  Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    required

    ### Arguments

    The ARN for the EventBridge endpoint to which customer events are to be sent.

  ***

***

## Map

### Mutations with this payload

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/eventBridgeServerPixelUpdate)
