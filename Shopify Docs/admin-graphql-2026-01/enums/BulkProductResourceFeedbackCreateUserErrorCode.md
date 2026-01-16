---
title: BulkProductResourceFeedbackCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `BulkProductResourceFeedbackCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkProductResourceFeedbackCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkProductResourceFeedbackCreateUserErrorCode.md
---

# Bulk​Product​Resource​Feedback​Create​User​Error​Code

enum

Possible error codes that can be returned by `BulkProductResourceFeedbackCreateUserError`.

## Valid values

* BLANK

  The input value is blank.

* INVALID

  The input value is invalid.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* MAXIMUM\_​FEEDBACK\_​LIMIT\_​EXCEEDED

  The operation was attempted on too many feedback objects. The maximum number of feedback objects that you can operate on is 50.

* OUTDATED\_​FEEDBACK

  The feedback for a later version of this resource was already accepted.

* PRESENT

  The input value needs to be blank.

* PRODUCT\_​NOT\_​FOUND

  The product wasn't found or isn't available to the channel.

***

## Fields

* [Bulk​Product​Resource​Feedback​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError#field-BulkProductResourceFeedbackCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `BulkProductResourceFeedbackCreate`.

***

## Map

### Fields with this enum

* <-|[Bulk​Product​Resource​Feedback​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError#field-BulkProductResourceFeedbackCreateUserError.fields.code)
