---
title: SegmentFilter - GraphQL Admin
description: The filters used in segment queries associated with a shop.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter.md
---

# Segment​Filter

interface

Requires `read_customers` access scope.

The filters used in segment queries associated with a shop.

## Fields

* localized​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized name of the filter.

* multi​Value

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a file can have multiple values for a single customer.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query name of the filter.

***

## Types implemented in

* [Segment​Association​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAssociationFilter)

  OBJECT

  A filter that takes a value that's associated with an object. For example, the `tags` field is associated with the [`Customer`](https://shopify.dev/api/admin-graphql/latest/objects/Customer) object.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​Boolean​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentBooleanFilter)

  OBJECT

  A filter with a Boolean value that's been added to a segment query.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​Date​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentDateFilter)

  OBJECT

  A filter with a date value that's been added to a segment query.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​Enum​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEnumFilter)

  OBJECT

  Categorical filter options for building customer segments using predefined value sets like countries, subscription statuses, or order frequencies.

  For example, a "Customer Location" enum filter provides options like "United States," "Canada," and "United Kingdom."

  Use this object to:

  * Access available categorical filter options
  * Understand filter capabilities and constraints
  * Build user interfaces for segment creation

  Includes localized display names, indicates whether multiple values can be selected, and provides technical query names for API operations.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​Event​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilter)

  OBJECT

  A filter that's used to segment customers based on the date that an event occured. For example, the `product_bought` event filter allows you to segment customers based on what products they've bought.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * parameters

    [\[Segment​Event​Filter​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter)

    non-null

    The parameters for an event segment filter.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

  * return​Value​Type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The return value type for an event segment filter.

* [Segment​Float​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentFloatFilter)

  OBJECT

  A filter with a double-precision, floating-point value that's been added to a segment query.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * max​Range

    [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    The maximum range a filter can have.

  * min​Range

    [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    The minimum range a filter can have.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​Integer​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentIntegerFilter)

  OBJECT

  A filter with an integer that's been added to a segment query.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * max​Range

    [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    The maximum range a filter can have.

  * min​Range

    [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    The minimum range a filter can have.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

* [Segment​String​Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStringFilter)

  OBJECT

  A filter with a string that's been added to a segment query.

  * localized​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The localized name of the filter.

  * multi​Value

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a file can have multiple values for a single customer.

  * query​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The query name of the filter.

***

##### Variables

```json
{
	"localizedName": "",
	"multiValue": "",
	"queryName": ""
}
```

##### Schema

```graphql
interface SegmentFilter {
  localizedName: String!
  multiValue: Boolean!
  queryName: String!
}
```
