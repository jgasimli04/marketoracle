---
title: orderEditRemoveShippingLine - GraphQL Admin
description: >-
  Removes a shipping line from an existing order. For more information on how to
  use the GraphQL Admin API to edit an existing order, refer to [Edit existing
  orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine.md
---

# order​Edit​Remove​Shipping​Line

mutation

Requires `write_order_edits` access scope.

Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.

* shipping​Line​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the calculated shipping line to remove.

***

## Order​Edit​Remove​Shipping​Line​Payload returns

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Remove​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove a staged shipping line from an order edit

  #### Query

  ```graphql
  mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
    orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
    "id": "gid://shopify/CalculatedOrder/607673085",
    "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation removeShippingLine($id: ID!, $shippingLineId: ID!) { orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) { calculatedOrder { id totalOutstandingSet { presentmentMoney { amount currencyCode } } totalPriceSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/CalculatedOrder/607673085",
      "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
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
    mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
      orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
          "id": "gid://shopify/CalculatedOrder/607673085",
          "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
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
    mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
      orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
    "id": "gid://shopify/CalculatedOrder/607673085",
    "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
        orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
          "id": "gid://shopify/CalculatedOrder/607673085",
          "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderEditRemoveShippingLine": {
      "calculatedOrder": {
        "id": "gid://shopify/CalculatedOrder/607673085",
        "totalOutstandingSet": {
          "presentmentMoney": {
            "amount": "231.95",
            "currencyCode": "USD"
          }
        },
        "totalPriceSet": {
          "presentmentMoney": {
            "amount": "231.95",
            "currencyCode": "USD"
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### orderEditRemoveShippingLine reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20removeShippingLine\(%24id%3A%20ID!%2C%20%24shippingLineId%3A%20ID!\)%20%7B%0A%20%20orderEditRemoveShippingLine\(id%3A%20%24id%2C%20shippingLineId%3A%20%24shippingLineId\)%20%7B%0A%20%20%20%20calculatedOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20totalOutstandingSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCalculatedOrder%2F607673085%22%2C%0A%20%20%22shippingLineId%22%3A%20%22gid%3A%2F%2Fshopify%2FCalculatedShippingLine%2F6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607%22%0A%7D)

##### GQL

```graphql
mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
  orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
"query": "mutation removeShippingLine($id: ID!, $shippingLineId: ID!) { orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) { calculatedOrder { id totalOutstandingSet { presentmentMoney { amount currencyCode } } totalPriceSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/CalculatedOrder/607673085",
    "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
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
  mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
    orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
        "id": "gid://shopify/CalculatedOrder/607673085",
        "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
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
    "query": `mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
      orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
        "id": "gid://shopify/CalculatedOrder/607673085",
        "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
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
  mutation removeShippingLine($id: ID!, $shippingLineId: ID!) {
    orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
  "id": "gid://shopify/CalculatedOrder/607673085",
  "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/CalculatedOrder/607673085",
  "shippingLineId": "gid://shopify/CalculatedShippingLine/6ffda6d8-c0cf-44d6-8aa4-e89cea4a6607"
}
```

## Response

JSON

```json
{
  "orderEditRemoveShippingLine": {
    "calculatedOrder": {
      "id": "gid://shopify/CalculatedOrder/607673085",
      "totalOutstandingSet": {
        "presentmentMoney": {
          "amount": "231.95",
          "currencyCode": "USD"
        }
      },
      "totalPriceSet": {
        "presentmentMoney": {
          "amount": "231.95",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
```
