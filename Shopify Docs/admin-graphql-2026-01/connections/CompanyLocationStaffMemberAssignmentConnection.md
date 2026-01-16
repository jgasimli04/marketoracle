---
title: CompanyLocationStaffMemberAssignmentConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CompanyLocationStaffMemberAssignments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection.md
---

# Company​Location​Staff​Member​Assignment​Connection

connection

An auto-generated type for paginating through multiple CompanyLocationStaffMemberAssignments.

## Fields with this connection

* [Company​Location.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

## Possible returns

* edges

  [\[Company​Location​Staff​Member​Assignment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Location​Staff​Member​Assignment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  non-null

  A list of nodes that are contained in CompanyLocationStaffMemberAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Company​Location.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments)

### Possible returns

* <->[Company​Location​Staff​Member​Assignment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-edges)
* <->[Company​Location​Staff​Member​Assignment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-nodes)
* <->[Company​Location​Staff​Member​Assignment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-pageInfo)
