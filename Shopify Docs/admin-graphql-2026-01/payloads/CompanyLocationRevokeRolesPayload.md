---
title: CompanyLocationRevokeRolesPayload - GraphQL Admin
description: Return type for `companyLocationRevokeRoles` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeRolesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRevokeRolesPayload.md
---

# Company​Location​Revoke​Roles​Payload

payload

Return type for `companyLocationRevokeRoles` mutation.

## Fields

* revoked​Role​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of role assignment IDs that were removed from the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeRoles)

  mutation

  Revokes roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being revoked.

  * roles​To​Revoke

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The current roles to revoke.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationRevokeRoles)
