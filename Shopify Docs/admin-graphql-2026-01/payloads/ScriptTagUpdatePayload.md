---
title: ScriptTagUpdatePayload - GraphQL Admin
description: Return type for `scriptTagUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ScriptTagUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ScriptTagUpdatePayload.md
---

# Script​Tag​Update​Payload

payload

Return type for `scriptTagUpdate` mutation.

## Fields

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  The script tag that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

  mutation

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Updates a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to update.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    Specifies the input fields for a script tag.

  ***

***

## Map

### Mutations with this payload

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/scriptTagUpdate)
