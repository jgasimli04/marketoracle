---
title: CustomerProductSubscriberStatus - GraphQL Admin
description: >-
  The possible product subscription states for a customer, as defined by the
  customer's subscription contracts.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerProductSubscriberStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerProductSubscriberStatus.md
---

# Customer​Product​Subscriber​Status

enum

The possible product subscription states for a customer, as defined by the customer's subscription contracts.

## Valid values

* ACTIVE

  The customer has at least one active subscription contract.

* CANCELLED

  The customer's last subscription contract was cancelled and there are no other active or paused subscription contracts.

* EXPIRED

  The customer's last subscription contract expired and there are no other active or paused subscription contracts.

* FAILED

  The customer's last subscription contract failed and there are no other active or paused subscription contracts.

* NEVER\_​SUBSCRIBED

  The customer has never had a subscription contract.

* PAUSED

  The customer has at least one paused subscription contract and there are no other active subscription contracts.

***

## Fields

* [Customer.productSubscriberStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.productSubscriberStatus)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

***

## Map

### Fields with this enum

* <-|[Customer.productSubscriberStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.productSubscriberStatus)
