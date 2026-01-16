---
title: ProductOptionsReorderUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ProductOptionsReorderUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsReorderUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsReorderUserErrorCode.md
---

# Product​Options​Reorder​User​Error​Code

enum

Possible error codes that can be returned by `ProductOptionsReorderUserError`.

## Valid values

* CANNOT\_​MAKE\_​CHANGES\_​IF\_​VARIANT\_​IS\_​MISSING\_​REQUIRED\_​SKU

  At least one of the product variants has invalid SKUs.

* DUPLICATED\_​OPTION\_​NAME

  Duplicated option name.

* DUPLICATED\_​OPTION\_​VALUE

  Duplicated option value.

* MISSING\_​OPTION\_​NAME

  Missing option name.

* MISSING\_​OPTION\_​VALUE

  Missing option value.

* MIXING\_​ID\_​AND\_​NAME\_​KEYS\_​IS\_​NOT\_​ALLOWED

  Cannot specify different options or option values using mixed id and name reference key.

* NO\_​KEY\_​ON\_​REORDER

  On reorder, this key cannot be used.

* OPTION\_​ID\_​DOES\_​NOT\_​EXIST

  Option id does not exist.

* OPTION\_​NAME\_​DOES\_​NOT\_​EXIST

  Option name does not exist.

* OPTION\_​VALUE\_​DOES\_​NOT\_​EXIST

  Option value does not exist.

* OPTION\_​VALUE\_​ID\_​DOES\_​NOT\_​EXIST

  Option value id does not exist.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

***

## Fields

* [Product​Options​Reorder​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsReorderUserError#field-ProductOptionsReorderUserError.fields.code)

  OBJECT

  Error codes for failed `ProductOptionsReorder` mutation.

***

## Map

### Fields with this enum

* <-|[Product​Options​Reorder​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsReorderUserError#field-ProductOptionsReorderUserError.fields.code)
