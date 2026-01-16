---
title: CompanyContactRevokeRolesPayload - GraphQL Admin
description: Return type for `companyContactRevokeRoles` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRevokeRolesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRevokeRolesPayload.md
---

# Company​Contact​Revoke​Roles​Payload

payload

Return type for `companyContactRevokeRoles` mutation.

## Fields

* revoked​Role​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of role assignment IDs that were removed from the company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRoles)

  mutation

  Revokes roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being revoked.

  * role​Assignment​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The current role assignment IDs to revoke.

  * revoke​All

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Flag to revoke all roles on the contact.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactRevokeRoles)
