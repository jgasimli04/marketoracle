---
title: CompanyLocationAssignAddressPayload - GraphQL Admin
description: Return type for `companyLocationAssignAddress` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignAddressPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyLocationAssignAddressPayload.md
---

# Company​Location​Assign​Address​Payload

payload

Return type for `companyLocationAssignAddress` mutation.

## Fields

* addresses

  [\[Company​Address!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

  The list of updated addresses on the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

***

## Map

### Mutations with this payload

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/types/companyLocationAssignAddress)
