---
title: DataSaleOptOutPayload - GraphQL Admin
description: Return type for `dataSaleOptOut` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DataSaleOptOutPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DataSaleOptOutPayload.md
---

# Data​Sale​Opt​Out​Payload

payload

Return type for `dataSaleOptOut` mutation.

## Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer whose email address has been opted out of data sale.

* user​Errors

  [\[Data​Sale​Opt​Out​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/dataSaleOptOut)

  mutation

  Opt out a customer from data sale.

  * email

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The email address of the customer to opt out of data sale.

  ***

***

## Map

### Mutations with this payload

* [data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/types/dataSaleOptOut)
