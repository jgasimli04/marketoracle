---
title: OrderEditAddCustomItemPayload - GraphQL Admin
description: Return type for `orderEditAddCustomItem` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddCustomItemPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderEditAddCustomItemPayload.md
---

# Order​Edit​Add​Custom​Item​Payload

payload

Return type for `orderEditAddCustomItem` mutation.

## Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The custom line item that will be added to the order based on the current edits.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

  mutation

  Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent products or services not in your catalog, such as gift wrapping, installation fees, or one-off charges.

  Creates a [`CalculatedLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem) with the specified title, price, and quantity. Changes remain in the edit session until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [adding custom line items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-custom-line-item).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the custom item is added.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the custom item to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the retail [location](https://shopify.dev/api/admin-graphql/latest/objects/location) (if applicable) from which the custom item is sold. Used for tax calculations. A default location will be chosen automatically if none is provided.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The unit price of the custom item. This value can't be negative.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the custom item. This value must be greater than zero.

  * taxable

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item is taxable. Defaults to `true`.

  * requires​Shipping

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item requires shipping. Defaults to `false`.

  ***

***

## Map

### Mutations with this payload

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/types/orderEditAddCustomItem)
