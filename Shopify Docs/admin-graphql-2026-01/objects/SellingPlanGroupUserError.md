---
title: SellingPlanGroupUserError - GraphQL Admin
description: Represents a selling plan group custom error.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError.md
---

# Selling​Plan​Group​User​Error

object

Represents a selling plan group custom error.

## Fields

* code

  [Selling​Plan​Group​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* [product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)

  mutation

  Removes multiple groups from a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* [product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

* [product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)

  mutation

  Remove multiple groups from a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to leave.

  ***

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)

  mutation

  Adds multiple products to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to add.

  ***

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)

  mutation

  Adds multiple product variants to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to add.

  ***

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)

  mutation

  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

  Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

  Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    ### Arguments

    The properties of the new Selling Plan Group.

  * resources

    [Selling​Plan​Group​Resource​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

    The resources this Selling Plan Group should be applied to.

  ***

* [selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete)

  mutation

  Delete a Selling Plan Group. This does not affect subscription contracts.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the selling plan group to delete.

  ***

* [selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts)

  mutation

  Removes multiple products from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to remove.

  ***

* [selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants)

  mutation

  Removes multiple product variants from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to remove.

  ***

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

  mutation

  Update a Selling Plan Group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The Selling Plan Group to update.

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    The properties of the Selling Plan Group to update.

  ***

***

## <\~> SellingPlanGroupUserError Mutations

### Mutated by

* <\~>[product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)
* <\~>[product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)
* <\~>[product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)
* <\~>[product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)
* <\~>[selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)
* <\~>[selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)
* <\~>[selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)
* <\~>[selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete)
* <\~>[selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants)
* <\~>[selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts)
* <\~>[selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SellingPlanGroupUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
