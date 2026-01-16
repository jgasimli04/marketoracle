---
title: CompanyContactAssignRolesPayload - GraphQL Admin
description: Return type for `companyContactAssignRoles` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactAssignRolesPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactAssignRolesPayload.md
---

# Company​Contact​Assign​Roles​Payload

payload

Return type for `companyContactAssignRoles` mutation.

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

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

  mutation

  Assigns roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

    required

    The new roles to assign.

  ***

***

## Map

### Mutations with this payload

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactAssignRoles)
