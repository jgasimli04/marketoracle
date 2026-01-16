---
title: ConsentPolicyErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ConsentPolicyError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ConsentPolicyErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ConsentPolicyErrorCode.md
---

# Consent​Policy​Error​Code

enum

Possible error codes that can be returned by `ConsentPolicyError`.

## Valid values

* COUNTRY\_​CODE\_​REQUIRED

  Country code is required.

* REGION\_​CODE\_​MUST\_​MATCH\_​COUNTRY\_​CODE

  Region code must match the country code.

* REGION\_​CODE\_​REQUIRED

  Region code is required for countries with existing regional policies.

* SHOPIFY\_​COOKIE\_​BANNER\_​NOT\_​DISABLED

  Shopify's cookie banner must be disabled.

* UNSUPORTED\_​CONSENT\_​POLICY

  Unsupported consent policy.

***

## Fields

* [Consent​Policy​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError#field-ConsentPolicyError.fields.code)

  OBJECT

  The errors encountered while performing mutations on consent policies.

***

## Map

### Fields with this enum

* <-|[Consent​Policy​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError#field-ConsentPolicyError.fields.code)
