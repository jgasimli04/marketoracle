---
title: GiftCardTransaction - GraphQL Admin
description: Interface for a gift card transaction.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction.md
---

# Gift​Card​Transaction

interface

Requires `read_gift_card_transactions` access scope.

Interface for a gift card transaction.

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

  The unique ID for the transaction.

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

## Types implemented in

* [Gift​Card​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction)

  OBJECT

  A credit transaction which increases the gift card balance.

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

* [Gift​Card​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

  OBJECT

  A debit transaction which decreases the gift card balance.

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

##### Variables

```json
{
	"amount": "",
	"giftCard": "",
	"id": "",
	"metafield": {
		"namespace": "",
		"key": ""
	},
	"metafields": {
		"namespace": "",
		"keys": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"note": "",
	"processedAt": ""
}
```

##### Schema

```graphql
interface GiftCardTransaction {
  amount: MoneyV2!
  giftCard: GiftCard!
  id: ID!
  metafield: Metafield
  metafields: MetafieldConnection!
  note: String
  processedAt: DateTime!
}
```
