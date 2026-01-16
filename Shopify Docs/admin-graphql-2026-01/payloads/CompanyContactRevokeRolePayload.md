---
title: CompanyContactRevokeRolePayload - GraphQL Admin
description: Return type for `companyContactRevokeRole` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRevokeRolePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactRevokeRolePayload.md
---

# Company​Contact​Revoke​Role​Payload

payload

Return type for `companyContactRevokeRole` mutation.

## Fields

* revoked​Company​Contact​Role​Assignment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The role assignment that was revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole)

  mutation

  Revokes a role on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to revoke a role from.

  * company​Contact​Role​Assignment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role assignment to revoke from a contact.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactRevokeRole)
