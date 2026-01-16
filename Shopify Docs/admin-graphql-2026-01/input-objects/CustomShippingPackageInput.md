---
title: CustomShippingPackageInput - GraphQL Admin
description: The input fields for a custom shipping package used to pack shipment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput.md
---

# Custom​Shipping​Package​Input

input\_object

The input fields for a custom shipping package used to pack shipment.

## Fields

* default

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  The default package is the one used to calculate shipping costs on checkout.

* dimensions

  [Object​Dimensions​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput)

  Outside dimensions of the empty shipping package.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Descriptive name for the package.

* type

  [Shipping​Package​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingPackageType)

  Type of package.

* weight

  [Weight​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput)

  Weight of the empty shipping package.

***

## Map

No referencing types
