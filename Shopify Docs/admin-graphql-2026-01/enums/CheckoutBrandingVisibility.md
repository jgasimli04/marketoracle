---
title: CheckoutBrandingVisibility - GraphQL Admin
description: Possible visibility states.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingVisibility.md
---

# Checkout​Branding​Visibility

enum

Possible visibility states.

## Valid values

* HIDDEN

  The Hidden visibility setting.

* VISIBLE

  The Visible visibility setting.

***

## Fields

* [Checkout​Branding​Buyer​Journey.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingBuyerJourney#field-CheckoutBrandingBuyerJourney.fields.visibility)

  OBJECT

  Controls the visibility settings for checkout breadcrumb navigation that shows customers their progress through the purchase journey. This simple customization allows merchants to show or hide the breadcrumb trail based on their checkout flow preferences.

  For example, a single-page checkout experience might hide breadcrumbs to create a more streamlined appearance, while multi-step checkouts can display them to help customers understand their progress.

  The visibility setting provides merchants flexibility in how they present checkout navigation to match their specific user experience strategy.

  Learn more about [checkout customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding).

* [Checkout​Branding​Buyer​Journey​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingBuyerJourneyInput#fields-visibility)

  INPUT OBJECT

  The input fields for updating breadcrumb customizations, which represent the buyer's journey to checkout.

* [Checkout​Branding​Cart​Link.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCartLink#field-CheckoutBrandingCartLink.fields.visibility)

  OBJECT

  Controls the visibility of cart links displayed during checkout. These links allow customers to return to their cart or continue shopping.

  For example, an electronics store might hide cart links during final checkout steps to reduce distractions, or show them prominently to encourage customers to add accessories before completing their purchase.

  The `CartLink` object provides visibility settings to control when and how these navigation elements appear based on the merchant's checkout flow strategy.

* [Checkout​Branding​Cart​Link​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCartLinkInput#fields-visibility)

  INPUT OBJECT

  The input fields for updating the cart link customizations at checkout.

* [Checkout​Branding​Container​Divider.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingContainerDivider#field-CheckoutBrandingContainerDivider.fields.visibility)

  OBJECT

  The container's divider customizations.

* [Checkout​Branding​Container​Divider​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingContainerDividerInput#fields-visibility)

  INPUT OBJECT

  The input fields used to update a container's divider customizations.

* [Checkout​Branding​Footer​Content.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFooterContent#field-CheckoutBrandingFooterContent.fields.visibility)

  OBJECT

  The footer content customizations.

* [Checkout​Branding​Footer​Content​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterContentInput#fields-visibility)

  INPUT OBJECT

  The input fields for footer content customizations.

* [Checkout​Branding​Logo.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo#field-CheckoutBrandingLogo.fields.visibility)

  OBJECT

  The store logo customizations.

* [Checkout​Branding​Logo​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput#fields-visibility)

  INPUT OBJECT

  The input fields used to update the logo customizations.

***

## Map

### Fields with this enum

* <-|[Checkout​Branding​Buyer​Journey.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingBuyerJourney#field-CheckoutBrandingBuyerJourney.fields.visibility)
* <-|[Checkout​Branding​Cart​Link.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCartLink#field-CheckoutBrandingCartLink.fields.visibility)
* <-|[Checkout​Branding​Container​Divider.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingContainerDivider#field-CheckoutBrandingContainerDivider.fields.visibility)
* <-|[Checkout​Branding​Footer​Content.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFooterContent#field-CheckoutBrandingFooterContent.fields.visibility)
* <-|[Checkout​Branding​Logo.visibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo#field-CheckoutBrandingLogo.fields.visibility)

### Inputs with this enum

* [Checkout​Branding​Buyer​Journey​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingBuyerJourneyInput#fields-visibility)
* [Checkout​Branding​Cart​Link​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCartLinkInput#fields-visibility)
* [Checkout​Branding​Container​Divider​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingContainerDividerInput#fields-visibility)
* [Checkout​Branding​Footer​Content​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterContentInput#fields-visibility)
* [Checkout​Branding​Logo​Input.visibility](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput#fields-visibility)
