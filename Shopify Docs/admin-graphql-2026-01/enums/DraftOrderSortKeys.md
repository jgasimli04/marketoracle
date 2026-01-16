---
title: DraftOrderSortKeys - GraphQL Admin
description: The set of valid sort keys for the DraftOrder query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys.md
---

# Draft​Order​Sort​Keys

enum

The set of valid sort keys for the DraftOrder query.

## Valid values

* CUSTOMER\_​NAME

  Sort by the `customer_name` value.

* ID

  Sort by the `id` value.

* NUMBER

  Sort by the `number` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* STATUS

  Sort by the `status` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Company.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer​Merge​Preview​Default​Fields.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  The fields that will be kept as part of a customer merge preview.

* [Query​Root.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [draft​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Company.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders.arguments.sortKey)
* <-|[Company​Contact.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.sortKey)
* <-|[Company​Location.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.sortKey)
* <-|[Customer​Merge​Preview​Default​Fields.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders.arguments.sortKey)
* <-|[Query​Root.draftOrders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.draftOrders.arguments.sortKey)
* <-|[draft​Orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders#arguments-sortKey)
