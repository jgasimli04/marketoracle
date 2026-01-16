---
title: DiscountItems - GraphQL Admin
description: >-
  The type used to target the items required for discount eligibility, or the
  items to which the application of a discount might apply. For example, for a
  customer to be eligible for a discount, they're required to add an item from a
  specified collection to their order. Alternatively, a customer might be
  required to add a specific product or product variant. When using this type to
  target which items the discount will apply to, the discount might apply to all
  items on the order, or to specific products and product variants, or items in
  a given collection.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountItems.md'
---

# Discount​Items

union

Requires Apps must have `read_discounts` access scope.

The type used to target the items required for discount eligibility, or the items to which the application of a discount might apply. For example, for a customer to be eligible for a discount, they're required to add an item from a specified collection to their order. Alternatively, a customer might be required to add a specific product or product variant. When using this type to target which items the discount will apply to, the discount might apply to all items on the order, or to specific products and product variants, or items in a given collection.

## Possible types

* [All​Discount​Items](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems)

  OBJECT

  Represents a discount configuration that applies to all items in a customer's cart without restriction. This object enables store-wide promotions that affect every product equally.

  For example, a "Sitewide 10% Off Everything" sale would target all items, ensuring that every product in the customer's cart receives the promotional discount regardless of category or collection.

  This universal targeting approach simplifies promotional campaigns and provides customers with clear, straightforward savings across the entire product catalog.

  * all​Items

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether all items are eligible for the discount. This value always returns `true`.

* [Discount​Collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections)

  OBJECT

  A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied.

  * collections

    [Collection​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

    non-null

    The list of collections that the discount can have as a prerequisite or the list of collections to which the discount can be applied.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

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

* [Discount​Products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts)

  OBJECT

  A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied.

  * products

    [Product​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

    non-null

    The list of products that the discount can have as a prerequisite or the list of products to which the discount can be applied.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

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

  * product​Variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

    non-null

    The list of product variants that the discount can have as a prerequisite or the list of product variants to which the discount can be applied.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

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

## Fields with this union

* [Discount​Customer​Buys.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys#field-DiscountCustomerBuys.fields.items)

  OBJECT

  The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

* [Discount​Customer​Gets.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets#field-DiscountCustomerGets.fields.items)

  OBJECT

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

***

```graphql
union DiscountItems = AllDiscountItems | DiscountCollections | DiscountProducts
```
