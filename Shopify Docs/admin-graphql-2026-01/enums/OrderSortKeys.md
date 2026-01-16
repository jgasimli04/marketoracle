---
title: OrderSortKeys - GraphQL Admin
description: The set of valid sort keys for the Order query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys.md'
---

# Order​Sort​Keys

enum

The set of valid sort keys for the Order query.

## Valid values

* CREATED\_​AT

  Sorts by the date and time the order was created.

* CURRENT\_​TOTAL\_​PRICE

  Sorts by the current total price of an order in the shop currency, including any returns/refunds/removals.

* CUSTOMER\_​NAME

  Sorts by the customer's name.

* DESTINATION

  Sort by shipping address to analyze regional sales patterns or plan logistics.

* FINANCIAL\_​STATUS

  Sorts by the financial status of the order.

* FULFILLMENT\_​STATUS

  Sorts by the order's fulfillment status.

* ID

  Sort by the `id` value.

* ORDER\_​NUMBER

  Sorts by the order number.

* PO\_​NUMBER

  Sort by the purchase order number to match external procurement systems or track recent orders.

* PROCESSED\_​AT

  Sorts by the date and time the order was processed.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TOTAL\_​ITEMS\_​QUANTITY

  Sort by the total quantity of all line items to identify large purchases or analyze inventory demand patterns.

* TOTAL\_​PRICE

  Sorts by the total sold price of an order in the shop currency, excluding any returns/refunds/removals.

* UPDATED\_​AT

  Sorts by the date and time the order was last updated.

***

## Fields

* [Company.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders.arguments.sortKey)

  ARGUMENT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.sortKey)

  ARGUMENT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.sortKey)

  ARGUMENT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)

  ARGUMENT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Customer​Merge​Preview​Default​Fields.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders.arguments.sortKey)

  ARGUMENT

  The fields that will be kept as part of a customer merge preview.

* [Shop.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orders.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.orders.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Company.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders.arguments.sortKey)
* <-|[Company​Contact.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.sortKey)
* <-|[Company​Location.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.sortKey)
* <-|[Customer.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)
* <-|[Customer​Merge​Preview​Default​Fields.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders.arguments.sortKey)
* <-|[Shop.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orders.arguments.sortKey)
* <-|[Query​Root.orders(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.orders.arguments.sortKey)
* <-|[orders.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-sortKey)
