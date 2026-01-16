---
title: CustomerState - GraphQL Admin
description: The valid values for the state of a customer's account with a shop.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerState'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerState.md'
---

# Customer​State

enum

The valid values for the state of a customer's account with a shop.

## Valid values

* DECLINED

  The customer declined the email invite to create an account.

* DISABLED

  The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time.

* ENABLED

  The customer has created an account.

* INVITED

  The customer has received an email invite to create an account.

***

## Fields

* [Customer.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state)

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

* <-|[Customer.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state)
