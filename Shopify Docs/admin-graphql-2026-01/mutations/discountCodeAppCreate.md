---
title: discountCodeAppCreate - GraphQL Admin
description: >-
  Creates a code discount. The discount type must be provided by an app
  extension that uses [Shopify
  Functions](https://shopify.dev/docs/apps/build/functions). Functions can
  implement
  [order](https://shopify.dev/docs/api/functions/reference/order-discounts),
  [product](https://shopify.dev/docs/api/functions/reference/product-discounts),
  or
  [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts)
  discount functions. Use this mutation with Shopify Functions when you need
  custom logic beyond [Shopify's native discount
  types](https://help.shopify.com/manual/discounts/discount-types).


  For example, use this mutation to create a code discount using an app's
  "Volume" discount type that applies a percentage off when customers purchase
  more than the minimum quantity

  of a product. For an example implementation, refer to [our
  tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).


  > Note:

  > To create automatic discounts with custom logic, use
  [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate.md
---

# discount​Code​App​Create

mutation

Requires `write_discounts` access scope.

Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

***

Note

To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).

***

## Arguments

* code​App​Discount

  [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

  required

  The input data used to create the discount.

***

## Discount​Code​App​Create​Payload returns

* code​App​Discount

  [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  The discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a product discount that's managed by an app

  #### Description

  Create a code discount that's managed by an app using \[Shopify Functions]\(https://shopify.dev/docs/apps/build/functions). This example shows how to create a code discount that takes 10% off specific products.

  #### Query

  ```graphql
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 5) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "codeAppDiscount": {
      "code": "PRODUCT10",
      "title": "10% off selected products",
      "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
      "appliesOncePerCustomer": false,
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
        }
      ]
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 5) { nodes { code } } status usageLimit } userErrors { field message } } }",
   "variables": {
      "codeAppDiscount": {
        "code": "PRODUCT10",
        "title": "10% off selected products",
        "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
        "appliesOncePerCustomer": false,
        "combinesWith": {
          "orderDiscounts": false,
          "productDiscounts": false,
          "shippingDiscounts": true
        },
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "metafields": [
          {
            "namespace": "default",
            "key": "function-configuration",
            "type": "json",
            "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
          }
        ]
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 5) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "codeAppDiscount": {
              "code": "PRODUCT10",
              "title": "10% off selected products",
              "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
              "appliesOncePerCustomer": false,
              "combinesWith": {
                  "orderDiscounts": false,
                  "productDiscounts": false,
                  "shippingDiscounts": true
              },
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
                  }
              ]
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 5) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "codeAppDiscount": {
      "code": "PRODUCT10",
      "title": "10% off selected products",
      "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
      "appliesOncePerCustomer": false,
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
        discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
          codeAppDiscount {
            discountId
            title
            appDiscountType {
              description
              functionId
            }
            combinesWith {
              orderDiscounts
              productDiscounts
              shippingDiscounts
            }
            codes(first: 5) {
              nodes {
                code
              }
            }
            status
            usageLimit
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "codeAppDiscount": {
              "code": "PRODUCT10",
              "title": "10% off selected products",
              "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
              "appliesOncePerCustomer": false,
              "combinesWith": {
                  "orderDiscounts": false,
                  "productDiscounts": false,
                  "shippingDiscounts": true
              },
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeAppCreate": {
      "codeAppDiscount": {
        "discountId": "gid://shopify/DiscountCodeNode/1057856653",
        "title": "10% off selected products",
        "appDiscountType": {
          "description": "my function does a thing",
          "functionId": "859fcac2-cf96-44db-8146-977445fa90c8"
        },
        "combinesWith": {
          "orderDiscounts": false,
          "productDiscounts": false,
          "shippingDiscounts": true
        },
        "codes": {
          "nodes": [
            {
              "code": "PRODUCT10"
            }
          ]
        },
        "status": "ACTIVE",
        "usageLimit": null
      },
      "userErrors": []
    }
  }
  ```

* ### Create a product discount that's managed by an app with a customer segment

  #### Description

  Create a code discount that's managed by an app using \[Shopify Functions]\(https://shopify.dev/docs/apps/build/functions). This example shows how to create a code discount that takes $15 off a specific product and applies only to a specific customer segment.

  #### Query

  ```graphql
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        context {
          ... on DiscountCustomerSegments {
            segments {
              id
            }
          }
        }
        appDiscountType {
          appKey
          functionId
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "codeAppDiscount": {
      "code": "SEGMENT15",
      "title": "Product discount $15 off for VIP customers",
      "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9",
      "startsAt": "2025-07-25T16:27:07-04:00",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/8961721"
          ]
        }
      },
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 15}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
        }
      ]
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title context { ... on DiscountCustomerSegments { segments { id } } } appDiscountType { appKey functionId } } userErrors { field message } } }",
   "variables": {
      "codeAppDiscount": {
        "code": "SEGMENT15",
        "title": "Product discount $15 off for VIP customers",
        "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9",
        "startsAt": "2025-07-25T16:27:07-04:00",
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/8961721"
            ]
          }
        },
        "metafields": [
          {
            "namespace": "default",
            "key": "function-configuration",
            "type": "json",
            "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 15}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
          }
        ]
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          context {
            ... on DiscountCustomerSegments {
              segments {
                id
              }
            }
          }
          appDiscountType {
            appKey
            functionId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "codeAppDiscount": {
              "code": "SEGMENT15",
              "title": "Product discount $15 off for VIP customers",
              "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9",
              "startsAt": "2025-07-25T16:27:07-04:00",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/8961721"
                      ]
                  }
              },
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 15}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
                  }
              ]
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          context {
            ... on DiscountCustomerSegments {
              segments {
                id
              }
            }
          }
          appDiscountType {
            appKey
            functionId
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "codeAppDiscount": {
      "code": "SEGMENT15",
      "title": "Product discount $15 off for VIP customers",
      "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9",
      "startsAt": "2025-07-25T16:27:07-04:00",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/8961721"
          ]
        }
      },
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 15}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
        discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
          codeAppDiscount {
            discountId
            title
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            appDiscountType {
              appKey
              functionId
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "codeAppDiscount": {
              "code": "SEGMENT15",
              "title": "Product discount $15 off for VIP customers",
              "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9",
              "startsAt": "2025-07-25T16:27:07-04:00",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/8961721"
                      ]
                  }
              },
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 15}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeAppCreate": {
      "codeAppDiscount": {
        "discountId": "gid://shopify/DiscountCodeNode/1057856651",
        "title": "Product discount $15 off for VIP customers",
        "context": {
          "segments": [
            {
              "id": "gid://shopify/Segment/8961721"
            }
          ]
        },
        "appDiscountType": {
          "appKey": "shopify-web",
          "functionId": "e7ba3f54-3002-4b7f-a620-cd89263077a9"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create an order discount that's managed by an app

  #### Description

  Create a code discount that's managed by an app using \[Shopify Functions]\(https://shopify.dev/docs/apps/build/functions). This example shows how to create a \[combinable]\(https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) code discount that takes $5 off the order subtotal.

  #### Query

  ```graphql
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 100) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "codeAppDiscount": {
      "code": "APP_DISCOUNT",
      "title": "Take 5$ from order discount",
      "functionId": "dce9760f-6514-4d94-a04b-8ab8614ea6cd",
      "appliesOncePerCustomer": true,
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true,
        "shippingDiscounts": true
      },
      "startsAt": "2021-02-02T17:09:21Z",
      "endsAt": "2022-02-02T17:09:21Z",
      "usageLimit": 1,
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                        [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
        }
      ]
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 100) { nodes { code } } status usageLimit } userErrors { field message } } }",
   "variables": {
      "codeAppDiscount": {
        "code": "APP_DISCOUNT",
        "title": "Take 5$ from order discount",
        "functionId": "dce9760f-6514-4d94-a04b-8ab8614ea6cd",
        "appliesOncePerCustomer": true,
        "combinesWith": {
          "orderDiscounts": true,
          "productDiscounts": true,
          "shippingDiscounts": true
        },
        "startsAt": "2021-02-02T17:09:21Z",
        "endsAt": "2022-02-02T17:09:21Z",
        "usageLimit": 1,
        "metafields": [
          {
            "namespace": "default",
            "key": "function-configuration",
            "type": "json",
            "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                        [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
          }
        ]
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 100) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "codeAppDiscount": {
              "code": "APP_DISCOUNT",
              "title": "Take 5$ from order discount",
              "functionId": "dce9760f-6514-4d94-a04b-8ab8614ea6cd",
              "appliesOncePerCustomer": true,
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true,
                  "shippingDiscounts": true
              },
              "startsAt": "2021-02-02T17:09:21Z",
              "endsAt": "2022-02-02T17:09:21Z",
              "usageLimit": 1,
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                        [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
                  }
              ]
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 100) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "codeAppDiscount": {
      "code": "APP_DISCOUNT",
      "title": "Take 5$ from order discount",
      "functionId": "dce9760f-6514-4d94-a04b-8ab8614ea6cd",
      "appliesOncePerCustomer": true,
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true,
        "shippingDiscounts": true
      },
      "startsAt": "2021-02-02T17:09:21Z",
      "endsAt": "2022-02-02T17:09:21Z",
      "usageLimit": 1,
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                        [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
        discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
          codeAppDiscount {
            discountId
            title
            appDiscountType {
              description
              functionId
            }
            combinesWith {
              orderDiscounts
              productDiscounts
              shippingDiscounts
            }
            codes(first: 100) {
              nodes {
                code
              }
            }
            status
            usageLimit
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "codeAppDiscount": {
              "code": "APP_DISCOUNT",
              "title": "Take 5$ from order discount",
              "functionId": "dce9760f-6514-4d94-a04b-8ab8614ea6cd",
              "appliesOncePerCustomer": true,
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true,
                  "shippingDiscounts": true
              },
              "startsAt": "2021-02-02T17:09:21Z",
              "endsAt": "2022-02-02T17:09:21Z",
              "usageLimit": 1,
              "metafields": [
                  {
                      "namespace": "default",
                      "key": "function-configuration",
                      "type": "json",
                      "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                        [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeAppCreate": {
      "codeAppDiscount": {
        "discountId": "gid://shopify/DiscountCodeNode/1057856652",
        "title": "Take 5$ from order discount",
        "appDiscountType": {
          "description": "my function does a thing",
          "functionId": "9ae28a71-1ec6-40a7-a8a2-b6a425f9ddd1"
        },
        "combinesWith": {
          "orderDiscounts": true,
          "productDiscounts": true,
          "shippingDiscounts": true
        },
        "codes": {
          "nodes": [
            {
              "code": "APP_DISCOUNT"
            }
          ]
        },
        "status": "EXPIRED",
        "usageLimit": 1
      },
      "userErrors": []
    }
  }
  ```

* ### discountCodeAppCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeAppCreate\(%24codeAppDiscount%3A%20DiscountCodeAppInput!\)%20%7B%0A%20%20discountCodeAppCreate\(codeAppDiscount%3A%20%24codeAppDiscount\)%20%7B%0A%20%20%20%20codeAppDiscount%20%7B%0A%20%20%20%20%20%20discountId%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20appDiscountType%20%7B%0A%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20functionId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20orderDiscounts%0A%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20shippingDiscounts%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20codes\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20usageLimit%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22codeAppDiscount%22%3A%20%7B%0A%20%20%20%20%22code%22%3A%20%22PRODUCT10%22%2C%0A%20%20%20%20%22title%22%3A%20%2210%25%20off%20selected%20products%22%2C%0A%20%20%20%20%22functionId%22%3A%20%22859fcac2-cf96-44db-8146-977445fa90c8%22%2C%0A%20%20%20%20%22appliesOncePerCustomer%22%3A%20false%2C%0A%20%20%20%20%22combinesWith%22%3A%20%7B%0A%20%20%20%20%20%20%22orderDiscounts%22%3A%20false%2C%0A%20%20%20%20%20%20%22productDiscounts%22%3A%20false%2C%0A%20%20%20%20%20%20%22shippingDiscounts%22%3A%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22default%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22function-configuration%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22json%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22%7B%5C%22discounts%5C%22%3A%5B%7B%5C%22value%5C%22%3A%7B%5C%22percentage%5C%22%3A0.10%7D%2C%5C%22targets%5C%22%3A%5B%7B%5C%22productVariants%5C%22%3A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%5C%22productsToDiscount%5C%22%3A%5B%5C%22gid%3A%2F%2Fshopify%2FProduct%2F123%5C%22%5D%2C%5C%22excludedVariantIds%5C%22%3A%5B%5D%7D%7D%5D%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%22discountApplicationStrategy%5C%22%3A%5C%22FIRST%5C%22%7D%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
    codeAppDiscount {
      discountId
      title
      appDiscountType {
        description
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
      codes(first: 5) {
        nodes {
          code
        }
      }
      status
      usageLimit
    }
    userErrors {
      field
      message
    }
  }
}
```

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 5) { nodes { code } } status usageLimit } userErrors { field message } } }",
 "variables": {
    "codeAppDiscount": {
      "code": "PRODUCT10",
      "title": "10% off selected products",
      "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
      "appliesOncePerCustomer": false,
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
        }
      ]
    }
  }
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 5) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "codeAppDiscount": {
            "code": "PRODUCT10",
            "title": "10% off selected products",
            "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
            "appliesOncePerCustomer": false,
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": true
            },
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
                }
            ]
        }
    },
  },
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 5) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "codeAppDiscount": {
            "code": "PRODUCT10",
            "title": "10% off selected products",
            "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
            "appliesOncePerCustomer": false,
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": true
            },
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
                }
            ]
        }
    },
  },
});
```

##### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 5) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "codeAppDiscount": {
    "code": "PRODUCT10",
    "title": "10% off selected products",
    "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
    "appliesOncePerCustomer": false,
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": true
    },
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "codeAppDiscount": {
    "code": "PRODUCT10",
    "title": "10% off selected products",
    "functionId": "859fcac2-cf96-44db-8146-977445fa90c8",
    "appliesOncePerCustomer": false,
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": true
    },
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                        {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                        \"discountApplicationStrategy\":\"FIRST\"}"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "discountCodeAppCreate": {
    "codeAppDiscount": {
      "discountId": "gid://shopify/DiscountCodeNode/1057856653",
      "title": "10% off selected products",
      "appDiscountType": {
        "description": "my function does a thing",
        "functionId": "859fcac2-cf96-44db-8146-977445fa90c8"
      },
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "codes": {
        "nodes": [
          {
            "code": "PRODUCT10"
          }
        ]
      },
      "status": "ACTIVE",
      "usageLimit": null
    },
    "userErrors": []
  }
}
```
