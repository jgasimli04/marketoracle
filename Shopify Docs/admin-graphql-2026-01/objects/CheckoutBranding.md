---
title: CheckoutBranding - GraphQL Admin
description: >-
  Creates a unified visual identity for your checkout that keeps customers
  engaged and reinforces your brand throughout the purchase process. This
  comprehensive branding system lets you control every visual aspect of
  checkout, from colors and fonts to layouts and imagery, so your checkout feels
  like a natural extension of your store.


  For example, a luxury fashion retailer can configure their checkout with
  custom color palettes, premium typography, rounded corners for a softer feel,
  and branded imagery that matches their main website aesthetic.


  Use the `Branding` object to:

  - Configure comprehensive checkout visual identity

  - Coordinate color schemes across all checkout elements

  - Apply consistent typography and spacing standards

  - Manage background imagery and layout customizations

  - Control visibility of various checkout components


  The branding configuration includes design system foundations like color
  roles, typography scales, and spacing units, plus specific customizations for
  sections, dividers, and interactive elements. This allows merchants to create
  cohesive checkout experiences that reinforce their brand identity while
  maintaining usability standards.


  Different color schemes can be defined for various contexts, ensuring optimal
  contrast and accessibility across different checkout states and customer
  preferences.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding.md
---

# Checkout​Branding

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

Creates a unified visual identity for your checkout that keeps customers engaged and reinforces your brand throughout the purchase process. This comprehensive branding system lets you control every visual aspect of checkout, from colors and fonts to layouts and imagery, so your checkout feels like a natural extension of your store.

For example, a luxury fashion retailer can configure their checkout with custom color palettes, premium typography, rounded corners for a softer feel, and branded imagery that matches their main website aesthetic.

Use the `Branding` object to:

* Configure comprehensive checkout visual identity
* Coordinate color schemes across all checkout elements
* Apply consistent typography and spacing standards
* Manage background imagery and layout customizations
* Control visibility of various checkout components

The branding configuration includes design system foundations like color roles, typography scales, and spacing units, plus specific customizations for sections, dividers, and interactive elements. This allows merchants to create cohesive checkout experiences that reinforce their brand identity while maintaining usability standards.

Different color schemes can be defined for various contexts, ensuring optimal contrast and accessibility across different checkout states and customer preferences.

## Fields

* customizations

  [Checkout​Branding​Customizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations)

  The customizations that apply to specific components or areas of the user interface.

* design​System

  [Checkout​Branding​Design​System](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingDesignSystem)

  The design system allows you to set values that represent specific attributes of your brand like color and font. These attributes are used throughout the user interface. This brings consistency and allows you to easily make broad design changes.

***

## Map

No referencing types

***

## Queries

* [checkout​Branding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutBranding)

  query

  Returns the visual customizations for checkout for a given [checkout profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile).

  To update checkout branding settings, use the [`checkoutBrandingUpsert`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert) mutation. Learn more about [customizing checkout's appearance](https://shopify.dev/docs/apps/build/checkout/styling).

  * checkout​Profile​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier.

  ***

***

## \<?>CheckoutBranding Queries

### Queried by

* \<?>[checkout​Branding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutBranding)

***

## Mutations

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

## <\~> CheckoutBranding Mutations

### Mutated by

* <\~>[checkout​Branding​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert)
