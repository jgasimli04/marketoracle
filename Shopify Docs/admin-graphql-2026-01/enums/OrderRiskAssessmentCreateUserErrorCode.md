---
title: OrderRiskAssessmentCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `OrderRiskAssessmentCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskAssessmentCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskAssessmentCreateUserErrorCode.md
---

# Order​Risk​Assessment​Create​User​Error​Code

enum

Possible error codes that can be returned by `OrderRiskAssessmentCreateUserError`.

## Valid values

* INVALID

  The input value is invalid.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* ORDER\_​ALREADY\_​FULFILLED

  The order is marked as fulfilled and can no longer accept new risk assessments.

* TOO\_​MANY\_​FACTS

  Too many facts were provided for the risk assessment.

***

## Fields

* [Order​Risk​Assessment​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError#field-OrderRiskAssessmentCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `OrderRiskAssessmentCreate`.

***

## Map

### Fields with this enum

* <-|[Order​Risk​Assessment​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError#field-OrderRiskAssessmentCreateUserError.fields.code)
