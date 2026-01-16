---
title: TaxAppConfigurePayload - GraphQL Admin
description: Return type for `taxAppConfigure` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TaxAppConfigurePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TaxAppConfigurePayload.md
---

# Tax​App​Configure​Payload

payload

Return type for `taxAppConfigure` mutation.

## Fields

* tax​App​Configuration

  [Tax​App​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration)

  The updated tax app configuration.

* user​Errors

  [\[Tax​App​Configure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfigureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

  mutation

  Allows tax app configurations for tax partners.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    Configures whether the tax app is correctly configured and ready to be used.

  ***

***

## Map

### Mutations with this payload

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/types/taxAppConfigure)
