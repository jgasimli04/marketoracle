---
title: ThemeCreateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ThemeCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeCreateUserErrorCode.md
---

# Theme​Create​User​Error​Code

enum

Possible error codes that can be returned by `ThemeCreateUserError`.

## Valid values

* INVALID\_​THEME\_​ROLE\_​FOR\_​THEME\_​CREATION

  Invalid theme role for theme creation.

* INVALID\_​ZIP

  Must be a zip file.

* THEME\_​CREATION\_​NOT\_​ALLOWED\_​FOR\_​THEME\_​LIMITED\_​PLAN

  Theme creation is not allowed for your shop's plan.

* ZIP\_​IS\_​EMPTY

  Zip is empty.

* ZIP\_​TOO\_​LARGE

  May not be used to fetch a file bigger than 50MB.

***

## Fields

* [Theme​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError#field-ThemeCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ThemeCreate`.

***

## Map

### Fields with this enum

* <-|[Theme​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError#field-ThemeCreateUserError.fields.code)
