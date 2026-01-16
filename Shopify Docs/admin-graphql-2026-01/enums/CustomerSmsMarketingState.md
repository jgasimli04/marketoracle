---
title: CustomerSmsMarketingState - GraphQL Admin
description: The valid SMS marketing states for a customer’s phone number.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState.md
---

# Customer​Sms​Marketing​State

enum

The valid SMS marketing states for a customer’s phone number.

## Valid values

* NOT\_​SUBSCRIBED

  The customer hasn't subscribed to SMS marketing.

* PENDING

  The customer is in the process of subscribing to SMS marketing.

* REDACTED

  The customer's personal data is erased. This value is internally-set and read-only.

* SUBSCRIBED

  The customer is subscribed to SMS marketing.

* UNSUBSCRIBED

  The customer isn't currently subscribed to SMS marketing but was previously subscribed.

***

## Fields

* [Customer​Phone​Number.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingState)

  OBJECT

  A phone number.

* [Customer​Sms​Marketing​Consent​Input.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-marketingState)

  INPUT OBJECT

  The marketing consent information when the customer consented to receiving marketing material by SMS.

* [Customer​Sms​Marketing​Consent​State.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.marketingState)

  OBJECT

  The record of when a customer consented to receive marketing material by SMS.

  The customer's consent state reflects the record with the most recent date when consent was updated.

***

## Map

### Fields with this enum

* <-|[Customer​Phone​Number.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingState)
* <-|[Customer​Sms​Marketing​Consent​State.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.marketingState)

### Inputs with this enum

* [Customer​Sms​Marketing​Consent​Input.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-marketingState)
