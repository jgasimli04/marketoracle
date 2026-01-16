---
title: ThemePublishUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ThemePublishUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemePublishUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemePublishUserErrorCode.md
---

# Theme​Publish​User​Error​Code

enum

Possible error codes that can be returned by `ThemePublishUserError`.

## Valid values

* CANNOT\_​PUBLISH\_​THEME\_​DURING\_​INSTALL

  Theme publishing is not available during install.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* THEME\_​PUBLISH\_​NOT\_​AVAILABLE\_​FOR\_​THEME\_​LIMITED\_​PLAN

  Theme publishing is not allowed on this plan.

***

## Fields

* [Theme​Publish​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError#field-ThemePublishUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ThemePublish`.

***

## Map

### Fields with this enum

* <-|[Theme​Publish​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError#field-ThemePublishUserError.fields.code)
