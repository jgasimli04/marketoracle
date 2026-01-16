---
title: financeKycInformation - GraphQL Admin
description: >-
  Returns the KYC information for the shop's Shopify Payments account, used in
  embedded finance apps.
api_version: 2026-01
api_name: admin
type: query
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/financeKycInformation.md
---

# finance​Kyc​Information

query

Returns the KYC information for the shop's Shopify Payments account, used in embedded finance apps.

## Possible returns

* Finance​Kyc​Information

  [Finance​Kyc​Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceKycInformation)

  Shopify Payments account information shared with embedded finance applications.

  * business​Address

    [Shopify​Payments​Address​Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAddressBasic)

    The legal entity business address.

  * business​Type

    [Shopify​Payments​Business​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBusinessType)

    The legal entity business type.

  * industry

    [Shopify​Payments​Merchant​Category​Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsMerchantCategoryCode)

    Business industry.

  * legal​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the business legal name.

  * shop​Owner

    [Financial​Kyc​Shop​Owner!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialKycShopOwner)

    non-null

    The shop owner information for financial KYC purposes.

  * tax​Identification

    [Shopify​Payments​Tax​Identification](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTaxIdentification)

    Tax identification information.

***

## Examples

* ### financeKycInformation reference

## Query Reference

```graphql
{
  financeKycInformation {
    # financeKycInformation fields
  }
}
```
