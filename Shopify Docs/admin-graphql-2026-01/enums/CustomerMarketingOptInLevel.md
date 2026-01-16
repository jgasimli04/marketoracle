---
title: CustomerMarketingOptInLevel - GraphQL Admin
description: >-
  The possible values for the marketing subscription opt-in level enabled at the
  time the customer consented to receive marketing information.


  The levels are defined by [the M3AAWG best practices guideline
    document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel.md
---

# Customer​Marketing​Opt​In​Level

enum

The possible values for the marketing subscription opt-in level enabled at the time the customer consented to receive marketing information.

The levels are defined by [the M3AAWG best practices guideline document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).

## Valid values

* CONFIRMED\_​OPT\_​IN

  After providing their information, the customer receives a confirmation and is required to perform a intermediate step before receiving marketing information.

* SINGLE\_​OPT\_​IN

  After providing their information, the customer receives marketing information without any intermediate steps.

* UNKNOWN

  The customer receives marketing information but how they were opted in is unknown.

***

## Fields

* [Customer​Email​Address.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingOptInLevel)

  OBJECT

  A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).

  It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.

* [Customer​Email​Marketing​Consent​Input.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-marketingOptInLevel)

  INPUT OBJECT

  Information that describes when a customer consented to receiving marketing material by email.

* [Customer​Email​Marketing​Consent​State.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-CustomerEmailMarketingConsentState.fields.marketingOptInLevel)

  OBJECT

  The record of when a customer consented to receive marketing material by email.

* [Customer​Phone​Number.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingOptInLevel)

  OBJECT

  A phone number.

* [Customer​Sms​Marketing​Consent​Input.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-marketingOptInLevel)

  INPUT OBJECT

  The marketing consent information when the customer consented to receiving marketing material by SMS.

* [Customer​Sms​Marketing​Consent​State.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.marketingOptInLevel)

  OBJECT

  The record of when a customer consented to receive marketing material by SMS.

  The customer's consent state reflects the record with the most recent date when consent was updated.

***

## Map

### Fields with this enum

* <-|[Customer​Email​Address.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingOptInLevel)
* <-|[Customer​Email​Marketing​Consent​State.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-CustomerEmailMarketingConsentState.fields.marketingOptInLevel)
* <-|[Customer​Phone​Number.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingOptInLevel)
* <-|[Customer​Sms​Marketing​Consent​State.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-CustomerSmsMarketingConsentState.fields.marketingOptInLevel)

### Inputs with this enum

* [Customer​Email​Marketing​Consent​Input.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-marketingOptInLevel)
* [Customer​Sms​Marketing​Consent​Input.marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-marketingOptInLevel)
