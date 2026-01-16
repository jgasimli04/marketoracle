---
title: HasCompareDigest - GraphQL Admin
description: >-
  Represents a summary of the current version of data in a resource.


  The `compare_digest` field can be used as input for mutations that implement a
  compare-and-swap mechanism.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest.md
---

# Has​Compare​Digest

interface

Represents a summary of the current version of data in a resource.

The `compare_digest` field can be used as input for mutations that implement a compare-and-swap mechanism.

## Fields

* compare​Digest

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The data stored in the resource, represented as a digest.

***

## Types implemented in

* [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

  * compare​Digest

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The data stored in the resource, represented as a digest.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the metafield was created.

  * definition

    [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

    The metafield definition that the metafield belongs to, if any.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * json​Value

    [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    non-null

    The data stored in the metafield in JSON format.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The unique identifier for the metafield within its namespace.

  * legacy​Resource​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The ID of the corresponding resource in the REST Admin API.

  * namespace

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The container for a group of metafields that the metafield is associated with.

  * owner

    [Has​Metafields!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    non-null

    The resource that the metafield is attached to.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    non-null

    The type of resource that the metafield is attached to.

  * reference

    [Metafield​Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

    Returns a reference object if the metafield definition's type is a resource reference.

  * references

    [Metafield​Reference​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection)

    A list of reference objects if the metafield's type is a resource reference list.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    ***

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The type of data that's stored in the metafield. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the metafield was updated.

  * value

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

***

##### Variables

```json
{
	"compareDigest": ""
}
```

##### Schema

```graphql
interface HasCompareDigest {
  compareDigest: String!
}
```
