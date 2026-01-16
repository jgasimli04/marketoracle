---
title: ProductVariantRelationshipBulkUpdateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ProductVariantRelationshipBulkUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantRelationshipBulkUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantRelationshipBulkUpdateUserErrorCode.md
---

# Product​Variant​Relationship​Bulk​Update​User​Error​Code

enum

Possible error codes that can be returned by `ProductVariantRelationshipBulkUpdateUserError`.

## Valid values

* CHILD\_​PRODUCT\_​VARIANT\_​CANNOT\_​BE\_​COMBINED\_​LISTING

  Combined listing cannot be child product variants.

* CIRCULAR\_​REFERENCE

  A parent product variant cannot contain itself as a component.

* DUPLICATE\_​PRODUCT\_​VARIANT\_​RELATIONSHIP

  A parent product variant must not contain duplicate product variant relationships.

* EXCEEDED\_​PRODUCT\_​VARIANT\_​RELATIONSHIP\_​LIMIT

  Exceeded the maximum allowable product variant relationships in a parent product variant.

* FAILED\_​TO\_​CREATE

  Unable to create parent product variant.

* FAILED\_​TO\_​REMOVE

  Unable to remove product variant relationships.

* FAILED\_​TO\_​UPDATE

  Unable to update product variant relationships.

* FAILED\_​TO\_​UPDATE\_​PARENT\_​PRODUCT\_​VARIANT\_​PRICE

  Unable to update parent product variant price.

* INVALID\_​QUANTITY

  Product variant relationships must have a quantity greater than 0.

* MUST\_​SPECIFY\_​COMPONENTS

  The product variant relationships to remove must be specified if all the parent product variant's components aren't being removed.

* NESTED\_​PARENT\_​PRODUCT\_​VARIANT

  Nested parent product variants aren't supported.

* PARENT\_​PRODUCT\_​VARIANT\_​CANNOT\_​BE\_​COMBINED\_​LISTING

  Combined listing cannot be parent product variants.

* PARENT\_​PRODUCT\_​VARIANT\_​CANNOT\_​BE\_​GIFT\_​CARD

  Gift cards cannot be parent product variants.

* PARENT\_​PRODUCT\_​VARIANT\_​CANNOT\_​REQUIRE\_​SELLING\_​PLAN

  Parent product variants cannot require a selling plan.

* PARENT\_​REQUIRED

  A parent product variant ID or product ID must be provided.

* PRODUCT\_​EXPANDER\_​APP\_​OWNERSHIP\_​ALREADY\_​EXISTS

  The products for these product variants are already owned by another App.

* PRODUCT\_​VARIANT\_​RELATIONSHIP\_​TYPE\_​CONFLICT

  A Core type relationship cannot be added to a composite product variant with SFN type relationships.

* PRODUCT\_​VARIANTS\_​NOT\_​COMPONENTS

  Some of the provided product variants are not components of the specified parent product variant.

* PRODUCT\_​VARIANTS\_​NOT\_​FOUND

  The product variants were not found.

* UNEXPECTED\_​ERROR

  Unexpected error.

* UNSUPPORTED\_​MULTIPACK\_​RELATIONSHIP

  Multipack bundles are not supported.

* UPDATE\_​PARENT\_​VARIANT\_​PRICE\_​REQUIRED

  A price must be provided for a parent product variant if the price calculation is set to fixed.

***

## Fields

* [Product​Variant​Relationship​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError#field-ProductVariantRelationshipBulkUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `ProductVariantRelationshipBulkUpdate`.

***

## Map

### Fields with this enum

* <-|[Product​Variant​Relationship​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError#field-ProductVariantRelationshipBulkUpdateUserError.fields.code)
