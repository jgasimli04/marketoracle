---
title: CustomerEmailMarketingConsentUpdateInput - GraphQL Admin
description: >-
  The input fields for the email consent information to update for a given
  customer ID.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput.md
---

# Customer​Email​Marketing​Consent​Update​Input

input\_object

The input fields for the email consent information to update for a given customer ID.

## Fields

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer for which to update the email marketing consent information. The customer must have a unique email address associated to the record. If not, add the email address using the `customerUpdate` mutation first.

* email​Marketing​Consent

  [Customer​Email​Marketing​Consent​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput)

  required

  The marketing consent information when the customer consented to receiving marketing material by email.

***

## Map

No referencing types
