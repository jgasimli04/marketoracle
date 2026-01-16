---
title: DiscountCodeBulkDeletePayload - GraphQL Admin
description: Return type for `discountCodeBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBulkDeletePayload.md
---

# Discount​Code​Bulk​Delete​Payload

payload

Return type for `discountCodeBulkDelete` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)

  mutation

  Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to delete. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to delete.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBulkDelete)
