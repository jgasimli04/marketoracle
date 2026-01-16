---
title: CheckoutBrandingGlobalCornerRadius - GraphQL Admin
description: >-
  Possible choices to override corner radius customizations on all applicable
  objects. Note that this selection 

  can only be used to set the override to `NONE` (0px).


  For more customizations options, set the [corner
  radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

  selection on specific objects while leaving the global corner radius unset.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingGlobalCornerRadius
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingGlobalCornerRadius.md
---

# Checkout​Branding​Global​Corner​Radius

enum

Possible choices to override corner radius customizations on all applicable objects. Note that this selection can only be used to set the override to `NONE` (0px).

For more customizations options, set the [corner radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius) selection on specific objects while leaving the global corner radius unset.

## Valid values

* NONE

  Set the global corner radius override to 0px (square corners).

***

## Fields

* [Checkout​Branding​Global.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingGlobal#field-CheckoutBrandingGlobal.fields.cornerRadius)

  OBJECT

  The global customizations.

* [Checkout​Branding​Global​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingGlobalInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the global customizations.

***

## Map

### Fields with this enum

* <-|[Checkout​Branding​Global.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingGlobal#field-CheckoutBrandingGlobal.fields.cornerRadius)

### Inputs with this enum

* [Checkout​Branding​Global​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingGlobalInput#fields-cornerRadius)
