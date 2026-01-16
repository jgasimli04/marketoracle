---
title: CombinedListingUpdateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CombinedListingUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingUpdateUserErrorCode.md
---

# Combined​Listing​Update​User​Error​Code

enum

Possible error codes that can be returned by `CombinedListingUpdateUserError`.

## Valid values

* CANNOT\_​HAVE\_​DUPLICATED\_​PRODUCTS

  Unable to add duplicated products.

* CANNOT\_​HAVE\_​PARENT\_​AS\_​CHILD

  Unable to add a product that is a parent.

* CANNOT\_​HAVE\_​REPEATED\_​OPTION\_​VALUES

  Option values cannot be repeated.

* CANNOT\_​HAVE\_​REPEATED\_​OPTIONS

  Unable to add products with repeated options.

* CANT\_​ADD\_​OPTIONS\_​VALUES\_​IF\_​ALREADY\_​EXISTS

  Unable to add options values that are already in use.

* COMBINED\_​LISTINGS\_​NOT\_​ENABLED

  Combined listings feature is not enabled.

* EDIT\_​AND\_​REMOVE\_​ON\_​SAME\_​PRODUCTS

  Cannot perform edit and remove on same products.

* FAILED\_​TO\_​ADD\_​PRODUCTS

  Unable to add products.

* FAILED\_​TO\_​REMOVE\_​PRODUCTS

  Unable to remove products.

* FAILED\_​TO\_​UPDATE\_​PRODUCTS

  Unable to update products.

* LINKED\_​METAFIELD\_​CANNOT\_​BE\_​CHANGED

  An option linked to a metafield cannot be linked to a different metafield.

* LINKED\_​METAFIELD\_​VALUE\_​MISSING

  Linked metafield value missing from `optionsAndValues` field.

* LINKED\_​METAFIELDS\_​CANNOT\_​BE\_​REPEATED

  The same metafield cannot be linked to multiple options.

* LINKED\_​OPTIONS\_​NOT\_​SUPPORTED\_​FOR\_​SHOP

  Linked options are currently not supported for this shop.

* MISSING\_​OPTION\_​VALUES

  The optionsAndValues field is required for this operation.

* MUST\_​HAVE\_​SELECTED\_​OPTION\_​VALUES

  Selected option values cannot be empty.

* OPTION\_​NAME\_​CANNOT\_​BE\_​BLANK

  Unable to add products with blank option names.

* OPTION\_​NAME\_​CONTAINS\_​INVALID\_​CHARACTERS

  Option name contains invalid characters.

* OPTION\_​NOT\_​FOUND

  Option does not exist.

* OPTION\_​VALUES\_​CANNOT\_​BE\_​BLANK

  Unable to update options with blank option values.

* OPTION\_​VALUES\_​CANNOT\_​BE\_​EMPTY

  Unable to update options with no option values.

* OPTION\_​VALUES\_​MUST\_​BE\_​COMPLETE

  The options\_and\_values field must contain all option values used in the combined listing.

* OPTIONS\_​MUST\_​BE\_​EQUAL\_​TO\_​THE\_​OTHER\_​COMPONENTS

  All child products must include the same options.

* PARENT\_​PRODUCT\_​CANNOT\_​BE\_​COMBINED\_​LISTING\_​CHILD

  Parent product cannot be a combined listing child.

* PARENT\_​PRODUCT\_​MUST\_​BE\_​A\_​COMBINED\_​LISTING

  Unable to update components for a product that isn't a combined listing.

* PARENT\_​PRODUCT\_​MUST\_​HAVE\_​CATEGORY

  The combined listing parent product must have a product category to use linked metafield options.

* PARENT\_​PRODUCT\_​NOT\_​FOUND

  Parent product not found.

* PRODUCT\_​IS\_​ALREADY\_​A\_​CHILD

  Unable to add a product that is already a child.

* PRODUCT\_​MEMBERSHIP\_​NOT\_​FOUND

  Failed to remove mebmership due to invalid input.

* PRODUCT\_​NOT\_​FOUND

  Unable to add products that do not exist.

* TITLE\_​TOO\_​LONG

  The title cannot be longer than 255 characters.

* TOO\_​MANY\_​PRODUCTS

  You have reached the maximum number of products that can be added to an individual combined listing.

* TOO\_​MANY\_​VARIANTS

  You have reached the maximum number of variants across all products for an individual combined listing.

* UNEXPECTED\_​ERROR

  An unexpected error occurred.

***

## Fields

* [Combined​Listing​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError#field-CombinedListingUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `CombinedListingUpdate`.

***

## Map

### Fields with this enum

* <-|[Combined​Listing​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError#field-CombinedListingUpdateUserError.fields.code)
