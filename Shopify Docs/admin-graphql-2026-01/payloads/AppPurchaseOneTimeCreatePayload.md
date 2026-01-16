---
title: AppPurchaseOneTimeCreatePayload - GraphQL Admin
description: Return type for `appPurchaseOneTimeCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppPurchaseOneTimeCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppPurchaseOneTimeCreatePayload.md
---

# App​Purchase​One​Time​Create​Payload

payload

Return type for `appPurchaseOneTimeCreate` mutation.

## Fields

* app​Purchase​One​Time

  [App​Purchase​One​Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  The newly created app one-time purchase.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL that the merchant can access to approve or decline the newly created app one-time purchase.

  If the merchant declines, then the merchant is redirected to the app and receives a notification message stating that the charge was declined. If the merchant approves and they're successfully invoiced, then the state of the charge changes from `pending` to `active`.

  You get paid after the charge is activated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

  mutation

  Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual features, premium content, or services on a per-use basis rather than subscription models.

  For example, a design app might charge merchants once for premium templates, or a marketing app could bill for individual campaign setups without ongoing monthly fees.

  Use the `AppPurchaseOneTimeCreate` mutation to:

  * Charge for premium features or content purchases
  * Bill for professional services or setup fees
  * Generate revenue from one-time digital product sales

  The mutation returns a confirmation URL that merchants must visit to approve the charge. Test and development stores are not charged, allowing safe testing of billing flows.

  Explore one-time billing options on the [app purchases page](https://shopify.dev/docs/apps/launch/billing/support-one-time-purchases).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the one-time purchase from the app.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The amount to be charged to the store for the app one-time purchase.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL where the merchant is redirected after approving the app one-time purchase.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app one-time purchase is a test transaction.

  ***

***

## Map

### Mutations with this payload

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/appPurchaseOneTimeCreate)
