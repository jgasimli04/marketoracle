---
title: orderEditUpdateShippingLine - GraphQL Admin
description: >-
  Updates a shipping line on the current order edit. For more information on how
  to use the GraphQL Admin API to edit an existing order, refer to [Edit
  existing
  orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine.md
---

# order​Edit​Update​Shipping​Line

mutation

Requires `write_order_edits` access scope.

Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.

* shipping​Line

  [Order​Edit​Update​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput)

  required

  The updated shipping line.

* shipping​Line​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the calculated shipping line to update.

***

## Order​Edit​Update​Shipping​Line​Payload returns

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Update​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Get a user error when updating a committed shipping line

  #### Description

  This mutation returns a user error when updating a committed shipping line. Only staged shipping lines can be updated, whereas committed shipping lines may only be removed.

  #### Query

  ```graphql
  mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
    orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
      calculatedOrder {
        id
        totalOutstandingSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
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
    "id": "gid://shopify/CalculatedOrder/607673082",
    "shippingLineId": "gid://shopify/ShippingLine/1072813969",
    "shippingLine": {
      "title": "2-Day Shipping",
      "price": {
        "amount": 19.99,
        "currencyCode": "USD"
      }
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
  "query": "mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) { orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) { calculatedOrder { id totalOutstandingSet { presentmentMoney { amount currencyCode } } totalPriceSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/CalculatedOrder/607673082",
      "shippingLineId": "gid://shopify/ShippingLine/1072813969",
      "shippingLine": {
        "title": "2-Day Shipping",
        "price": {
          "amount": 19.99,
          "currencyCode": "USD"
        }
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
    mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
      orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
        calculatedOrder {
          id
          totalOutstandingSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
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
          "id": "gid://shopify/CalculatedOrder/607673082",
          "shippingLineId": "gid://shopify/ShippingLine/1072813969",
          "shippingLine": {
              "title": "2-Day Shipping",
              "price": {
                  "amount": 19.99,
                  "currencyCode": "USD"
              }
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
    mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
      orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
        calculatedOrder {
          id
          totalOutstandingSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
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
    "id": "gid://shopify/CalculatedOrder/607673082",
    "shippingLineId": "gid://shopify/ShippingLine/1072813969",
    "shippingLine": {
      "title": "2-Day Shipping",
      "price": {
        "amount": 19.99,
        "currencyCode": "USD"
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
        orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
          calculatedOrder {
            id
            totalOutstandingSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
            totalPriceSet {
              presentmentMoney {
                amount
                currencyCode
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
          "id": "gid://shopify/CalculatedOrder/607673082",
          "shippingLineId": "gid://shopify/ShippingLine/1072813969",
          "shippingLine": {
              "title": "2-Day Shipping",
              "price": {
                  "amount": 19.99,
                  "currencyCode": "USD"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderEditUpdateShippingLine": null
  }
  ```

* ### Update a staged shipping line on an order edit

  #### Description

  This mutation updates a staged shipping line on an order edit.

  #### Query

  ```graphql
  mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
    orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
      calculatedOrder {
        id
        totalOutstandingSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
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
    "id": "gid://shopify/CalculatedOrder/607673080",
    "shippingLineId": "gid://shopify/CalculatedShippingLine/52ccb02a-dbb1-4b10-ac24-3e7861a641ec",
    "shippingLine": {
      "title": "2-Day Shipping",
      "price": {
        "amount": 19.99,
        "currencyCode": "USD"
      }
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
  "query": "mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) { orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) { calculatedOrder { id totalOutstandingSet { presentmentMoney { amount currencyCode } } totalPriceSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/CalculatedOrder/607673080",
      "shippingLineId": "gid://shopify/CalculatedShippingLine/52ccb02a-dbb1-4b10-ac24-3e7861a641ec",
      "shippingLine": {
        "title": "2-Day Shipping",
        "price": {
          "amount": 19.99,
          "currencyCode": "USD"
        }
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
    mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
      orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
        calculatedOrder {
          id
          totalOutstandingSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
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
          "id": "gid://shopify/CalculatedOrder/607673080",
          "shippingLineId": "gid://shopify/CalculatedShippingLine/52ccb02a-dbb1-4b10-ac24-3e7861a641ec",
          "shippingLine": {
              "title": "2-Day Shipping",
              "price": {
                  "amount": 19.99,
                  "currencyCode": "USD"
              }
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
    mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
      orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
        calculatedOrder {
          id
          totalOutstandingSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
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
    "id": "gid://shopify/CalculatedOrder/607673080",
    "shippingLineId": "gid://shopify/CalculatedShippingLine/52ccb02a-dbb1-4b10-ac24-3e7861a641ec",
    "shippingLine": {
      "title": "2-Day Shipping",
      "price": {
        "amount": 19.99,
        "currencyCode": "USD"
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
        orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
          calculatedOrder {
            id
            totalOutstandingSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
            totalPriceSet {
              presentmentMoney {
                amount
                currencyCode
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
          "id": "gid://shopify/CalculatedOrder/607673080",
          "shippingLineId": "gid://shopify/CalculatedShippingLine/52ccb02a-dbb1-4b10-ac24-3e7861a641ec",
          "shippingLine": {
              "title": "2-Day Shipping",
              "price": {
                  "amount": 19.99,
                  "currencyCode": "USD"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderEditUpdateShippingLine": {
      "calculatedOrder": {
        "id": "gid://shopify/CalculatedOrder/607673080",
        "totalOutstandingSet": {
          "presentmentMoney": {
            "amount": "251.94",
            "currencyCode": "USD"
          }
        },
        "totalPriceSet": {
          "presentmentMoney": {
            "amount": "251.94",
            "currencyCode": "USD"
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### orderEditUpdateShippingLine reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateShippingLine\(%24id%3A%20ID!%2C%20%24shippingLine%3A%20OrderEditUpdateShippingLineInput!%2C%20%24shippingLineId%3A%20ID!\)%20%7B%0A%20%20orderEditUpdateShippingLine\(id%3A%20%24id%2C%20shippingLine%3A%20%24shippingLine%2C%20shippingLineId%3A%20%24shippingLineId\)%20%7B%0A%20%20%20%20calculatedOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20totalOutstandingSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCalculatedOrder%2F607673082%22%2C%0A%20%20%22shippingLineId%22%3A%20%22gid%3A%2F%2Fshopify%2FShippingLine%2F1072813969%22%2C%0A%20%20%22shippingLine%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%222-Day%20Shipping%22%2C%0A%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%2019.99%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
  orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
    calculatedOrder {
      id
      totalOutstandingSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      totalPriceSet {
        presentmentMoney {
          amount
          currencyCode
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
"query": "mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) { orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) { calculatedOrder { id totalOutstandingSet { presentmentMoney { amount currencyCode } } totalPriceSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/CalculatedOrder/607673082",
    "shippingLineId": "gid://shopify/ShippingLine/1072813969",
    "shippingLine": {
      "title": "2-Day Shipping",
      "price": {
        "amount": 19.99,
        "currencyCode": "USD"
      }
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
  mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
    orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
      calculatedOrder {
        id
        totalOutstandingSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
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
        "id": "gid://shopify/CalculatedOrder/607673082",
        "shippingLineId": "gid://shopify/ShippingLine/1072813969",
        "shippingLine": {
            "title": "2-Day Shipping",
            "price": {
                "amount": 19.99,
                "currencyCode": "USD"
            }
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
    "query": `mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
      orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
        calculatedOrder {
          id
          totalOutstandingSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
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
        "id": "gid://shopify/CalculatedOrder/607673082",
        "shippingLineId": "gid://shopify/ShippingLine/1072813969",
        "shippingLine": {
            "title": "2-Day Shipping",
            "price": {
                "amount": 19.99,
                "currencyCode": "USD"
            }
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
  mutation updateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
    orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
      calculatedOrder {
        id
        totalOutstandingSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
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
  "id": "gid://shopify/CalculatedOrder/607673082",
  "shippingLineId": "gid://shopify/ShippingLine/1072813969",
  "shippingLine": {
    "title": "2-Day Shipping",
    "price": {
      "amount": 19.99,
      "currencyCode": "USD"
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/CalculatedOrder/607673082",
  "shippingLineId": "gid://shopify/ShippingLine/1072813969",
  "shippingLine": {
    "title": "2-Day Shipping",
    "price": {
      "amount": 19.99,
      "currencyCode": "USD"
    }
  }
}
```

## Response

JSON

```json
{
  "orderEditUpdateShippingLine": null
}
```
