---
title: CompanyLocationAssignRolesPayload - GraphQL Admin
description: Return type for `companyLocationAssignRoles` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignRolesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignRolesPayload.md
---

# Company​Location​Assign​Roles​Payload

payload

Return type for `companyLocationAssignRoles` mutation.

## Fields

* role​Assignments

  [\[Company​Contact​Role​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  A list of newly created assignments of company contacts to a company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

  mutation

  Assigns roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

    required

    The roles to assign.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationAssignRoles)
