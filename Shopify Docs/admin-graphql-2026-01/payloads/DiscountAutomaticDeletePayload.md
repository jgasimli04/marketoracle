---
title: DiscountAutomaticDeletePayload - GraphQL Admin
description: Return type for `discountAutomaticDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountAutomaticDeletePayload.md
---

# Discount​Automatic​Delete​Payload

payload

Return type for `discountAutomaticDelete` mutation.

## Fields

* deleted​Automatic​Discount​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the automatic discount that was deleted.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDelete)

  mutation

  Deletes an existing automatic discount from the store, permanently removing it from all future order calculations. This mutation provides a clean way to remove promotional campaigns that are no longer needed.

  For example, when a seasonal promotion ends or a flash sale concludes, merchants can use this mutation to ensure the discount no longer applies to new orders while preserving historical order data.

  Use `DiscountAutomaticDelete` to:

  * Remove expired promotional campaigns
  * Clean up test discounts during development
  * Delete automatic discounts that conflict with new promotions
  * Maintain a clean discount configuration

  The mutation returns the ID of the deleted discount for confirmation and any validation errors if the deletion cannot be completed. Once deleted, the automatic discount will no longer appear in discount lists or apply to new customer orders.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to delete.

  ***

***

## Map

### Mutations with this payload

* [discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/discountAutomaticDelete)
