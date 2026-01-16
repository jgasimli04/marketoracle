---
title: CustomerEmailMarketingState - GraphQL Admin
description: The possible email marketing states for a customer.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingState.md
---

# Customer​Email​Marketing​State

enum

The possible email marketing states for a customer.

## Valid values

* INVALID

  The customer’s email address marketing state is invalid.

* NOT\_​SUBSCRIBED

  The customer isn't subscribed to email marketing.

* PENDING

  The customer is in the process of subscribing to email marketing.

* REDACTED

  The customer's personal data is erased. This value is internally-set and read-only.

* SUBSCRIBED

  The customer is subscribed to email marketing.

* UNSUBSCRIBED

  The customer isn't currently subscribed to email marketing but was previously subscribed.

***

## Fields

* [Customer​Email​Marketing​Consent​Input.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-marketingState)

  INPUT OBJECT

  Information that describes when a customer consented to receiving marketing material by email.

* [Customer​Email​Marketing​Consent​State.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-CustomerEmailMarketingConsentState.fields.marketingState)

  OBJECT

  The record of when a customer consented to receive marketing material by email.

***

## Map

### Fields with this enum

* <-|[Customer​Email​Marketing​Consent​State.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-CustomerEmailMarketingConsentState.fields.marketingState)

### Inputs with this enum

* [Customer​Email​Marketing​Consent​Input.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-marketingState)
