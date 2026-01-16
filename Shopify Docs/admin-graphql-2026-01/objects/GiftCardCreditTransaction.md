---
title: GiftCardCreditTransaction - GraphQL Admin
description: A credit transaction which increases the gift card balance.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction.md
---

# Gift​Card​Credit​Transaction

object

Requires `read_gift_card_transactions` access scope.

A credit transaction which increases the gift card balance.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* gift​Card

  [Gift​Card!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  non-null

  The gift card that the transaction belongs to.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The key for the metafield.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the transaction.

* processed​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was processed.

***

## Map

No referencing types

***

## Mutations

* [gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)

  mutation

  Credit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be credited.

  * credit​Input

    [Gift​Card​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput)

    required

    The input fields to credit a gift card.

  ***

***

## <\~> GiftCardCreditTransaction Mutations

### Mutated by

* <\~>[gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)

***

## Interfaces

* * [Gift​Card​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction)

    interface

  * [Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ||-GiftCardCreditTransaction Implements

### Implements

* ||-[Gift​Card​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction)
* ||-[Has​Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
