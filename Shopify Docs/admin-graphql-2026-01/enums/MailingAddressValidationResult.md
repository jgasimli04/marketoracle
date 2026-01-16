---
title: MailingAddressValidationResult - GraphQL Admin
description: Highest level of validation concerns identified for the address.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MailingAddressValidationResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MailingAddressValidationResult.md
---

# Mailing​Address​Validation​Result

enum

Highest level of validation concerns identified for the address.

## Valid values

* ERROR

  Indicates that the address has been validated and is very likely to contain invalid information.

* NO\_​ISSUES

  Indicates that the address has been validated and no issues were found.

* WARNING

  Indicates that the address has been validated and might contain invalid information.

***

## Fields

* [Mailing​Address.validationResultSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.validationResultSummary)

  OBJECT

  A physical mailing address. For example, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s default address and an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)'s billing address are both mailing addresses. Stores standard address components, customer name information, and company details.

  The address includes geographic coordinates ([`latitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude) and [`longitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)). You can format addresses for display using the [`formatted`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.formatted) field with options to include or exclude name and company information.

***

## Map

### Fields with this enum

* <-|[Mailing​Address.validationResultSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.validationResultSummary)
