---
title: AccountType - GraphQL Admin
description: Possible account types that a staff member can have.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AccountType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AccountType.md'
---

# Account​Type

enum

Possible account types that a staff member can have.

## Valid values

* COLLABORATOR

  The account of a partner who collaborates with the merchant.

* COLLABORATOR\_​TEAM\_​MEMBER

  The account of a partner collaborator team member.

* INVITED

  The user has not yet accepted the invitation to create an account.

* INVITED\_​STORE\_​OWNER

  The user has not yet accepted the invitation to become the store owner.

* REGULAR

  The account can access the Shopify admin.

* REQUESTED

  The admin has not yet accepted the request to create a collaborator account.

* RESTRICTED

  The account cannot access the Shopify admin.

* SAML

  The account can be signed into via a SAML provider.

***

## Fields

* [Staff​Member.accountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.accountType)

  OBJECT

  A user account that can access the Shopify admin to manage store operations. Includes personal information and account status.

  You can assign staff members to [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b), limiting their actions to those locations.

***

## Map

### Fields with this enum

* <-|[Staff​Member.accountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.accountType)
