---
title: MarketUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `MarketUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketUserErrorCode'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketUserErrorCode.md
---

# Market​User​Error​Code

enum

Possible error codes that can be returned by `MarketUserError`.

## Valid values

* B2B\_​MARKET\_​MUST\_​BE\_​MERCHANT\_​MANAGED

  B2B markets must be merchant managed.

* BLANK

  The input value is blank.

* CANNOT\_​ADD\_​CUSTOMER\_​DOMAIN

  Can't add customer account domain to a market.

* CANNOT\_​DELETE\_​ONLY\_​REGION

  Can't delete the only region in a market.

* CANNOT\_​DELETE\_​PRIMARY\_​MARKET

  Can't delete the primary market.

* CANNOT\_​DISABLE\_​PRIMARY\_​MARKET

  Can't disable the primary market.

* CANNOT\_​HAVE\_​BOTH\_​SUBFOLDER\_​AND\_​DOMAIN\_​WEB\_​PRESENCES

  Can't have both subfolder and domain web presences.

* CANNOT\_​HAVE\_​MULTIPLE\_​SUBFOLDERS\_​PER\_​MARKET

  Can't have multiple subfolder web presences per market.

* CANNOT\_​HAVE\_​SUBFOLDER\_​AND\_​DOMAIN

  Can't pass both `subfolderSuffix` and `domainId`.

* CANNOT\_​SET\_​DEFAULT\_​LOCALE\_​TO\_​NULL

  Can't set default locale to null.

* CATALOG\_​CONDITION\_​TYPES\_​MUST\_​BE\_​THE\_​SAME

  Catalog condition types must be the same for all conditions on a catalog.

* CATALOG\_​NOT\_​COMPATIBLE\_​WITH\_​CONDITION\_​TYPES

  Catalogs and condition types are not compatible with each other.

* CATALOG\_​TYPE\_​NOT\_​SUPPORTED

  A market can only have market catalogs.

* CATALOGS\_​WITH\_​VOLUME\_​PRICING\_​OR\_​QUANTITY\_​RULES\_​NOT\_​SUPPORTED

  Catalogs with volume pricing or quantity rules are not supported for the specified condition types.

* CONDITIONS\_​NOT\_​FOUND

  One or more condition IDs were not found.

* CONTAINS\_​REGIONS\_​THAT\_​CANNOT\_​BE\_​MANAGED

  Contains regions that cannot be managed.

* CUSTOMIZATIONS\_​NOT\_​FOUND

  One or more customizations were not found.

* DISABLED\_​LANGUAGE

  The language isn't enabled on the store.

* DOMAIN\_​NOT\_​FOUND

  Domain was not found.

* DUPLICATE\_​LANGUAGES

  Duplicates found in languages.

* DUPLICATE\_​REGION\_​MARKET

  Duplicate region market.

* DUPLICATE\_​UNIQUE\_​MARKET

  Duplicate unique market.

* EXCEEDS\_​MAX\_​MULTI\_​CONTEXT\_​MARKETS

  Exceeds max multi-context markets.

* GENERIC\_​ERROR

  An error occurred. See the message for details.

* INCLUSION

  The input value isn't included in the list.

* INCLUSIVE\_​PRICING\_​NOT\_​COMPATIBLE\_​WITH\_​CONDITION\_​TYPES

  Inclusive pricing cannot be added to a market with the specified condition types.

* INCOMPATIBLE\_​CONDITIONS

  The specified conditions are not compatible with each other.

* INVALID

  The input value is invalid.

* INVALID\_​PROVINCE\_​FORMAT

  The province format is invalid.

* INVALID\_​STATUS\_​AND\_​ENABLED\_​COMBINATION

  Invalid combination of status and enabled.

* LOCATION\_​MATCH\_​ALL\_​REQUIRES\_​ONE\_​SPECIFIC\_​REGION

  Location match all is only valid with one non-match all region.

* LOCATION\_​REGION\_​COUNTRY\_​MISMATCH

  A location's country does not match the region's country.

* MANAGED\_​MARKET

  The currency settings of the given market cannot be changed because the market manager has exclusive control of pricing.

* MANAGED\_​MARKETS\_​CATALOG\_​NOT\_​ALLOWED

  Catalogs created by Managed Markets cannot be added to a market.

* MARKET\_​CANT\_​HAVE\_​DIRECT\_​CONNECTION\_​CATALOG

  A direct connection catalog can't be attached to a market.

* MARKET\_​NOT\_​FOUND

  The market wasn't found.

* MARKET\_​REACHED\_​WEB\_​PRESENCE\_​LIMIT

  Can't add another web presence to the market.

* MISSING\_​PROVINCE\_​CODE

  The province code is missing.

* MIXED\_​COUNTRY\_​LOCATIONS\_​NOT\_​ALLOWED

  All retail locations in a market must be in the same country.

* MULTIPLE\_​CURRENCIES\_​NOT\_​SUPPORTED

  The shop's payment gateway does not support enabling more than one currency.

* MUST\_​HAVE\_​AT\_​LEAST\_​ONE\_​ACTIVE\_​REGION\_​MARKET

  Can’t delete, disable, or change the type of the last region market.

* NO\_​LANGUAGES

  No languages selected.

* NOT\_​ENTITLED\_​TO\_​ACTIVATE\_​MARKET

  Your shop is not entitled to activate markets of this type.

* POS\_​LOCATION\_​MARKET\_​MUST\_​BE\_​MERCHANT\_​MANAGED

  POS location markets must be merchant managed.

* PROVINCE\_​DOES\_​NOT\_​EXIST

  The province doesn't exist.

* REGION\_​NOT\_​FOUND

  The market region wasn't found.

* REGION\_​SPECIFIC\_​LANGUAGE

  Cannot add region-specific language.

* REQUIRES\_​DOMAIN\_​OR\_​SUBFOLDER

  One of `subfolderSuffix` or `domainId` is required.

* RETAIL\_​LOCATION\_​CURRENCY\_​MUST\_​BE\_​LOCAL

  Retail location currency must be local.

* SHOP\_​MUST\_​HAVE\_​PRIMARY\_​DOMAIN\_​WEB\_​PRESENCE

  The shop must have a web presence that uses the primary domain.

* SPECIFIED\_​CONDITIONS\_​CANNOT\_​BE\_​EMPTY

  Specified conditions cannot be empty.

* SPECIFIED\_​NOT\_​VALID\_​FOR\_​INPUT

  With an ID list in input, SPECIFIED is not needed.

* SUBFOLDER\_​SUFFIX\_​CANNOT\_​BE\_​SCRIPT\_​CODE

  The subfolder suffix is invalid, please provide a different value.

* SUBFOLDER\_​SUFFIX\_​MUST\_​BE\_​AT\_​LEAST\_​2\_​LETTERS

  The subfolder suffix must be at least 2 letters.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNPERMITTED\_​ENTITLEMENTS\_​MARKET\_​CATALOGS

  Managing this catalog is not supported by your plan.

* UNPUBLISHED\_​LANGUAGE

  The language isn't published to the store.

* UNSUPPORTED\_​COUNTRY\_​REGION

  Can't add unsupported country or region.

* UNSUPPORTED\_​CURRENCY

  The specified currency is not supported.

* USER\_​LACKS\_​PERMISSION

  The user doesn't have permission access to create or edit markets.

* WEB\_​PRESENCE\_​NOT\_​COMPATIBLE\_​WITH\_​CONDITION\_​TYPES

  Web presences and condition types are not compatible with each other.

* WEB\_​PRESENCE\_​NOT\_​FOUND

  The market web presence wasn't found.

* WEB\_​PRESENCE\_​REACHED\_​MARKETS\_​LIMIT

  Can't add web presence to the another market.

* WILDCARD\_​NOT\_​SUPPORTED

  Matching ALL or NONE isn't supported for this driver type.

### Deprecated valid values

* CANNOT\_​ADD\_​REGIONS\_​TO\_​PRIMARY\_​MARKET

  Deprecated

* CANNOT\_​ADD\_​WEB\_​PRESENCE\_​TO\_​PRIMARY\_​MARKET

  Deprecated

* CANNOT\_​DELETE\_​PRIMARY\_​MARKET\_​WEB\_​PRESENCE

  Deprecated

* INVALID\_​RESPONDER\_​FOR\_​PROVINCE\_​DRIVEN\_​MARKET

  Deprecated

* MARKET\_​NOT\_​COMPATIBLE\_​WITH\_​CONDITION\_​TYPES

  Deprecated

* NO\_​LOCAL\_​CURRENCIES\_​ON\_​SINGLE\_​COUNTRY\_​MARKET

  Deprecated

* NO\_​ROUNDING\_​ON\_​LEGACY\_​MARKET

  Deprecated

* PRIMARY\_​MARKET\_​MUST\_​USE\_​PRIMARY\_​DOMAIN

  Deprecated

* REQUIRES\_​EXACTLY\_​ONE\_​OPTION

  Deprecated

* SHOP\_​REACHED\_​MARKETS\_​LIMIT

  Deprecated

* SUBFOLDER\_​SUFFIX\_​MUST\_​CONTAIN\_​ONLY\_​LETTERS

  Deprecated

* UNIFIED\_​MARKETS\_​NOT\_​ENABLED

  Deprecated

* WEB\_​PRESENCE\_​RETAIL\_​LOCATION

  Deprecated

***

## Fields

* [Market​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError#field-MarketUserError.fields.code)

  OBJECT

  Defines errors encountered while managing a Market.

***

## Map

### Fields with this enum

* <-|[Market​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError#field-MarketUserError.fields.code)
