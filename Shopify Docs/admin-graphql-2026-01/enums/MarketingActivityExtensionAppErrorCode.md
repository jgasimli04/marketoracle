---
title: MarketingActivityExtensionAppErrorCode - GraphQL Admin
description: The error code resulted from the marketing activity extension integration.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExtensionAppErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExtensionAppErrorCode.md
---

# Marketing​Activity​Extension​App​Error​Code

enum

The error code resulted from the marketing activity extension integration.

## Valid values

* API\_​ERROR

  The app is either not responding or returning unexpected data.

* INSTALL\_​REQUIRED\_​ERROR

  The app needs to be installed.

* NOT\_​ONBOARDED\_​ERROR

  The shop/user must be onboarded to use the app.

* PLATFORM\_​ERROR

  The app has returned an error when invoking the platform.

* VALIDATION\_​ERROR

  The app has returned validation errors.

***

## Fields

* [Marketing​Activity​Extension​App​Errors.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors#field-MarketingActivityExtensionAppErrors.fields.code)

  OBJECT

  Represents errors returned from apps when using the marketing activity extension.

***

## Map

### Fields with this enum

* <-|[Marketing​Activity​Extension​App​Errors.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors#field-MarketingActivityExtensionAppErrors.fields.code)
