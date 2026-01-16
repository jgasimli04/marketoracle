---
title: ReturnDeclineReason - GraphQL Admin
description: The reason why the merchant declined a customer's return request.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnDeclineReason'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnDeclineReason.md
---

# Return​Decline​Reason

enum

The reason why the merchant declined a customer's return request.

## Valid values

* FINAL\_​SALE

  The return contains final sale items.

* OTHER

  The return is declined for another reason.

* RETURN\_​PERIOD\_​ENDED

  The return period has ended.

***

## Fields

* [Return​Decline.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnDecline#field-ReturnDecline.fields.reason)

  OBJECT

  Additional information about why a merchant declined the customer's return request.

* [Return​Decline​Request​Input.declineReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput#fields-declineReason)

  INPUT OBJECT

  The input fields for declining a customer's return request.

***

## Map

### Fields with this enum

* <-|[Return​Decline.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnDecline#field-ReturnDecline.fields.reason)

### Inputs with this enum

* [Return​Decline​Request​Input.declineReason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput#fields-declineReason)
