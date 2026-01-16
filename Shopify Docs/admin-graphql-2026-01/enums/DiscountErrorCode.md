---
title: DiscountErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `DiscountUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountErrorCode.md'
---

# Discount​Error​Code

enum

Possible error codes that can be returned by `DiscountUserError`.

## Valid values

* ACTIVE\_​PERIOD\_​OVERLAP

  The active period overlaps with other automatic discounts. At any given time, only 25 automatic discounts can be active.

* APPLIES\_​ON\_​NOTHING

  A discount cannot have both appliesOnOneTimePurchase and appliesOnSubscription set to false.

* BLANK

  The input value is blank.

* CONFLICT

  The attribute selection contains conflicting settings.

* DUPLICATE

  The input value is already present.

* END\_​DATE\_​BEFORE\_​START\_​DATE

  The end date should be after the start date.

* EQUAL\_​TO

  The input value should be equal to the value allowed.

* EXCEEDED\_​MAX

  The value exceeded the maximum allowed value.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be greater than or equal to the minimum value allowed.

* IMPLICIT\_​DUPLICATE

  The value is already present through another selection.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* INVALID\_​COMBINES\_​WITH\_​FOR\_​DISCOUNT\_​CLASS

  The `combinesWith` settings are invalid for the discount class.

* INVALID\_​DISCOUNT\_​CLASS\_​FOR\_​PRICE\_​RULE

  The discountClass is invalid for the price rule.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* MAX\_​APP\_​DISCOUNTS

  The active period overlaps with too many other app-provided discounts. There's a limit on the number of app discounts that can be active at any given time.

* MINIMUM\_​SUBTOTAL\_​AND\_​QUANTITY\_​RANGE\_​BOTH\_​PRESENT

  Specify a minimum subtotal or a quantity, but not both.

* MISSING\_​ARGUMENT

  Missing a required argument.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function ID or function handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function ID or function handle is allowed.

* MULTIPLE\_​RECURRING\_​CYCLE\_​LIMIT\_​FOR\_​NON\_​SUBSCRIPTION\_​ITEMS

  Recurring cycle limit must be 1 when discount does not apply to subscription items.

* PRESENT

  The input value needs to be blank.

* RECURRING\_​CYCLE\_​LIMIT\_​NOT\_​A\_​VALID\_​INTEGER

  Recurring cycle limit must be a valid integer greater than or equal to 0.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​MANY\_​ARGUMENTS

  Too many arguments provided.

* TOO\_​SHORT

  The input value is too short.

* VALUE\_​OUTSIDE\_​RANGE

  The value is outside of the allowed range.

***

## Fields

* [Discount​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError#field-DiscountUserError.fields.code)

  OBJECT

  An error that occurs during the execution of a discount mutation.

***

## Map

### Fields with this enum

* <-|[Discount​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError#field-DiscountUserError.fields.code)
