---
title: ShopifyPaymentsPayoutAlternateCurrencyCreatePayload - GraphQL Admin
description: Return type for `shopifyPaymentsPayoutAlternateCurrencyCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopifyPaymentsPayoutAlternateCurrencyCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopifyPaymentsPayoutAlternateCurrencyCreatePayload.md
---

# Shopify​Payments​Payout​Alternate​Currency​Create​Payload

payload

Return type for `shopifyPaymentsPayoutAlternateCurrencyCreate` mutation.

## Fields

* payout

  [Shopify​Payments​Tooling​Provider​Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsToolingProviderPayout)

  The resulting alternate currency payout created.

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the alternate currency payout was created successfully.

* user​Errors

  [\[Shopify​Payments​Payout​Alternate​Currency​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

  mutation

  Creates an alternate currency payout for a Shopify Payments account.

  * account​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Shopify Payments account on which the mutation is being performed.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    The currency of the balance to payout.

  ***

***

## Map

### Mutations with this payload

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/shopifyPaymentsPayoutAlternateCurrencyCreate)
