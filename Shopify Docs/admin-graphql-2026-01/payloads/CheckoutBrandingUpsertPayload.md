---
title: CheckoutBrandingUpsertPayload - GraphQL Admin
description: Return type for `checkoutBrandingUpsert` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CheckoutBrandingUpsertPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CheckoutBrandingUpsertPayload.md
---

# Checkout​Branding​Upsert​Payload

payload

Return type for `checkoutBrandingUpsert` mutation.

## Fields

* checkout​Branding

  [Checkout​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding)

  Returns the new checkout branding settings.

* user​Errors

  [\[Checkout​Branding​Upsert​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingUpsertUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [checkout​Branding​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert)

  mutation

  Updates the visual branding for a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile), customizing how checkout displays to customers. Creates new branding settings if none exist, or modifies existing settings.

  The mutation accepts two levels of customization through the [`CheckoutBrandingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput) input object. [`designSystem`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert#arguments-checkoutBrandingInput.fields.designSystem) defines foundational brand attributes like colors, typography, and corner radius that apply consistently throughout checkout. [`customizations`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert#arguments-checkoutBrandingInput.fields.customizations) defines styles for specific parts of the UI, individual components, or groups of components like the header, buttons, form fields, and sections.

  Changes to a published checkout profile display immediately in the store's checkout. You can preview draft profiles in the Shopify admin's checkout editor before publishing.

  Learn more about [checkout styling](https://shopify.dev/docs/apps/checkout/styling).

  * checkout​Profile​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier.

  * checkout​Branding​Input

    [Checkout​Branding​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput)

    The input fields to use to upsert the checkout branding settings (pass null to reset them to default).

  ***

***

## Map

### Mutations with this payload

* [checkout​Branding​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/types/checkoutBrandingUpsert)
