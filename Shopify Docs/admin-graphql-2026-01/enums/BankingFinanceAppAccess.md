---
title: BankingFinanceAppAccess - GraphQL Admin
description: >-
  The valid types of actions a user should be able to perform in an financial
  app.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BankingFinanceAppAccess
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BankingFinanceAppAccess.md
---

# Banking​Finance​App​Access

enum

The valid types of actions a user should be able to perform in an financial app.

## Valid values

* MONEY\_​MOVEMENT\_​BLOCKED\_​MFA

  Indication that the user has blocked money movement due to MFA disabled.

* MONEY\_​MOVEMENT\_​RESTRICTED

  Indication that the user has restricted money movement.

* MOVE\_​MONEY

  Ability to perform actions that moves money.

* READ\_​ACCESS

  Read access in the financial app.

***

## Fields

* [Finance​App​Access​Policy.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceAppAccessPolicy#field-FinanceAppAccessPolicy.fields.access)

  OBJECT

  Current user's access policy for a finance app.

***

## Map

### Fields with this enum

* <-|[Finance​App​Access​Policy.access](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceAppAccessPolicy#field-FinanceAppAccessPolicy.fields.access)
