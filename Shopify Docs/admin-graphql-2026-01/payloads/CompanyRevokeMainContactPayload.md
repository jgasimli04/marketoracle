---
title: CompanyRevokeMainContactPayload - GraphQL Admin
description: Return type for `companyRevokeMainContact` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyRevokeMainContactPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyRevokeMainContactPayload.md
---

# Company​Revoke​Main​Contact​Payload

payload

Return type for `companyRevokeMainContact` mutation.

## Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company from which the main contact is revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)

  mutation

  Revokes the main contact from the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to revoke the main contact from.

  ***

***

## Map

### Mutations with this payload

* [company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/types/companyRevokeMainContact)
