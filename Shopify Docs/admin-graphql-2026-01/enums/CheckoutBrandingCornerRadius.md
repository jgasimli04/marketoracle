---
title: CheckoutBrandingCornerRadius - GraphQL Admin
description: >-
  The options for customizing the corner radius of checkout-related objects.
  Examples include the primary

  button, the name text fields and the sections within the main area (if they
  have borders).

  Refer to this complete
  [list](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius#fieldswith)

  for objects with customizable corner radii.


  The design system defines the corner radius pixel size for each option. Modify
  the defaults by setting the

  [designSystem.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingDesignSystemInput#field-checkoutbrandingdesignsysteminput-cornerradius)

  input fields.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius.md
---

# Checkout​Branding​Corner​Radius

enum

The options for customizing the corner radius of checkout-related objects. Examples include the primary button, the name text fields and the sections within the main area (if they have borders). Refer to this complete [list](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius#fieldswith) for objects with customizable corner radii.

The design system defines the corner radius pixel size for each option. Modify the defaults by setting the [designSystem.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingDesignSystemInput#field-checkoutbrandingdesignsysteminput-cornerradius) input fields.

## Valid values

* BASE

  The corner radius with a pixel value defined by designSystem.cornerRadius.base.

* LARGE

  The corner radius with a pixel value defined by designSystem.cornerRadius.large.

* NONE

  The 0px corner radius (square corners).

* SMALL

  The corner radius with a pixel value defined by designSystem.cornerRadius.small.

***

## Fields

* [Checkout​Branding​Button.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButton#field-CheckoutBrandingButton.fields.cornerRadius)

  OBJECT

  The buttons customizations.

* [Checkout​Branding​Button​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingButtonInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the buttons customizations.

* [Checkout​Branding​Checkbox.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCheckbox#field-CheckoutBrandingCheckbox.fields.cornerRadius)

  OBJECT

  Defines the visual styling for checkbox elements throughout the checkout interface, focusing on corner radius customization. This allows merchants to align checkbox appearance with their overall design aesthetic.

  For example, a modern minimalist brand might prefer sharp, square checkboxes while a friendly consumer brand could opt for rounded corners to create a softer, more approachable feel.

  The corner radius setting ensures checkboxes integrate seamlessly with the overall checkout design language and brand identity.

* [Checkout​Branding​Checkbox​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCheckboxInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the checkboxes customizations.

* [Checkout​Branding​Control.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControl#field-CheckoutBrandingControl.fields.cornerRadius)

  OBJECT

  The form controls customizations.

* [Checkout​Branding​Control​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingControlInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the form controls customizations.

* [Checkout​Branding​Express​Checkout​Button.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingExpressCheckoutButton#field-CheckoutBrandingExpressCheckoutButton.fields.cornerRadius)

  OBJECT

  The Express Checkout button customizations.

* [Checkout​Branding​Express​Checkout​Button​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingExpressCheckoutButtonInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields to use to update the express checkout customizations.

* [Checkout​Branding​Main​Section.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMainSection#field-CheckoutBrandingMainSection.fields.cornerRadius)

  OBJECT

  The main sections customizations.

* [Checkout​Branding​Main​Section​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMainSectionInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the main sections customizations.

* [Checkout​Branding​Merchandise​Thumbnail.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail#field-CheckoutBrandingMerchandiseThumbnail.fields.cornerRadius)

  OBJECT

  The merchandise thumbnails customizations.

* [Checkout​Branding​Merchandise​Thumbnail​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMerchandiseThumbnailInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the merchandise thumbnails customizations.

* [Checkout​Branding​Order​Summary​Section.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingOrderSummarySection#field-CheckoutBrandingOrderSummarySection.fields.cornerRadius)

  OBJECT

  The order summary sections customizations.

* [Checkout​Branding​Order​Summary​Section​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingOrderSummarySectionInput#fields-cornerRadius)

  INPUT OBJECT

  The input fields used to update the order summary sections customizations.

***

## Map

### Fields with this enum

* <-|[Checkout​Branding​Button.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingButton#field-CheckoutBrandingButton.fields.cornerRadius)
* <-|[Checkout​Branding​Checkbox.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCheckbox#field-CheckoutBrandingCheckbox.fields.cornerRadius)
* <-|[Checkout​Branding​Control.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingControl#field-CheckoutBrandingControl.fields.cornerRadius)
* <-|[Checkout​Branding​Express​Checkout​Button.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingExpressCheckoutButton#field-CheckoutBrandingExpressCheckoutButton.fields.cornerRadius)
* <-|[Checkout​Branding​Main​Section.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMainSection#field-CheckoutBrandingMainSection.fields.cornerRadius)
* <-|[Checkout​Branding​Merchandise​Thumbnail.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingMerchandiseThumbnail#field-CheckoutBrandingMerchandiseThumbnail.fields.cornerRadius)
* <-|[Checkout​Branding​Order​Summary​Section.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingOrderSummarySection#field-CheckoutBrandingOrderSummarySection.fields.cornerRadius)

### Inputs with this enum

* [Checkout​Branding​Button​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingButtonInput#fields-cornerRadius)
* [Checkout​Branding​Checkbox​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCheckboxInput#fields-cornerRadius)
* [Checkout​Branding​Control​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingControlInput#fields-cornerRadius)
* [Checkout​Branding​Express​Checkout​Button​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingExpressCheckoutButtonInput#fields-cornerRadius)
* [Checkout​Branding​Main​Section​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMainSectionInput#fields-cornerRadius)
* [Checkout​Branding​Merchandise​Thumbnail​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingMerchandiseThumbnailInput#fields-cornerRadius)
* [Checkout​Branding​Order​Summary​Section​Input.cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingOrderSummarySectionInput#fields-cornerRadius)
