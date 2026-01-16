---
title: QuantityPricingByVariantUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `QuantityPricingByVariantUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPricingByVariantUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPricingByVariantUserErrorCode.md
---

# Quantity​Pricing​By​Variant​User​Error​Code

enum

Possible error codes that can be returned by `QuantityPricingByVariantUserError`.

## Valid values

* BLANK

  The input value is blank.

* GENERIC\_​ERROR

  Something went wrong when trying to update quantity pricing. Please try again later.

* PRICE\_​ADD\_​CURRENCY\_​MISMATCH

  Price list and fixed price currency mismatch.

* PRICE\_​ADD\_​DUPLICATE\_​INPUT\_​FOR\_​VARIANT

  Prices to add inputs must be unique by variant id.

* PRICE\_​ADD\_​VARIANT\_​NOT\_​FOUND

  Fixed price's variant not found.

* PRICE\_​DELETE\_​PRICE\_​NOT\_​FIXED

  Price is not fixed.

* PRICE\_​DELETE\_​VARIANT\_​NOT\_​FOUND

  Fixed price's variant not found.

* PRICE\_​LIST\_​NOT\_​FOUND

  Price List does not exist.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​CURRENCY\_​MISMATCH

  Price list and quantity price break currency mismatch.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​DUPLICATE\_​INPUT\_​FOR\_​VARIANT\_​AND\_​MIN

  Quantity price breaks to add inputs must be unique by variant id and minimum quantity.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​FAILED\_​TO\_​SAVE

  Failed to save quantity price break.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​INVALID

  Invalid quantity price break.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​LIMIT\_​EXCEEDED

  Exceeded the allowed number of quantity price breaks per variant.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​MIN\_​HIGHER\_​THAN\_​QUANTITY\_​RULES\_​MAX

  Quantity price break miniumum is higher than the quantity rule maximum.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​MIN\_​LOWER\_​THAN\_​QUANTITY\_​RULES\_​MIN

  Quantity price break miniumum is less than the quantity rule minimum.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​MIN\_​NOT\_​A\_​MULTIPLE\_​OF\_​QUANTITY\_​RULES\_​INCREMENT

  Quantity price break miniumum is not multiple of the quantity rule increment.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​PRICE\_​LIST\_​PRICE\_​NOT\_​FOUND

  Quantity price break's fixed price not found.

* QUANTITY\_​PRICE\_​BREAK\_​ADD\_​VARIANT\_​NOT\_​FOUND

  Quantity price break variant not found.

* QUANTITY\_​PRICE\_​BREAK\_​DELETE\_​BY\_​VARIANT\_​ID\_​VARIANT\_​NOT\_​FOUND

  Variant to delete by is not found.

* QUANTITY\_​PRICE\_​BREAK\_​DELETE\_​FAILED

  Failed to delete quantity price break.

* QUANTITY\_​PRICE\_​BREAK\_​DELETE\_​NOT\_​FOUND

  Quantity price break not found.

* QUANTITY\_​RULE\_​ADD\_​CATALOG\_​CONTEXT\_​NOT\_​SUPPORTED

  Quantity rule catalog context not supported.

* QUANTITY\_​RULE\_​ADD\_​DUPLICATE\_​INPUT\_​FOR\_​VARIANT

  Quantity rules to add inputs must be unique by variant id.

* QUANTITY\_​RULE\_​ADD\_​INCREMENT\_​IS\_​GREATER\_​THAN\_​MINIMUM

  Quantity rule increment is greater than minimum.

* QUANTITY\_​RULE\_​ADD\_​INCREMENT\_​IS\_​LESS\_​THAN\_​ONE

  Quantity rule increment is less than one.

* QUANTITY\_​RULE\_​ADD\_​INCREMENT\_​NOT\_​A\_​MULTIPLE\_​OF\_​QUANTITY\_​PRICE\_​BREAK\_​MIN

  Quantity rule increment must be a multiple of the quantity price break minimum.

* QUANTITY\_​RULE\_​ADD\_​MAX\_​LOWER\_​THAN\_​QUANTITY\_​PRICE\_​BREAK\_​MIN

  Quantity rule maximum is less than the quantity price break minimum.

* QUANTITY\_​RULE\_​ADD\_​MAXIMUM\_​IS\_​LESS\_​THAN\_​ONE

  Quantity rule maximum is less than one.

* QUANTITY\_​RULE\_​ADD\_​MAXIMUM\_​NOT\_​A\_​MULTIPLE\_​OF\_​INCREMENT

  Quantity rule maximum is not a multiple of increment.

* QUANTITY\_​RULE\_​ADD\_​MIN\_​HIGHER\_​THAN\_​QUANTITY\_​PRICE\_​BREAK\_​MIN

  Quantity rule minimum is higher than the quantity price break minimum.

* QUANTITY\_​RULE\_​ADD\_​MINIMUM\_​GREATER\_​THAN\_​MAXIMUM

  Quantity rule minimum is greater than maximum.

* QUANTITY\_​RULE\_​ADD\_​MINIMUM\_​IS\_​LESS\_​THAN\_​ONE

  Quantity rule minimum is less than one.

* QUANTITY\_​RULE\_​ADD\_​MINIMUM\_​NOT\_​A\_​MULTIPLE\_​OF\_​INCREMENT

  Quantity rule minimum is not a multiple of increment.

* QUANTITY\_​RULE\_​ADD\_​VARIANT\_​NOT\_​FOUND

  Quantity rule variant not found.

* QUANTITY\_​RULE\_​DELETE\_​RULE\_​NOT\_​FOUND

  Quantity rule not found.

* QUANTITY\_​RULE\_​DELETE\_​VARIANT\_​NOT\_​FOUND

  Quantity rule variant not found.

***

## Fields

* [Quantity​Pricing​By​Variant​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError#field-QuantityPricingByVariantUserError.fields.code)

  OBJECT

  Error codes for failed volume pricing operations.

***

## Map

### Fields with this enum

* <-|[Quantity​Pricing​By​Variant​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError#field-QuantityPricingByVariantUserError.fields.code)
