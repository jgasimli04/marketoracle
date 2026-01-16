---
title: CustomerEmailAddressOpenTrackingLevel - GraphQL Admin
description: >-
  The different levels related to whether a customer has opted in to having
  their opened emails tracked.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressOpenTrackingLevel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressOpenTrackingLevel.md
---

# Customer​Email​Address​Open​Tracking​Level

enum

The different levels related to whether a customer has opted in to having their opened emails tracked.

## Valid values

* OPTED\_​IN

  The customer has opted in to having their open emails tracked.

* OPTED\_​OUT

  The customer has opted out of having their open emails tracked.

* UNKNOWN

  The customer has not specified whether they want to opt in or out of having their open emails tracked.

***

## Fields

* [Customer​Email​Address.openTrackingLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.openTrackingLevel)

  OBJECT

  A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).

  It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.

***

## Map

### Fields with this enum

* <-|[Customer​Email​Address.openTrackingLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.openTrackingLevel)
