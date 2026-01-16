---
title: ErrorsServerPixelUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ErrorsServerPixelUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsServerPixelUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ErrorsServerPixelUserErrorCode.md
---

# Errors​Server​Pixel​User​Error​Code

enum

Possible error codes that can be returned by `ErrorsServerPixelUserError`.

## Valid values

* ALREADY\_​EXISTS

  A server pixel already exists for this app and shop. Only one server pixel can exist for any app and shop combination.

* NEEDS\_​CONFIGURATION\_​TO\_​CONNECT

  Server Pixel must be configured with a valid AWS Event Bridge or GCP pub/sub endpoint address to be connected.

* NOT\_​FOUND

  A server pixel doesn't exist for this app and shop.

* PUB\_​SUB\_​ERROR

  PubSubProject and PubSubTopic values resulted in an address that is not a valid GCP pub/sub format.Address format should be pubsub://project:topic.

***

## Fields

* [Errors​Server​Pixel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError#field-ErrorsServerPixelUserError.fields.code)

  OBJECT

  An error that occurs during the execution of a server pixel mutation.

***

## Map

### Fields with this enum

* <-|[Errors​Server​Pixel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError#field-ErrorsServerPixelUserError.fields.code)
