---
title: TaxSummaryCreatePayload - GraphQL Admin
description: Return type for `taxSummaryCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TaxSummaryCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TaxSummaryCreatePayload.md
---

# Tax​Summary​Create​Payload

payload

Return type for `taxSummaryCreate` mutation.

## Fields

* enqueued​Orders

  [\[Order!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  A list of orders that were successfully enqueued to create a tax summary.

* user​Errors

  [\[Tax​Summary​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxSummaryCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate)

  mutation

  Creates a tax summary for a given order. If both an order ID and a start and end time are provided, the order ID will be used.

  * order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the order to create the tax summary for.

  * start​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The start time of the range of orders to create the tax summary for.

  * end​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The end time of the range of orders to create the tax summary for.

  ***

***

## Map

### Mutations with this payload

* [tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/taxSummaryCreate)
