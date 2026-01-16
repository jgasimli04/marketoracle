---
title: CustomerReplaceTaxExemptionsPayload - GraphQL Admin
description: Return type for `customerReplaceTaxExemptions` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerReplaceTaxExemptionsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerReplaceTaxExemptionsPayload.md
---

# Customer​Replace​Tax​Exemptions​Payload

payload

Return type for `customerReplaceTaxExemptions` mutation.

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

* [customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)

  mutation

  Replace tax exemptions for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions that will replace the current exemptions for a customer. Can be an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

***

## Map

### Mutations with this payload

* [customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/types/customerReplaceTaxExemptions)
