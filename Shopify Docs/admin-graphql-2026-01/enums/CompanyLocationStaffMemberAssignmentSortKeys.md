---
title: CompanyLocationStaffMemberAssignmentSortKeys - GraphQL Admin
description: The set of valid sort keys for the CompanyLocationStaffMemberAssignment query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationStaffMemberAssignmentSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationStaffMemberAssignmentSortKeys.md
---

# Company​Location​Staff​Member​Assignment​Sort​Keys

enum

The set of valid sort keys for the CompanyLocationStaffMemberAssignment query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Company​Location.staffMemberAssignments(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments.arguments.sortKey)

  ARGUMENT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

## Map

### Arguments with this enum

* <-|[Company​Location.staffMemberAssignments(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments.arguments.sortKey)
