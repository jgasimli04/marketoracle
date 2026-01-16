---
title: OrderEditAddVariantPayload - GraphQL Admin
description: Return type for `orderEditAddVariant` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddVariantPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddVariantPayload.md
---

# Order​Edit​Add​Variant​Payload

payload

Return type for `orderEditAddVariant` mutation.

## Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The [calculated line item](https://shopify.dev/api/admin-graphql/latest/objects/calculatedlineitem) that's added during this order edit.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

  mutation

  Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's being edited. The mutation respects the variant's contextual pricing.

  You can specify a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) to check for inventory availability and control whether duplicate variants are allowed. The [`quantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant#arguments-quantity) must be a positive value.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-new-variant).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * variant​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the variant to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the [location](https://shopify.dev/api/admin-graphql/latest/objects/location) to check for inventory availability. A default location ID is chosen automatically if none is provided.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the item to add to the order. Must be a positive value.

  * allow​Duplicates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the mutation can create a line item for a variant that's already on the calculated order.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditAddVariant)
