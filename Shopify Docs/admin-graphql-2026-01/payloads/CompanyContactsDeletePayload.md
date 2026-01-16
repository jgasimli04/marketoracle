---
title: CompanyContactsDeletePayload - GraphQL Admin
description: Return type for `companyContactsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CompanyContactsDeletePayload.md
---

# Company​Contacts​Delete​Payload

payload

Return type for `companyContactsDelete` mutation.

## Fields

* deleted​Company​Contact​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted company contacts.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete)

  mutation

  Deletes one or more company contacts.

  * company​Contact​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company contacts to delete.

  ***

***

## Map

### Mutations with this payload

* [company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/companyContactsDelete)
