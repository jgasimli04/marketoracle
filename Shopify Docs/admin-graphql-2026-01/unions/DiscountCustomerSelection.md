---
title: DiscountCustomerSelection - GraphQL Admin
description: >-
  The type used for targeting a set of customers who are eligible for the
  discount. For example, the discount might be available to all customers or it
  might only be available to a specific set of customers. You can define the set
  of customers by targeting a list of customer segments, or by targeting a list
  of specific customers.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection.md
---

# Discount​Customer​Selection

union

Requires Apps must have `read_discounts` access scope.

The type used for targeting a set of customers who are eligible for the discount. For example, the discount might be available to all customers or it might only be available to a specific set of customers. You can define the set of customers by targeting a list of customer segments, or by targeting a list of specific customers.

## Possible types

* [Discount​Customer​All](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerAll)

  OBJECT

  Creates the broadest possible discount reach by targeting all customers, regardless of their purchase history or segment membership. This gives merchants maximum flexibility to run store-wide promotions without worrying about customer eligibility restrictions.

  For example, a flash sale or grand opening promotion would target all customers to maximize participation and store visibility.

  Learn more about [customer targeting](https://help.shopify.com/manual/discounts/).

  * all​Customers

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount can be applied by all customers. This value is always `true`.

* [Discount​Customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomers)

  OBJECT

  Defines customer targeting for discounts through specific individual customers. This object allows merchants to create exclusive discounts that are only available to explicitly selected customers.

  For example, a VIP customer appreciation discount might target specific high-value customers by individually selecting them, or a beta program discount could be offered to selected early adopters.

  Use `DiscountCustomers` to:

  * Target specific individual customers for exclusive promotions
  * Create personalized discount experiences for selected customers
  * Offer special discounts to VIP or loyal customers
  * Provide exclusive access to promotions for specific individuals

  This targeting method requires you to add each customer who should be eligible for the discount. For broader targeting based on customer attributes or segments, use [`DiscountCustomerSegments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments) instead.

  Learn more about creating customer-specific discounts using [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) and [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate).

  * customers

    [\[Customer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    non-null

    The list of individual customers eligible for the discount.

* [Discount​Customer​Segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments)

  OBJECT

  Represents customer segments that are eligible to receive a specific discount, allowing merchants to target promotions to defined groups of customers. This enables personalized marketing campaigns based on customer behavior and characteristics.

  For example, a "VIP Customer 15% Off" promotion might target a segment of high-value repeat customers, while a "New Customer Welcome" discount could focus on first-time buyers.

  Segment-based discounts help merchants create more relevant promotional experiences and improve conversion rates by showing the right offers to the right customers at the right time.

  * segments

    [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

    non-null

    The list of customer segments who are eligible for the discount.

***

## Fields with this union

### Deprecated fields with this union

* [Discount​Code​App.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Basic.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Bxgy.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Free​Shipping.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.customerSelection)

  OBJECT

  Deprecated

***

```graphql
union DiscountCustomerSelection = DiscountCustomerAll | DiscountCustomerSegments | DiscountCustomers
```
