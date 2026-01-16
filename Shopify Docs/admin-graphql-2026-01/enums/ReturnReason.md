---
title: ReturnReason - GraphQL Admin
description: The reason for returning the return line item.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReason'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReason.md'
---

# Return​Reason

enum

The reason for returning the return line item.

## Valid values

* COLOR

  The item is returned because the buyer did not like the color. Displays as **Color**.

* DEFECTIVE

  The item is returned because it is damaged or defective. Displays as **Damaged or defective**.

* NOT\_​AS\_​DESCRIBED

  The item is returned because it was not as described. Displays as **Item not as described**.

* OTHER

  The item is returned for another reason. For this value, a return reason note is also provided. Displays as **Other**.

* SIZE\_​TOO\_​LARGE

  The item is returned because the size was too large. Displays as **Size was too large**.

* SIZE\_​TOO\_​SMALL

  The item is returned because the size was too small. Displays as **Size was too small**.

* STYLE

  The item is returned because the buyer did not like the style. Displays as **Style**.

* UNKNOWN

  The item is returned because of an unknown reason. Displays as **Unknown**.

* UNWANTED

  The item is returned because the customer changed their mind. Displays as **Customer changed their mind**.

* WRONG\_​ITEM

  The item is returned because the customer received the wrong one. Displays as **Received the wrong item**.

***

## Fields

* [Return​Line​Item​Input.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemInput#fields-returnReason)

  INPUT OBJECT

  The input fields for a return line item.

* [Return​Request​Line​Item​Input.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestLineItemInput#fields-returnReason)

  INPUT OBJECT

  The input fields for a return line item.

### Deprecated fields

* [Return​Line​Item.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.returnReason)

  OBJECT

  Deprecated

* [Return​Line​Item​Type.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType#fields-returnReason)

  INTERFACE

  Deprecated

* [Unverified​Return​Line​Item.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnverifiedReturnLineItem#field-UnverifiedReturnLineItem.fields.returnReason)

  OBJECT

  Deprecated

***

## Map

### Inputs with this enum

* [Return​Line​Item​Input.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemInput#fields-returnReason)
* [Return​Request​Line​Item​Input.returnReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestLineItemInput#fields-returnReason)
