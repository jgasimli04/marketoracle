---
title: CustomerSmsMarketingConsentUpdateInput - GraphQL Admin
description: >-
  The input fields for updating SMS marketing consent information for a given
  customer ID.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput.md
---

# Customer​Sms​Marketing​Consent​Update​Input

input\_object

The input fields for updating SMS marketing consent information for a given customer ID.

## Fields

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer to update the SMS marketing consent information for. The customer must have a unique phone number associated to the record. If not, add the phone number using the `customerUpdate` mutation first.

* sms​Marketing​Consent

  [Customer​Sms​Marketing​Consent​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput)

  required

  The marketing consent information when the customer consented to receiving marketing material by SMS.

***

## Map

No referencing types
