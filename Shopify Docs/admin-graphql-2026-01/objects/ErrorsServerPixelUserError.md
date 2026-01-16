---
title: ErrorsServerPixelUserError - GraphQL Admin
description: An error that occurs during the execution of a server pixel mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError.md
---

# Errors​Server​Pixel​User​Error

object

Requires `read_pixels` access scope. Also: The app must have the read\_server\_pixels access scope.

An error that occurs during the execution of a server pixel mutation.

## Fields

* code

  [Errors​Server​Pixel​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsServerPixelUserErrorCode)

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

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

  mutation

  Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    required

    ### Arguments

    The ARN for the EventBridge endpoint to which customer events are to be sent.

  ***

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

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

  mutation

  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

* [server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelDelete)

  mutation

  Deletes the Server Pixel associated with the current app & shop.

***

## <\~> ErrorsServerPixelUserError Mutations

### Mutated by

* <\~>[event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)
* <\~>[pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)
* <\~>[server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)
* <\~>[server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ErrorsServerPixelUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
