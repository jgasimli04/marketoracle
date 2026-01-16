---
title: QuantityRuleUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `QuantityRuleUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleUserErrorCode.md
---

# Quantity​Rule​User​Error​Code

enum

Possible error codes that can be returned by `QuantityRuleUserError`.

## Valid values

* BLANK

  The input value is blank.

* CATALOG\_​CONTEXT\_​DOES\_​NOT\_​SUPPORT\_​QUANTITY\_​RULES

  Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.

* DUPLICATE\_​INPUT\_​FOR\_​VARIANT

  Quantity rule inputs must be unique by variant id.

* GENERIC\_​ERROR

  Something went wrong when trying to save the quantity rule. Please try again later.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  Value must be greater than or equal to 1.

* INCREMENT\_​IS\_​GREATER\_​THAN\_​MINIMUM

  Increment must be lower than or equal to the minimum.

* INCREMENT\_​NOT\_​A\_​MULTIPLE\_​OF\_​QUANTITY\_​PRICE\_​BREAK\_​MINIMUM

  Increment must be a multiple of all quantity price break minimums associated with this variant in the specified price list.

* MAXIMUM\_​IS\_​LOWER\_​THAN\_​QUANTITY\_​PRICE\_​BREAK\_​MINIMUM

  Maximum must be greater than or equal to all quantity price break minimums associated with this variant in the specified price list.

* MAXIMUM\_​NOT\_​MULTIPLE\_​OF\_​INCREMENT

  The maximum must be a multiple of the increment.

* MINIMUM\_​IS\_​GREATER\_​THAN\_​MAXIMUM

  Minimum must be lower than or equal to the maximum.

* MINIMUM\_​IS\_​HIGHER\_​THAN\_​QUANTITY\_​PRICE\_​BREAK\_​MINIMUM

  Minimum must be less than or equal to all quantity price break minimums associated with this variant in the specified price list.

* MINIMUM\_​NOT\_​MULTIPLE\_​OF\_​INCREMENT

  The minimum must be a multiple of the increment.

* PRICE\_​LIST\_​DOES\_​NOT\_​EXIST

  Price list does not exist.

* PRODUCT\_​VARIANT\_​DOES\_​NOT\_​EXIST

  Product variant ID does not exist.

* VARIANT\_​QUANTITY\_​RULE\_​DOES\_​NOT\_​EXIST

  Quantity rule for variant associated with the price list provided does not exist.

***

## Fields

* [Quantity​Rule​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError#field-QuantityRuleUserError.fields.code)

  OBJECT

  An error for a failed quantity rule operation.

***

## Map

### Fields with this enum

* <-|[Quantity​Rule​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError#field-QuantityRuleUserError.fields.code)
