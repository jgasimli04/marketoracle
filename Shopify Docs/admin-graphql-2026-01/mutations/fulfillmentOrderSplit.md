---
title: fulfillmentOrderSplit - GraphQL Admin
description: >-
  Splits
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  objects by moving the specified
  [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
  objects and quantities into a new fulfillment order.


  If the original fulfillment order can't be split due to its current state,
  then the mutation creates a replacement fulfillment order instead.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit.md
---

# fulfillment​Order​Split

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

## Arguments

* fulfillment​Order​Splits

  [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

  required

  The fulfillment orders, line items and quantities to be split into new fulfillment orders.

***

## Fulfillment​Order​Split​Payload returns

* fulfillment​Order​Splits

  [\[Fulfillment​Order​Split​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult)

  The result of the fulfillment order splits.

* user​Errors

  [\[Fulfillment​Order​Split​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Split a single fulfillment order

  #### Description

  A merchant or order management app splits one or more fulfillment orders into multiple fulfillment orders, by specifying line items and quantities to split.

  #### Query

  ```graphql
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
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
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
        "fulfillmentOrderLineItems": [
          {
            "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
            "quantity": 2
          }
        ]
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) { fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) { fulfillmentOrderSplits { fulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } remainingFulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } } userErrors { field message } } }",
   "variables": {
      "fulfillmentOrderSplits": [
        {
          "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
          "fulfillmentOrderLineItems": [
            {
              "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
              "quantity": 2
            }
          ]
        }
      ]
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
    mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
      fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
        fulfillmentOrderSplits {
          fulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
          remainingFulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
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
          "fulfillmentOrderSplits": [
              {
                  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                  "fulfillmentOrderLineItems": [
                      {
                          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                          "quantity": 2
                      }
                  ]
              }
          ]
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
    mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
      fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
        fulfillmentOrderSplits {
          fulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
          remainingFulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
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
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
        "fulfillmentOrderLineItems": [
          {
            "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
            "quantity": 2
          }
        ]
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
        fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
          fulfillmentOrderSplits {
            fulfillmentOrder {
              id
              lineItems(first: 10) {
                edges {
                  cursor
                  node {
                    id
                    totalQuantity
                  }
                }
              }
            }
            remainingFulfillmentOrder {
              id
              lineItems(first: 10) {
                edges {
                  cursor
                  node {
                    id
                    totalQuantity
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "fulfillmentOrderSplits": [
              {
                  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                  "fulfillmentOrderLineItems": [
                      {
                          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                          "quantity": 2
                      }
                  ]
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderSplit": {
      "fulfillmentOrderSplits": [
        {
          "fulfillmentOrder": {
            "id": "gid://shopify/FulfillmentOrder/1046000796",
            "lineItems": {
              "edges": [
                {
                  "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTAzLCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTAzfQ==",
                  "node": {
                    "id": "gid://shopify/FulfillmentOrderLineItem/1058737503",
                    "totalQuantity": 1
                  }
                }
              ]
            }
          },
          "remainingFulfillmentOrder": {
            "id": "gid://shopify/FulfillmentOrder/1046000797",
            "lineItems": {
              "edges": [
                {
                  "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTA0LCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTA0fQ==",
                  "node": {
                    "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                    "totalQuantity": 2
                  }
                }
              ]
            }
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderSplit reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderSplit\(%24fulfillmentOrderSplits%3A%20%5BFulfillmentOrderSplitInput!%5D!\)%20%7B%0A%20%20fulfillmentOrderSplit\(fulfillmentOrderSplits%3A%20%24fulfillmentOrderSplits\)%20%7B%0A%20%20%20%20fulfillmentOrderSplits%20%7B%0A%20%20%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20lineItems\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20totalQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20remainingFulfillmentOrder%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20lineItems\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20totalQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22fulfillmentOrderSplits%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22fulfillmentOrderId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000796%22%2C%0A%20%20%20%20%20%20%22fulfillmentOrderLineItems%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrderLineItem%2F1058737504%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%202%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
  fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
    fulfillmentOrderSplits {
      fulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
      remainingFulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
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
"query": "mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) { fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) { fulfillmentOrderSplits { fulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } remainingFulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } } userErrors { field message } } }",
 "variables": {
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
        "fulfillmentOrderLineItems": [
          {
            "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
            "quantity": 2
          }
        ]
      }
    ]
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
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
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
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
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
    "query": `mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
      fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
        fulfillmentOrderSplits {
          fulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
          remainingFulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
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
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
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
  "fulfillmentOrderSplits": [
    {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
      "fulfillmentOrderLineItems": [
        {
          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
          "quantity": 2
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "fulfillmentOrderSplits": [
    {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
      "fulfillmentOrderLineItems": [
        {
          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
          "quantity": 2
        }
      ]
    }
  ]
}
```

## Response

JSON

```json
{
  "fulfillmentOrderSplit": {
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrder": {
          "id": "gid://shopify/FulfillmentOrder/1046000796",
          "lineItems": {
            "edges": [
              {
                "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTAzLCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTAzfQ==",
                "node": {
                  "id": "gid://shopify/FulfillmentOrderLineItem/1058737503",
                  "totalQuantity": 1
                }
              }
            ]
          }
        },
        "remainingFulfillmentOrder": {
          "id": "gid://shopify/FulfillmentOrder/1046000797",
          "lineItems": {
            "edges": [
              {
                "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTA0LCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTA0fQ==",
                "node": {
                  "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                  "totalQuantity": 2
                }
              }
            ]
          }
        }
      }
    ],
    "userErrors": []
  }
}
```
