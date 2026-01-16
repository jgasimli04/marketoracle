---
title: StoreCreditAccountConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple StoreCreditAccounts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection.md
---

# Store​Credit​Account​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccounts.

## Fields with this connection

* [Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

  INTERFACE

  Represents information about the store credit accounts associated to the specified owner.

***

## Possible returns

* edges

  [\[Store​Credit​Account​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  A list of nodes that are contained in StoreCreditAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)
* {}[Customer.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)
* ||-[Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

### Possible returns

* <->[Store​Credit​Account​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-edges)
* <->[Store​Credit​Account​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-nodes)
* <->[Store​Credit​Account​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-pageInfo)
