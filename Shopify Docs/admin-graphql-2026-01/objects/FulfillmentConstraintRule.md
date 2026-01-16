---
title: FulfillmentConstraintRule - GraphQL Admin
description: A fulfillment constraint rule.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule.md
---

# Fulfillment​Constraint​Rule

object

Requires `read_fulfillment_constraint_rules` access scope.

A fulfillment constraint rule.

## Fields

* delivery​Method​Types

  [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

  non-null

  Delivery method types that the function is associated with.

* function

  [Shopify​Function!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

  non-null

  The ID for the fulfillment constraint function.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The key for the metafield.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

No referencing types

***

## Queries

* [fulfillment​Constraint​Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentConstraintRules)

  query

  The fulfillment constraint rules that belong to a shop.

***

## \<?>FulfillmentConstraintRule Queries

### Queried by

* \<?>[fulfillment​Constraint​Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentConstraintRules)

***

## Mutations

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

  mutation

  Creates a fulfillment constraint rule and its metafield.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the function providing the constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Associate the function with one or multiple delivery method types.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Metafields to associate to the fulfillment constraint rule.

  ***

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

  mutation

  Update a fulfillment constraint rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

  ***

***

## <\~> FulfillmentConstraintRule Mutations

### Mutated by

* <\~>[fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)
* <\~>[fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

***

## Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ||-FulfillmentConstraintRule Implements

### Implements

* ||-[Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
