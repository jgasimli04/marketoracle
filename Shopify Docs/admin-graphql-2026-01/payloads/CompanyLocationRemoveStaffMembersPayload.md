---
title: CompanyLocationRemoveStaffMembersPayload - GraphQL Admin
description: Return type for `companyLocationRemoveStaffMembers` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRemoveStaffMembersPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationRemoveStaffMembersPayload.md
---

# Company​Location​Remove​Staff​Members​Payload

payload

Return type for `companyLocationRemoveStaffMembers` mutation.

## Fields

* deleted​Company​Location​Staff​Member​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted staff member assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers)

  mutation

  Deletes one or more existing mappings between a staff member at a shop and a company location.

  * company​Location​Staff​Member​Assignment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company location staff member assignment to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationRemoveStaffMembers)
