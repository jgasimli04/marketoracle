---
title: MediaUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `MediaUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaUserErrorCode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaUserErrorCode.md
---

# Media​User​Error​Code

enum

Possible error codes that can be returned by `MediaUserError`.

## Valid values

* BLANK

  The input value is blank.

* INVALID

  The input value is invalid.

* INVALID\_​MEDIA\_​TYPE

  Invalid media type.

* MAXIMUM\_​VARIANT\_​MEDIA\_​PAIRS\_​EXCEEDED

  Exceeded the maximum number of 100 variant-media pairs per mutation call.

* MEDIA\_​CANNOT\_​BE\_​MODIFIED

  Media cannot be modified. It is currently being modified by another operation.

* MEDIA\_​DOES\_​NOT\_​EXIST

  Media does not exist.

* MEDIA\_​DOES\_​NOT\_​EXIST\_​ON\_​PRODUCT

  Media does not exist on the given product.

* MEDIA\_​IS\_​NOT\_​ATTACHED\_​TO\_​VARIANT

  The specified media is not attached to the specified variant.

* MISSING\_​ARGUMENTS

  Missing arguments.

* MODEL3D\_​THROTTLE\_​EXCEEDED

  Model3d creation throttle was exceeded.

* MODEL3D\_​VALIDATION\_​ERROR

  Model validation failed.

* NON\_​READY\_​MEDIA

  Non-ready media are not supported.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​MEDIA\_​LIMIT\_​EXCEEDED

  Exceeded the limit of media per product.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* PRODUCT\_​VARIANT\_​ALREADY\_​HAS\_​MEDIA

  Product variant already has attached media.

* PRODUCT\_​VARIANT\_​DOES\_​NOT\_​EXIST\_​ON\_​PRODUCT

  Variant does not exist on the given product.

* PRODUCT\_​VARIANT\_​SPECIFIED\_​MULTIPLE\_​TIMES

  Variant specified in more than one pair.

* SHOP\_​MEDIA\_​LIMIT\_​EXCEEDED

  Exceeded the limit of media per shop.

* TOO\_​MANY\_​MEDIA\_​PER\_​INPUT\_​PAIR

  Only one mediaId is allowed per variant-media input pair.

* VIDEO\_​THROTTLE\_​EXCEEDED

  Video creation throttle was exceeded.

* VIDEO\_​VALIDATION\_​ERROR

  Video validation failed.

***

## Fields

* [Media​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError#field-MediaUserError.fields.code)

  OBJECT

  Represents an error that happens during execution of a Media query or mutation.

***

## Map

### Fields with this enum

* <-|[Media​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError#field-MediaUserError.fields.code)
