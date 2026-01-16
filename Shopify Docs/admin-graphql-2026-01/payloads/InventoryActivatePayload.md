---
title: InventoryActivatePayload - GraphQL Admin
description: Return type for `inventoryActivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryActivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/InventoryActivatePayload.md
---

# Inventory​Activate​Payload

payload

Return type for `inventoryActivate` mutation.

## Fields

* inventory​Level

  [Inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The inventory level that was activated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

  mutation

  Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) that tracks stock quantities. This enables you to manage inventory for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) at the specified location.

  When you activate an inventory item, you can set its initial quantities. The [`available`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-available) argument sets the quantity that's available for sale. [`onHand`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-onHand) argument sets the total physical quantity at the location. If you don't specify quantities, then `available` and `onHand` default to zero.

  ***

  Caution

  As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

  ***

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to activate.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location of the inventory item being activated.

  * available

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial available quantity of the inventory item being activated at the location.

  * on​Hand

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial on\_hand quantity of the inventory item being activated at the location.

  * stock​At​Legacy​Location

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

  ***

***

## Map

### Mutations with this payload

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/types/inventoryActivate)
