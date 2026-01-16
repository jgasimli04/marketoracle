---
title: PublicationUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PublicationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PublicationUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PublicationUserErrorCode.md
---

# Publication​User​Error​Code

enum

Possible error codes that can be returned by `PublicationUserError`.

## Valid values

* BLANK

  The input value is blank.

* CANNOT\_​MODIFY\_​APP\_​CATALOG

  Cannot modify a catalog for an app.

* CANNOT\_​MODIFY\_​APP\_​CATALOG\_​PUBLICATION

  Can't modify a publication that belongs to an app catalog.

* CANNOT\_​MODIFY\_​MARKET\_​CATALOG

  Cannot modify a catalog for a market.

* CANNOT\_​MODIFY\_​MARKET\_​CATALOG\_​PUBLICATION

  Can't modify a publication that belongs to a market catalog.

* CATALOG\_​NOT\_​FOUND

  Catalog does not exist.

* INVALID

  The input value is invalid.

* INVALID\_​PUBLISHABLE\_​ID

  Publishable ID not found.

* MARKET\_​NOT\_​FOUND

  Market does not exist.

* PRODUCT\_​TYPE\_​INCOMPATIBLE\_​WITH\_​CATALOG\_​TYPE

  A product publication cannot be created because the catalog type associated with this publication does not permit publications of this product type.

* PUBLICATION\_​LOCKED

  The publication is currently being modified. Please try again later.

* PUBLICATION\_​NOT\_​FOUND

  Publication not found.

* PUBLICATION\_​UPDATE\_​LIMIT\_​EXCEEDED

  The limit for simultaneous publication updates has been exceeded.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNSUPPORTED\_​PUBLICATION\_​ACTION

  Can't perform this action on a publication.

* UNSUPPORTED\_​PUBLISHABLE\_​TYPE

  A catalog publication can only contain products.

***

## Fields

* [Publication​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError#field-PublicationUserError.fields.code)

  OBJECT

  Defines errors encountered while managing a publication.

***

## Map

### Fields with this enum

* <-|[Publication​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError#field-PublicationUserError.fields.code)
