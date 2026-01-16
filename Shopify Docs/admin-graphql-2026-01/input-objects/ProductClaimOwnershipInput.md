---
title: ProductClaimOwnershipInput - GraphQL Admin
description: The input fields to claim ownership for Product features such as Bundles.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput.md
---

# Product​Claim​Ownership​Input

input\_object

The input fields to claim ownership for Product features such as Bundles.

## Fields

* bundles

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Claiming ownership of bundles lets the app render a custom UI for the bundles' card on the products details page in the Shopify admin.

  Bundle ownership can only be claimed when creating the product. If you create `ProductVariantComponents` in any of its product variants, then the bundle ownership is automatically assigned to the app making the call.

  [Learn more](https://shopify.dev/docs/apps/selling-strategies/bundles/product-config).

***

## Input objects using this input

* [Product​Create​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-claimOwnership)

  INPUT OBJECT

  The input fields required to create a product.

* [Product​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-claimOwnership)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Set​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-claimOwnership)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

***

## Map

### Input objects using this input

* [Product​Create​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-claimOwnership)
* [Product​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-claimOwnership)
* [Product​Set​Input.claimOwnership](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-claimOwnership)
