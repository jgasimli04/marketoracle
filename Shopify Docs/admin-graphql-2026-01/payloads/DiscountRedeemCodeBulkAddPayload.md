---
title: DiscountRedeemCodeBulkAddPayload - GraphQL Admin
description: Return type for `discountRedeemCodeBulkAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountRedeemCodeBulkAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DiscountRedeemCodeBulkAddPayload.md
---

# Discount​Redeem​Code​Bulk​Add​Payload

payload

Return type for `discountRedeemCodeBulkAdd` mutation.

## Fields

* bulk​Creation

  [Discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

  The ID of bulk operation that creates multiple unique discount codes. You can use the [`discountRedeemCodeBulkCreation` query](https://shopify.dev/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation) to track the status of the bulk operation.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

  mutation

  Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * codes

    [\[Discount​Redeem​Code​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountRedeemCodeInput)

    required

    The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

  ***

***

## Map

### Mutations with this payload

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/discountRedeemCodeBulkAdd)
