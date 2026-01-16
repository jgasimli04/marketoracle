---
title: CustomerSmsMarketingConsentInput - GraphQL Admin
description: |-
  The marketing consent information when the customer consented to
          receiving marketing material by SMS.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput.md
---

# Customer​Sms​Marketing​Consent​Input

input\_object

The marketing consent information when the customer consented to receiving marketing material by SMS.

## Fields

* consent​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the customer consented to receive marketing material by SMS. If no date is provided, then the date and time when the consent information was sent is used.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The marketing subscription opt-in level that was set when the customer consented to receive marketing information.

* marketing​State

  [Customer​Sms​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState)

  non-null

  The current SMS marketing state for the customer.

* source​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Identifies the location where the customer consented to receiving marketing material by SMS.

***

## Input objects using this input

* [Customer​Input.smsMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-smsMarketingConsent)

  INPUT OBJECT

  The input fields and values to use when creating or updating a customer.

* [Customer​Sms​Marketing​Consent​Update​Input.smsMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput#fields-smsMarketingConsent)

  INPUT OBJECT

  The input fields for updating SMS marketing consent information for a given customer ID.

***

## Map

### Input objects using this input

* [Customer​Input.smsMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-smsMarketingConsent)
* [Customer​Sms​Marketing​Consent​Update​Input.smsMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput#fields-smsMarketingConsent)
