---
title: DiscountAutomaticBulkDeletePayload - GraphQL Admin
description: Return type for `discountAutomaticBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticBulkDeletePayload.md
---

# Discount​Automatic​Bulk​Delete​Payload

payload

Return type for `discountAutomaticBulkDelete` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the automatic discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)

  mutation

  Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This mutation processes deletions asynchronously to handle large volumes without blocking other operations.

  For example, when cleaning up expired seasonal promotions or removing outdated automatic discounts across product categories, merchants can delete dozens of discounts simultaneously rather than processing each individually.

  Use `DiscountAutomaticBulkDelete` to:

  * Remove multiple automatic discounts efficiently
  * Clean up expired or obsolete promotions
  * Streamline discount management workflows
  * Process large-scale discount removals asynchronously

  The operation returns a job object for tracking deletion progress and any validation errors encountered during processing.

  Learn more about [discount management](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomatic).

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering automatic discounts to delete.

    For more information on the list of supported fields and search syntax, refer to the [AutomaticDiscountNodes query section](https://shopify.dev/api/admin-graphql/latest/queries/automaticDiscountNodes#argument-automaticdiscountnodes-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search to use for filtering automatic discounts to delete.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the automatic discounts to delete.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticBulkDelete)
