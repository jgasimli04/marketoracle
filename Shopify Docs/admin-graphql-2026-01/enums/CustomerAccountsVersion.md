---
title: CustomerAccountsVersion - GraphQL Admin
description: The login redirection target for customer accounts.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountsVersion
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountsVersion.md
---

# Customer​Accounts​Version

enum

The login redirection target for customer accounts.

## Valid values

* CLASSIC

  The customer is redirected to the classic customer accounts login page.

* NEW\_​CUSTOMER\_​ACCOUNTS

  The customer is redirected to the new customer accounts login page.

***

## Fields

* [Customer​Accounts​V2.customerAccountsVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion)

  OBJECT

  Information about the shop's customer account-related settings. Includes the [customer account version](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion) which indicates whether the merchant is using new customer accounts or legacy customer accounts, along with other account configuration such as login requirements.

***

## Map

### Fields with this enum

* <-|[Customer​Accounts​V2.customerAccountsVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion)
