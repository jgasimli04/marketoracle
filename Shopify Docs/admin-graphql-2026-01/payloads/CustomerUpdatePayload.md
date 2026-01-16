---
title: CustomerUpdatePayload - GraphQL Admin
description: Return type for `customerUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerUpdatePayload.md
---

# Customer​Update​Payload

payload

Return type for `customerUpdate` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s attributes including personal information and [`tax exemptions`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    Provides updated fields for the customer. To set marketing consent, use the `customerEmailMarketingConsentUpdate` or `customerSmsMarketingConsentUpdate` mutations instead.

  ***

***

## Map

### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerUpdate)
