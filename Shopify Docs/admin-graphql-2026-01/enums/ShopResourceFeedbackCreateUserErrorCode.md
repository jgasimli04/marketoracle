---
title: ShopResourceFeedbackCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ShopResourceFeedbackCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopResourceFeedbackCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopResourceFeedbackCreateUserErrorCode.md
---

# Shop​Resource​Feedback​Create​User​Error​Code

enum

Possible error codes that can be returned by `ShopResourceFeedbackCreateUserError`.

## Valid values

* BLANK

  The input value is blank.

* FEEDBACK\_​DATE\_​IN\_​FUTURE

  The feedback date cannot be set in the future.

* INVALID

  The input value is invalid.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* OUTDATED\_​FEEDBACK

  The feedback for a later version of the resource was already accepted.

* PRESENT

  The input value needs to be blank.

***

## Fields

* [Shop​Resource​Feedback​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError#field-ShopResourceFeedbackCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ShopResourceFeedbackCreate`.

***

## Map

### Fields with this enum

* <-|[Shop​Resource​Feedback​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError#field-ShopResourceFeedbackCreateUserError.fields.code)
