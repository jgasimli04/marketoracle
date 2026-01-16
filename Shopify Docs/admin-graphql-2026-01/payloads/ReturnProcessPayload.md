---
title: ReturnProcessPayload - GraphQL Admin
description: Return type for `returnProcess` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnProcessPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ReturnProcessPayload.md
---

# Return​Process​Payload

payload

Return type for `returnProcess` mutation.

## Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The processed return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)

  mutation

  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation confirms the quantities for [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) and [`ExchangeLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem) objects previously created on the [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return).

  For returned items, you specify how to handle them through dispositions such as restocking or disposal. The mutation creates [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects for exchange items and records all transactions in the merchant's financial reports. You can optionally issue refunds through financial transfers, apply refund duties, and refund shipping costs.

  Learn more about [processing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Process​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput)

    required

    ### Arguments

    Specifies the input fields for processing a return.

  ***

***

## Map

### Mutations with this payload

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/types/returnProcess)
