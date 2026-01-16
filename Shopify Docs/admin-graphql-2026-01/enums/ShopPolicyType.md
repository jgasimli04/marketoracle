---
title: ShopPolicyType - GraphQL Admin
description: Available shop policy types.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyType.md'
---

# Shop​Policy​Type

enum

Available shop policy types.

## Valid values

* CONTACT\_​INFORMATION

  The contact information.

* LEGAL\_​NOTICE

  The legal notice.

* PRIVACY\_​POLICY

  The privacy policy.

* REFUND\_​POLICY

  The refund policy.

* SHIPPING\_​POLICY

  The shipping policy.

* SUBSCRIPTION\_​POLICY

  The cancellation policy.

* TERMS\_​OF\_​SALE

  The terms of sale.

* TERMS\_​OF\_​SERVICE

  The terms of service.

***

## Fields

* [Shop​Policy.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.type)

  OBJECT

  Policy that a merchant has configured for their store, such as their refund or privacy policy.

* [Shop​Policy​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput#fields-type)

  INPUT OBJECT

  The input fields required to update a policy.

***

## Map

### Fields with this enum

* <-|[Shop​Policy.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.type)

### Inputs with this enum

* [Shop​Policy​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput#fields-type)
