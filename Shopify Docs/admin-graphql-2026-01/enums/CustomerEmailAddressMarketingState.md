---
title: CustomerEmailAddressMarketingState - GraphQL Admin
description: Possible marketing states for the customer’s email address.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressMarketingState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressMarketingState.md
---

# Customer​Email​Address​Marketing​State

enum

Possible marketing states for the customer’s email address.

## Valid values

* INVALID

  The customer’s email address marketing state is invalid.

* NOT\_​SUBSCRIBED

  The customer is not subscribed to email marketing.

* PENDING

  The customer is in the process of subscribing to email marketing.

* SUBSCRIBED

  The customer is subscribed to email marketing.

* UNSUBSCRIBED

  The customer is not subscribed to email marketing but was previously subscribed.

***

## Fields

* [Customer​Email​Address.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingState)

  OBJECT

  A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).

  It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.

***

## Map

### Fields with this enum

* <-|[Customer​Email​Address.marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingState)
