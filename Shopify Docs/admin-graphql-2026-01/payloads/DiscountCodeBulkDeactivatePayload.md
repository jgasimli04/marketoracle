---
title: DiscountCodeBulkDeactivatePayload - GraphQL Admin
description: Return type for `discountCodeBulkDeactivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBulkDeactivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeBulkDeactivatePayload.md
---

# Discount​Code​Bulk​Deactivate​Payload

payload

Return type for `discountCodeBulkDeactivate` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deactivates the discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)

  mutation

  Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to deactivate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to deactivate.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeBulkDeactivate)
