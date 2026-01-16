---
title: CustomerAddTaxExemptionsPayload - GraphQL Admin
description: Return type for `customerAddTaxExemptions` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddTaxExemptionsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddTaxExemptionsPayload.md
---

# Customer​Add​Tax​Exemptions​Payload

payload

Return type for `customerAddTaxExemptions` mutation.

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

* [customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)

  mutation

  Add tax exemptions for the customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions to add for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "CA_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

***

## Map

### Mutations with this payload

* [customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/types/customerAddTaxExemptions)
