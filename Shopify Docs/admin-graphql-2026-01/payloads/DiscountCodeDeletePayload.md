---
title: DiscountCodeDeletePayload - GraphQL Admin
description: Return type for `discountCodeDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountCodeDeletePayload.md
---

# Discount​Code​Delete​Payload

payload

Return type for `discountCodeDelete` mutation.

## Fields

* deleted​Code​Discount​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the code discount that was deleted.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete)

  mutation

  Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount codes that are no longer needed or have been replaced.

  For example, when a seasonal promotion ends or a discount code has been compromised, merchants can delete it entirely rather than just deactivating it, ensuring customers cannot attempt to use expired promotional codes.

  Use `DiscountCodeDelete` to:

  * persistently remove outdated promotional codes
  * Clean up discount code lists after campaigns end
  * Eliminate compromised or leaked discount codes
  * Maintain organized discount management

  Once deleted, the discount code cannot be recovered and any customer attempts to use it will fail. This differs from deactivation, which preserves the code for potential future reactivation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to delete.

  ***

***

## Map

### Mutations with this payload

* [discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/discountCodeDelete)
