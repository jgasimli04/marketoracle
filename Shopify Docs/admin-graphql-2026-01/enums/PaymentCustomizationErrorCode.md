---
title: PaymentCustomizationErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PaymentCustomizationError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentCustomizationErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentCustomizationErrorCode.md
---

# Payment​Customization​Error​Code

enum

Possible error codes that can be returned by `PaymentCustomizationError`.

## Valid values

* CUSTOM\_​APP\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop plan not eligible to use Functions from a custom app.

* FUNCTION\_​DOES\_​NOT\_​IMPLEMENT

  Function does not implement the required interface.

* FUNCTION\_​ID\_​CANNOT\_​BE\_​CHANGED

  Function ID cannot be changed.

* FUNCTION\_​NOT\_​FOUND

  Function not found.

* FUNCTION\_​PENDING\_​DELETION

  Function is pending deletion.

* INVALID

  The input value is invalid.

* INVALID\_​METAFIELDS

  Could not create or update metafields.

* MAXIMUM\_​ACTIVE\_​PAYMENT\_​CUSTOMIZATIONS

  Maximum payment customizations are already enabled.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function\_id or function\_handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function\_id or function\_handle can be provided, not both.

* PAYMENT\_​CUSTOMIZATION\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop must be on a Shopify Plus plan to activate payment customizations from a custom app.

* PAYMENT\_​CUSTOMIZATION\_​NOT\_​FOUND

  Payment customization not found.

* REQUIRED\_​INPUT\_​FIELD

  Required input field must be present.

***

## Fields

* [Payment​Customization​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError#field-PaymentCustomizationError.fields.code)

  OBJECT

  An error that occurs during the execution of a payment customization mutation.

***

## Map

### Fields with this enum

* <-|[Payment​Customization​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError#field-PaymentCustomizationError.fields.code)
