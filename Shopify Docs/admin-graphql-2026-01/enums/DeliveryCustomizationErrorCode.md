---
title: DeliveryCustomizationErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `DeliveryCustomizationError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryCustomizationErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryCustomizationErrorCode.md
---

# Delivery​Customization​Error​Code

enum

Possible error codes that can be returned by `DeliveryCustomizationError`.

## Valid values

* CUSTOM\_​APP\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop must be on a Shopify Plus plan to activate functions from a custom app.

* DELIVERY\_​CUSTOMIZATION\_​FUNCTION\_​NOT\_​ELIGIBLE

  Shop must be on a Shopify Plus plan to activate delivery customizations from a custom app.

* DELIVERY\_​CUSTOMIZATION\_​NOT\_​FOUND

  Delivery customization not found.

* FUNCTION\_​DOES\_​NOT\_​IMPLEMENT

  Function does not implement the required interface for this delivery customization.

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

* MAXIMUM\_​ACTIVE\_​DELIVERY\_​CUSTOMIZATIONS

  Maximum delivery customizations are already enabled.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function\_id or function\_handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function\_id or function\_handle can be provided, not both.

* REQUIRED\_​INPUT\_​FIELD

  Required input field must be present.

* UNAUTHORIZED\_​APP\_​SCOPE

  Unauthorized app scope.

***

## Fields

* [Delivery​Customization​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError#field-DeliveryCustomizationError.fields.code)

  OBJECT

  An error that occurs during the execution of a delivery customization mutation.

***

## Map

### Fields with this enum

* <-|[Delivery​Customization​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError#field-DeliveryCustomizationError.fields.code)
