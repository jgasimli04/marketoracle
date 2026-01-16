---
title: TranslationErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `TranslationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslationErrorCode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslationErrorCode.md
---

# Translation​Error​Code

enum

Possible error codes that can be returned by `TranslationUserError`.

## Valid values

* BLANK

  The input value is blank.

* FAILS\_​RESOURCE\_​VALIDATION

  Translation value is invalid.

* INVALID

  The input value is invalid.

* INVALID\_​CODE

  Locale language code is invalid.

* INVALID\_​FORMAT

  Locale code format is invalid.

* INVALID\_​KEY\_​FOR\_​MODEL

  Translation key is invalid.

* INVALID\_​LOCALE\_​FOR\_​SHOP

  Locale is invalid for the shop.

* INVALID\_​MARKET\_​LOCALIZABLE\_​CONTENT

  Market localizable content is invalid.

* INVALID\_​TRANSLATABLE\_​CONTENT

  Translatable content is invalid.

* INVALID\_​VALUE\_​FOR\_​HANDLE\_​TRANSLATION

  The handle is already taken for this resource.

* MARKET\_​CUSTOM\_​CONTENT\_​NOT\_​ALLOWED

  The shop isn't allowed to operate on market custom content.

* MARKET\_​DOES\_​NOT\_​EXIST

  The market corresponding to the `marketId` argument doesn't exist.

* MARKET\_​LOCALE\_​CREATION\_​FAILED

  The market override locale creation failed.

* RESOURCE\_​NOT\_​FOUND

  Resource does not exist.

* RESOURCE\_​NOT\_​MARKET\_​CUSTOMIZABLE

  The specified resource can't be customized for a market.

* RESOURCE\_​NOT\_​TRANSLATABLE

  Resource is not translatable.

* TOO\_​MANY\_​KEYS\_​FOR\_​RESOURCE

  Too many translation keys for the resource.

* INVALID\_​LOCALE\_​FOR\_​MARKET

  Deprecated

***

## Fields

* [Translation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError#field-TranslationUserError.fields.code)

  OBJECT

  Represents an error that happens during the execution of a translation mutation.

***

## Map

### Fields with this enum

* <-|[Translation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError#field-TranslationUserError.fields.code)
