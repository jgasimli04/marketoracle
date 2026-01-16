---
title: CustomerSmsMarketingConsentUpdatePayload - GraphQL Admin
description: Return type for `customerSmsMarketingConsentUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerSmsMarketingConsentUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerSmsMarketingConsentUpdatePayload.md
---

# Customer​Sms​Marketing​Consent​Update​Payload

payload

Return type for `customerSmsMarketingConsentUpdate` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[Customer​Sms​Marketing​Consent​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

  mutation

  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a phone number on their account to receive SMS marketing.

  You can set whether the customer subscribes or unsubscribes to SMS marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.marketingOptInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.sourceLocationId) collected it.

  * input

    [Customer​Sms​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's SMS marketing consent information.

  ***

***

## Map

### Mutations with this payload

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerSmsMarketingConsentUpdate)
