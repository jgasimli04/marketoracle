---
title: ArticleUpdateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ArticleUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleUpdateUserErrorCode.md
---

# Article​Update​User​Error​Code

enum

Possible error codes that can be returned by `ArticleUpdateUserError`.

## Valid values

* AMBIGUOUS\_​AUTHOR

  Can't update an article author if both author name and user ID are supplied.

* AMBIGUOUS\_​BLOG

  Can't create a blog from input if a blog ID is supplied.

* AUTHOR\_​MUST\_​EXIST

  User must exist if a user ID is supplied.

* BLANK

  The input value is blank.

* INVALID

  The input value is invalid.

* INVALID\_​PUBLISH\_​DATE

  Can’t set isPublished to true and also set a future publish date.

* INVALID\_​TYPE

  The metafield type is invalid.

* INVALID\_​VALUE

  The value is invalid for the metafield type or for the definition options.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* UPLOAD\_​FAILED

  Image upload failed.

***

## Fields

* [Article​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError#field-ArticleUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ArticleUpdate`.

***

## Map

### Fields with this enum

* <-|[Article​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError#field-ArticleUpdateUserError.fields.code)
