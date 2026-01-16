---
title: JSON - GraphQL Admin
description: |
  A [JSON](https://www.json.org/json-en.html) object.

  Example value:
  `{
    "product": {
      "id": "gid://shopify/Product/1346443542550",
      "title": "White T-shirt",
      "options": [{
        "name": "Size",
        "values": ["M", "L"]
      }]
    }
  }`
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON.md'
---

# JSON

scalar

A [JSON](https://www.json.org/json-en.html) object.

Example value: `{ "product": { "id": "gid://shopify/Product/1346443542550", "title": "White T-shirt", "options": [{ "name": "Size", "values": ["M", "L"] }] } }`

## Map

### Fields with this scalar

* <-|[Basic​Event.additionalContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.additionalContent)
* <-|[Basic​Event.additionalData](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.additionalData)
* <-|[Basic​Event.arguments](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.arguments)
* <-|[Fulfillment​Order​Merchant​Request.requestOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest#field-FulfillmentOrderMerchantRequest.fields.requestOptions)
* <-|[Fulfillment​Order​Merchant​Request.responseData](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest#field-FulfillmentOrderMerchantRequest.fields.responseData)
* <-|[Metafield.jsonValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.jsonValue)
* <-|[Metaobject​Field.jsonValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.jsonValue)
* <-|[Order​Transaction.receiptJson](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.receiptJson)
* <-|[Shopifyql​Table​Data.rows](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData#field-ShopifyqlTableData.fields.rows)
* <-|[Web​Pixel.settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel#field-WebPixel.fields.settings)

### Inputs with this scalar

* [Marketing​Activity​Update​Input.errors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-errors)
* [Order​Create​Order​Transaction​Input.receiptJson](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-receiptJson)
* [Web​Pixel​Input.settings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput#fields-settings)

### Arguments with this scalar

* <-|[flow​Trigger​Receive.payload](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive#arguments-payload)
