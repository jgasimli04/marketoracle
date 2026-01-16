---
title: DiscountCodeRedeemCodeBulkDeletePayload - GraphQL Admin
description: Return type for `discountCodeRedeemCodeBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeRedeemCodeBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeRedeemCodeBulkDeletePayload.md
---

# Discount​Code​Redeem​Code​Bulk​Delete​Payload

payload

Return type for `discountCodeRedeemCodeBulkDelete` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the discount codes.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)

  mutation

  Asynchronously delete [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be removed from. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators that you can use to search for code discounts. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

    For a list of accepted values for the `search` field, refer to the [`query` argument on the `codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#argument-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch#field-id).

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the [`DiscountRedeemCode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode#field-id) objects to delete. For example, `gid://shopify/DiscountRedeemCode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeRedeemCodeBulkDelete)
