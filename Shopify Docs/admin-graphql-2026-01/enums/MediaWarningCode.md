---
title: MediaWarningCode - GraphQL Admin
description: Warning types for media.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaWarningCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaWarningCode.md'
---

# Media​Warning​Code

enum

Warning types for media.

## Valid values

* MODEL\_​LARGE\_​PHYSICAL\_​SIZE

  3D model physical size might be invalid. The dimensions of your model are very large. Consider reviewing your model to ensure they are correct.

* MODEL\_​PREVIEW\_​IMAGE\_​FAIL

  The thumbnail failed to regenerate.Try applying the changes again to regenerate the thumbnail.

* MODEL\_​SMALL\_​PHYSICAL\_​SIZE

  3D model physical size might be invalid. The dimensions of your model are very small. Consider reviewing your model to ensure they are correct.

***

## Fields

* [Media​Warning.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning#field-MediaWarning.fields.code)

  OBJECT

  Represents a media warning. This occurs when there is a non-blocking concern regarding your media. Consider reviewing your media to ensure it is correct and its parameters are as expected.

***

## Map

### Fields with this enum

* <-|[Media​Warning.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning#field-MediaWarning.fields.code)
