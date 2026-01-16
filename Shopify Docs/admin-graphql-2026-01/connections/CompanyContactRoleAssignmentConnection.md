---
title: CompanyContactRoleAssignmentConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CompanyContactRoleAssignments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection.md
---

# Company​Contact​Role​Assignment​Connection

connection

An auto-generated type for paginating through multiple CompanyContactRoleAssignments.

## Fields with this connection

* [Company​Contact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.roleAssignments)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

## Possible returns

* edges

  [\[Company​Contact​Role​Assignment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact​Role​Assignment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  non-null

  A list of nodes that are contained in CompanyContactRoleAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company​Contact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.roleAssignments)
* {}[Company​Location.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

### Possible returns

* <->[Company​Contact​Role​Assignment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-edges)
* <->[Company​Contact​Role​Assignment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-nodes)
* <->[Company​Contact​Role​Assignment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-pageInfo)
