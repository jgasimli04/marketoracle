---
title: FulfillmentConstraintRuleCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `FulfillmentConstraintRuleCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentConstraintRuleCreateUserErrorCode.md
---

# Fulfillment​Constraint​Rule​Create​User​Error​Code

enum

Possible error codes that can be returned by `FulfillmentConstraintRuleCreateUserError`.

## Valid values

* CUSTOM\_​APP\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop must be on a Shopify Plus plan to activate functions from a custom app.

* FUNCTION\_​ALREADY\_​REGISTERED

  A fulfillment constraint rule already exists for the provided function\_id.

* FUNCTION\_​DOES\_​NOT\_​IMPLEMENT

  Function does not implement the required interface for this fulfillment constraint rule.

* FUNCTION\_​NOT\_​FOUND

  No Shopify Function found for provided function\_id.

* FUNCTION\_​PENDING\_​DELETION

  Function is pending deletion and cannot have new rules created against it.

* INPUT\_​INVALID

  Failed to create fulfillment constraint rule due to invalid input.

* MAXIMUM\_​FULFILLMENT\_​CONSTRAINT\_​RULES\_​REACHED

  Maximum number of fulfillment constraint rules reached. Limit is 10.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function\_id or function\_handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function\_id or function\_handle can be provided, not both.

***

## Fields

* [Fulfillment​Constraint​Rule​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError#field-FulfillmentConstraintRuleCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `FulfillmentConstraintRuleCreate`.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Constraint​Rule​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError#field-FulfillmentConstraintRuleCreateUserError.fields.code)
