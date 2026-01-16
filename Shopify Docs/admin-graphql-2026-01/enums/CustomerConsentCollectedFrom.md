---
title: CustomerConsentCollectedFrom - GraphQL Admin
description: >-
  The source that collected the customer's consent to receive marketing
  materials.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom.md
---

# Customer​Consent​Collected​From

enum

The source that collected the customer's consent to receive marketing materials.

## Valid values

* OTHER

  The customer consent was collected outside of Shopify.

* SHOPIFY

  The customer consent was collected by Shopify.

***

## Fields

* [Customer​Phone​Number.marketingCollectedFrom](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingCollectedFrom)

  OBJECT

  A phone number.

* [Customer​Sms​Marketing​Consent​State.consentCollectedFrom](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.consentCollectedFrom)

  OBJECT

  The record of when a customer consented to receive marketing material by SMS.

  The customer's consent state reflects the record with the most recent date when consent was updated.

***

## Map

### Fields with this enum

* <-|[Customer​Phone​Number.marketingCollectedFrom](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingCollectedFrom)
* <-|[Customer​Sms​Marketing​Consent​State.consentCollectedFrom](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.consentCollectedFrom)
