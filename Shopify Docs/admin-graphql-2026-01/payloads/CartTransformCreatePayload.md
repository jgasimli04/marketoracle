---
title: CartTransformCreatePayload - GraphQL Admin
description: Return type for `cartTransformCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CartTransformCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CartTransformCreatePayload.md
---

# Cart​Transform​Create​Payload

payload

Return type for `cartTransformCreate` mutation.

## Fields

* cart​Transform

  [Cart​Transform](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform)

  The newly created cart transform function.

* user​Errors

  [\[Cart​Transform​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

  mutation

  Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful control over their merchandising strategy by allowing apps to modify cart line items programmatically, supporting advanced approaches like dynamic bundles or personalized product recommendations.

  For example, a bundle app might create a cart transform that automatically groups related products (like a camera, lens, and case) into a single bundle line item when customers add them to their cart, complete with bundle pricing and unified presentation.

  Use `CartTransformCreate` to:

  * Deploy custom bundling logic to merchant stores
  * Enable dynamic product grouping during checkout
  * Implement personalized product recommendations
  * Create conditional offers based on cart contents
  * Support complex pricing strategies for product combinations

  The mutation processes synchronously and returns the created cart transform along with any validation errors. Once created, the cart transform function becomes active for the shop and will process cart modifications according to your defined logic. Cart transforms integrate with [Shopify Functions](https://shopify.dev/docs/api/functions) to provide powerful customization capabilities while maintaining checkout performance.

  Cart Transform functions can be configured to block checkout on failure or allow graceful degradation, giving you control over how errors are handled in the customer experience.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the Function providing the cart transform.

  * block​On​Failure

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether a run failure should block cart and checkout operations.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Additional metafields to associate to the cart transform.

  ***

***

## Map

### Mutations with this payload

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/cartTransformCreate)
