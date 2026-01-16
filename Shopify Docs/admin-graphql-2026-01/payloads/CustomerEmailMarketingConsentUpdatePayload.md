---
title: CustomerEmailMarketingConsentUpdatePayload - GraphQL Admin
description: Return type for `customerEmailMarketingConsentUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerEmailMarketingConsentUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerEmailMarketingConsentUpdatePayload.md
---

# Customer​Email​Marketing​Consent​Update​Payload

payload

Return type for `customerEmailMarketingConsentUpdate` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[Customer​Email​Marketing​Consent​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

  * input

    [Customer​Email​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's email marketing consent information.

  ***

***

## Map

### Mutations with this payload

* [customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerEmailMarketingConsentUpdate)
