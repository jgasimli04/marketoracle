---
title: ValidationUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ValidationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationUserErrorCode.md
---

# Validation​User​Error​Code

enum

Possible error codes that can be returned by `ValidationUserError`.

## Valid values

* APP\_​NOT\_​AUTHORIZED

  ApiPermission metafields can only be created or updated by the app owner.

* BLANK

  The input value is blank.

* CAPABILITY\_​VIOLATION

  The metafield violates a capability restriction.

* CUSTOM\_​APP\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop must be on a Shopify Plus plan to activate functions from a custom app.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* FUNCTION\_​DOES\_​NOT\_​IMPLEMENT

  Function does not implement the required interface for this cart & checkout validation.

* FUNCTION\_​NOT\_​FOUND

  Function not found.

* FUNCTION\_​PENDING\_​DELETION

  Function is pending deletion.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​TYPE

  The type is invalid.

* INVALID\_​VALUE

  The value is invalid for the metafield type or for the definition options.

* MAX\_​VALIDATIONS\_​ACTIVATED

  Cannot have more than 25 active validation functions.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function\_id or function\_handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function\_id or function\_handle can be provided, not both.

* NOT\_​FOUND

  Validation not found.

* PRESENT

  The input value needs to be blank.

* PUBLIC\_​APP\_​NOT\_​ALLOWED

  Only unlisted apps can be used for this cart & checkout validation.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNSTRUCTURED\_​RESERVED\_​NAMESPACE

  Unstructured reserved namespace.

***

## Fields

* [Validation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError#field-ValidationUserError.fields.code)

  OBJECT

  An error that occurs during the execution of a validation mutation.

***

## Map

### Fields with this enum

* <-|[Validation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError#field-ValidationUserError.fields.code)
