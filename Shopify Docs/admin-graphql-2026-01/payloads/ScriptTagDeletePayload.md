---
title: ScriptTagDeletePayload - GraphQL Admin
description: Return type for `scriptTagDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ScriptTagDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ScriptTagDeletePayload.md
---

# Script​Tag​Delete​Payload

payload

Return type for `scriptTagDelete` mutation.

## Fields

* deleted​Script​Tag​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted script tag.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [script​Tag​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagDelete)

  mutation

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Deletes a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to delete.

  ***

***

## Map

### Mutations with this payload

* [script​Tag​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/scriptTagDelete)
