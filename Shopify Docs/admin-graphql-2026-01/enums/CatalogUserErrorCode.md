---
title: CatalogUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CatalogUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogUserErrorCode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogUserErrorCode.md
---

# Catalog​User​Error​Code

enum

Possible error codes that can be returned by `CatalogUserError`.

## Valid values

* APP\_​CATALOG\_​PRICE\_​LIST\_​ASSIGNMENT

  An app catalog cannot be assigned to a price list.

* BLANK

  The input value is blank.

* CANNOT\_​ADD\_​MORE\_​THAN\_​ONE\_​MARKET

  The catalog can't be associated with more than one market.

* CANNOT\_​CREATE\_​APP\_​CATALOG

  Cannot create a catalog for an app.

* CANNOT\_​CREATE\_​MARKET\_​CATALOG

  Cannot create a catalog for a market.

* CANNOT\_​DELETE\_​APP\_​CATALOG

  Cannot delete a catalog for an app.

* CANNOT\_​DELETE\_​MARKET\_​CATALOG

  Cannot delete a catalog for a market.

* CANNOT\_​MODIFY\_​APP\_​CATALOG

  Cannot modify a catalog for an app.

* CANNOT\_​MODIFY\_​MARKET\_​CATALOG

  Cannot modify a catalog for a market.

* CATALOG\_​CONTEXT\_​DOES\_​NOT\_​SUPPORT\_​QUANTITY\_​PRICE\_​BREAKS

  Quantity price breaks can be associated only with company location catalogs or catalogs associated with compatible markets.

* CATALOG\_​CONTEXT\_​DOES\_​NOT\_​SUPPORT\_​QUANTITY\_​RULES

  Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.

* CATALOG\_​FAILED\_​TO\_​SAVE

  Catalog failed to save.

* CATALOG\_​NOT\_​FOUND

  The catalog wasn't found.

* COMPANY\_​LOCATION\_​CATALOG\_​STATUS\_​PLAN

  A company location catalog outside of a supported plan can only have an archived status.

* COMPANY\_​LOCATION\_​NOT\_​FOUND

  The company location could not be found.

* CONTEXT\_​ALREADY\_​ASSIGNED\_​TO\_​CATALOG

  Context driver already assigned to this catalog.

* CONTEXT\_​CATALOG\_​LIMIT\_​REACHED

  Cannot save the catalog because the catalog limit for the context was reached.

* CONTEXT\_​DRIVER\_​MISMATCH

  The arguments `contextsToAdd` and `contextsToRemove` must match existing catalog context type.

* COUNTRY\_​CATALOG\_​PRICE\_​LIST\_​ASSIGNMENT

  A country catalog cannot be assigned to a price list.

* COUNTRY\_​PRICE\_​LIST\_​ASSIGNMENT

  A country price list cannot be assigned to a catalog.

* INVALID

  The input value is invalid.

* INVALID\_​CATALOG\_​CONTEXT\_​TYPE

  The catalog context type is invalid.

* INVALID\_​CONTEXT\_​CHANGE

  Cannot change context to specified type.

* MANAGED\_​COUNTRY\_​BELONGS\_​TO\_​ANOTHER\_​CATALOG

  The managed country belongs to another catalog.

* MARKET\_​AND\_​PRICE\_​LIST\_​CURRENCY\_​MISMATCH

  The catalog's market and price list currencies do not match.

* MARKET\_​CATALOG\_​STATUS

  A market catalog must have an active status.

* MARKET\_​NOT\_​FOUND

  Market not found.

* MARKET\_​TAKEN

  Market already belongs to another catalog.

* MUST\_​PROVIDE\_​EXACTLY\_​ONE\_​CONTEXT\_​TYPE

  Must provide exactly one context type.

* PRICE\_​LIST\_​FAILED\_​TO\_​SAVE

  Price list failed to save.

* PRICE\_​LIST\_​LOCKED

  The price list is currently being modified. Please try again later.

* PRICE\_​LIST\_​NOT\_​ALLOWED\_​FOR\_​PRIMARY\_​MARKET

  A price list cannot be assigned to the primary market.

* PRICE\_​LIST\_​NOT\_​FOUND

  Price list not found.

* PUBLICATION\_​NOT\_​FOUND

  Publication not found.

* REQUIRES\_​CONTEXTS\_​TO\_​ADD\_​OR\_​REMOVE

  Must have `contexts_to_add` or `contexts_to_remove` argument.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNPERMITTED\_​ENTITLEMENTS\_​MARKET\_​CATALOGS

  Managing this catalog is not supported by your plan.

* UNSUPPORTED\_​CATALOG\_​ACTION

  Can't perform this action on a catalog of this type.

***

## Fields

* [Catalog​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError#field-CatalogUserError.fields.code)

  OBJECT

  Defines errors encountered while managing a catalog.

***

## Map

### Fields with this enum

* <-|[Catalog​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError#field-CatalogUserError.fields.code)
