---
title: CustomerPhoneNumber - GraphQL Admin
description: A phone number.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber.md
---

# Customer​Phone​Number

object

Requires `read_customers` access scope.

A phone number.

## Fields

* marketing​Collected​From

  [Customer​Consent​Collected​From](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom)

  The source from which the SMS marketing information for the customer was collected.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines, received when the marketing consent was updated.

* marketing​State

  [Customer​Sms​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState)

  non-null

  Whether the customer has subscribed to SMS marketing material.

* marketing​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the marketing consent was updated.

  No date is provided if the email address never updated its marketing consent.

* phone​Number

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A customer's phone number.

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the customer consented to receive marketing material by SMS.

***

## Map

### Fields with this object

* {}[Customer.defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.defaultPhoneNumber)
* {}[CustomerMergePreviewAlternateFields.phoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields#field-CustomerMergePreviewAlternateFields.fields.phoneNumber)
* {}[CustomerMergePreviewDefaultFields.phoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.phoneNumber)
* {}[CustomerSegmentMember.defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.defaultPhoneNumber)
