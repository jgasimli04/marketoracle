---
title: CustomerEmailMarketingConsentInput - GraphQL Admin
description: |-
  Information that describes when a customer consented to
          receiving marketing material by email.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput.md
---

# Customer​Email​Marketing​Consent​Input

input\_object

Information that describes when a customer consented to receiving marketing material by email.

## Fields

* consent​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The latest date and time when the customer consented or objected to receiving marketing material by email.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The customer opt-in level at the time of subscribing to marketing material.

* marketing​State

  [Customer​Email​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingState)

  non-null

  The current marketing state associated with the customer's email. If the customer doesn't have an email, then this field is `null`.

* source​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Identifies the location where the customer consented to receiving marketing material by email.

***

## Input objects using this input

* [Customer​Email​Marketing​Consent​Update​Input.emailMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput#fields-emailMarketingConsent)

  INPUT OBJECT

  The input fields for the email consent information to update for a given customer ID.

* [Customer​Input.emailMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-emailMarketingConsent)

  INPUT OBJECT

  The input fields and values to use when creating or updating a customer.

***

## Map

### Input objects using this input

* [Customer​Email​Marketing​Consent​Update​Input.emailMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput#fields-emailMarketingConsent)
* [Customer​Input.emailMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-emailMarketingConsent)
