---
title: SellingPlanGroupUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `SellingPlanGroupUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupUserErrorCode.md
---

# Selling​Plan​Group​User​Error​Code

enum

Possible error codes that can be returned by `SellingPlanGroupUserError`.

## Valid values

* BILLING\_​AND\_​DELIVERY\_​POLICY\_​TYPES\_​MUST\_​BE\_​THE\_​SAME

  Billing and delivery policy types must be the same.

* BILLING\_​POLICY\_​INTERVAL\_​TOO\_​LARGE

  Billing policy's interval is too large.

* BLANK

  The input value is blank.

* CHECKOUT\_​CHARGE\_​VALUE\_​AND\_​TYPE\_​MUST\_​MATCH

  A fixed billing policy's checkout charge value and type must match.

* DELIVERY\_​POLICY\_​INTERVAL\_​TOO\_​LARGE

  Delivery policy's interval is too large.

* EQUAL\_​TO

  The input value should be equal to the value allowed.

* ERROR\_​ADDING\_​RESOURCE\_​TO\_​GROUP

  Could not add the resource to the selling plan group.

* FULFILLMENT\_​EXACT\_​TIME\_​NOT\_​ALLOWED

  A fixed billing policy's fulfillment\_exact\_time must not be present when the fulfillment\_trigger isn't EXACT\_TIME.

* FULFILLMENT\_​EXACT\_​TIME\_​REQUIRED

  A fixed billing policy's fulfillment\_exact\_time can't be blank when the fulfillment\_trigger is EXACT\_TIME.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be greater than or equal to the minimum value allowed.

* GROUP\_​COULD\_​NOT\_​BE\_​DELETED

  Selling plan group could not be deleted.

* GROUP\_​DOES\_​NOT\_​EXIST

  Selling plan group does not exist.

* INCLUSION

  The input value isn't included in the list.

* INVALID

  The input value is invalid.

* INVALID\_​INPUT

  The input submitted is invalid.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* NOT\_​A\_​NUMBER

  The input value is not a number.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* ONLY\_​NEED\_​ONE\_​BILLING\_​POLICY\_​TYPE

  Only one billing policy type can be defined.

* ONLY\_​NEED\_​ONE\_​CHECKOUT\_​CHARGE\_​VALUE

  A fixed billing policy's checkout charge can have at most one value.

* ONLY\_​NEED\_​ONE\_​DELIVERY\_​POLICY\_​TYPE

  Only one delivery policy type can be defined.

* ONLY\_​NEED\_​ONE\_​PRICING\_​POLICY\_​TYPE

  Only one pricing policy type can be defined.

* ONLY\_​NEED\_​ONE\_​PRICING\_​POLICY\_​VALUE

  Only one pricing policy adjustment value type can be defined.

* ONLY\_​ONE\_​OF\_​FIXED\_​OR\_​RECURRING\_​BILLING

  A selling plan can't have both fixed and recurring billing policies.

* ONLY\_​ONE\_​OF\_​FIXED\_​OR\_​RECURRING\_​DELIVERY

  A selling plan can't have both fixed and recurring delivery policies.

* PLAN\_​DOES\_​NOT\_​EXIST

  Selling plan does not exist.

* PLAN\_​ID\_​MUST\_​BE\_​SPECIFIED\_​TO\_​UPDATE

  Selling plan ID must be specified to update.

* PRESENT

  The input value needs to be blank.

* PRICING\_​POLICY\_​ADJUSTMENT\_​VALUE\_​AND\_​TYPE\_​MUST\_​MATCH

  Pricing policy's adjustment value and adjustment type must match.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​VARIANT\_​DOES\_​NOT\_​EXIST

  Product variant does not exist.

* REMAINING\_​BALANCE\_​CHARGE\_​EXACT\_​TIME\_​NOT\_​ALLOWED

  A fixed billing policy's remaining\_balance\_charge\_exact\_time must not be present when the remaining\_balance\_charge\_trigger isn't EXACT\_TIME.

* REMAINING\_​BALANCE\_​CHARGE\_​EXACT\_​TIME\_​REQUIRED

  A fixed billing policy's remaining\_balance\_charge\_exact\_time can't be blank when the remaining\_balance\_charge\_trigger is EXACT\_TIME.

* REMAINING\_​BALANCE\_​CHARGE\_​TIME\_​AFTER\_​CHECKOUT\_​MUST\_​BE\_​GREATER\_​THAN\_​ZERO

  A fixed billing policy's remaining\_balance\_charge\_time\_after\_checkout must be present and greater than zero when the remaining\_balance\_charge\_trigger is TIME\_AFTER\_CHECKOUT.

* REMAINING\_​BALANCE\_​CHARGE\_​TRIGGER\_​NO\_​REMAINING\_​BALANCE\_​ON\_​PARTIAL\_​PERCENTAGE\_​CHECKOUT\_​CHARGE

  A fixed billing policy's remaining\_balance\_charge\_trigger can't be NO\_REMAINING\_BALANCE when the checkout\_charge\_type is PERCENTAGE and checkout\_charge\_value is less than 100.

* REMAINING\_​BALANCE\_​CHARGE\_​TRIGGER\_​NO\_​REMAINING\_​BALANCE\_​ON\_​PRICE\_​CHECKOUT\_​CHARGE

  A fixed billing policy's remaining\_balance\_charge\_trigger can't be NO\_REMAINING\_BALANCE when the checkout\_charge\_type is PRICE.

* REMAINING\_​BALANCE\_​CHARGE\_​TRIGGER\_​ON\_​FULL\_​CHECKOUT

  A fixed billing policy's remaining\_balance\_charge\_trigger must be NO\_REMAINING\_BALANCE when the checkout\_charge\_type is PERCENTAGE and checkout\_charge\_value is 100.

* RESOURCE\_​LIST\_​CONTAINS\_​INVALID\_​IDS

  The selling plan list provided contains 1 or more invalid IDs.

* SELLING\_​PLAN\_​ANCHORS\_​NOT\_​ALLOWED

  A fixed delivery policy's anchors must not be present when the fulfillment\_trigger isn't ANCHOR.

* SELLING\_​PLAN\_​ANCHORS\_​REQUIRED

  A fixed delivery policy's anchors must be present when the fulfillment\_trigger is ANCHOR.

* SELLING\_​PLAN\_​BILLING\_​AND\_​DELIVERY\_​POLICY\_​ANCHORS\_​MUST\_​BE\_​EQUAL

  Selling plan's billing and delivery policies anchors must be equal.

* SELLING\_​PLAN\_​BILLING\_​CYCLE\_​MUST\_​BE\_​A\_​MULTIPLE\_​OF\_​DELIVERY\_​CYCLE

  Selling plan's billing cycle must be a multiple of delivery cycle.

* SELLING\_​PLAN\_​BILLING\_​POLICY\_​MISSING

  Missing billing policy.

* SELLING\_​PLAN\_​COUNT\_​LOWER\_​BOUND

  Must include at least one selling plan.

* SELLING\_​PLAN\_​COUNT\_​UPPER\_​BOUND

  Exceeded the selling plan limit (31).

* SELLING\_​PLAN\_​DELIVERY\_​POLICY\_​MISSING

  Missing delivery policy.

* SELLING\_​PLAN\_​DUPLICATE\_​NAME

  Cannot have multiple selling plans with the same name.

* SELLING\_​PLAN\_​DUPLICATE\_​OPTIONS

  Cannot have multiple selling plans with the same options.

* SELLING\_​PLAN\_​FIXED\_​PRICING\_​POLICIES\_​LIMIT

  A fixed selling plan can have at most one pricing policy.

* SELLING\_​PLAN\_​MAX\_​CYCLES\_​MUST\_​BE\_​GREATER\_​THAN\_​MIN\_​CYCLES

  Selling plan's billing policy max cycles must be greater than min cycles.

* SELLING\_​PLAN\_​MISSING\_​OPTION2\_​LABEL\_​ON\_​PARENT\_​GROUP

  Cannot define option2 on this selling plan as there's no label on the parent selling plan group.

* SELLING\_​PLAN\_​MISSING\_​OPTION3\_​LABEL\_​ON\_​PARENT\_​GROUP

  Cannot define option3 on this selling plan as there's no label on the parent selling plan group.

* SELLING\_​PLAN\_​OPTION2\_​REQUIRED\_​AS\_​DEFINED\_​ON\_​PARENT\_​GROUP

  Selling plan's option2 is required because option2 exists.

* SELLING\_​PLAN\_​OPTION3\_​REQUIRED\_​AS\_​DEFINED\_​ON\_​PARENT\_​GROUP

  Selling plan's option3 is required because option3 exists.

* SELLING\_​PLAN\_​PRICING\_​POLICIES\_​LIMIT

  Selling plans can't have more than 2 pricing policies.

* SELLING\_​PLAN\_​PRICING\_​POLICIES\_​MUST\_​CONTAIN\_​A\_​FIXED\_​PRICING\_​POLICY

  Selling plan's pricing policies must contain one fixed pricing policy.

* TAKEN

  The input value is already taken.

* TOO\_​BIG

  The input value is too big.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* WRONG\_​LENGTH

  The input value is the wrong length.

***

## Fields

* [Selling​Plan​Group​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError#field-SellingPlanGroupUserError.fields.code)

  OBJECT

  Represents a selling plan group custom error.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Group​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError#field-SellingPlanGroupUserError.fields.code)
