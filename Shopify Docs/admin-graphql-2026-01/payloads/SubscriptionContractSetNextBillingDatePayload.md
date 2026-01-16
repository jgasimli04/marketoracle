---
title: SubscriptionContractSetNextBillingDatePayload - GraphQL Admin
description: Return type for `subscriptionContractSetNextBillingDate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractSetNextBillingDatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractSetNextBillingDatePayload.md
---

# Subscription​Contract​Set​Next​Billing​Date​Payload

payload

Return type for `subscriptionContractSetNextBillingDate` mutation.

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The updated Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

  mutation

  Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to set the next billing date for.

  * date

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The next billing date.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractSetNextBillingDate)
