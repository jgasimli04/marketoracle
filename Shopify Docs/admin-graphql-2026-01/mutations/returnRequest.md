---
title: returnRequest - GraphQL Admin
description: >-
  Creates a return request that requires merchant approval before processing.
  The return has its status set to `REQUESTED` and the merchant must approve or
  decline it.


  Use this mutation when customers initiate returns that need review. After
  creating a requested return, use
  [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)
  to approve it or
  [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)
  to decline it.


  For returns that should be immediately open for processing, use the
  [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)
  mutation instead.


  Learn more about [building return management
  workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest.md'
---

# return​Request

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

## Arguments

* input

  [Return​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput)

  required

  The input fields for requesting a return.

***

## Return​Request​Payload returns

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The requested return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Request a return with a return reason definition

  #### Description

  Request a return using the new \`returnReasonDefinitionId\` field. This example demonstrates how to specify a standardized return reason when requesting a return. The \`returnReasonDefinitionId\` should be obtained from the \`returnReasonDefinitions\` or \`suggestedReturnReasonDefinitions\` query.

  #### Query

  ```graphql
  mutation returnRequest($input: ReturnRequestInput!) {
    returnRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 10) {
          edges {
            node {
              id
              quantity
              returnReasonDefinition {
                id
                handle
                name
              }
              customerNote
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
    "input": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
          "customerNote": "The item doesn't fit properly"
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
  "query": "mutation returnRequest($input: ReturnRequestInput!) { returnRequest(input: $input) { return { id name status returnLineItems(first: 10) { edges { node { id quantity returnReasonDefinition { id handle name } customerNote } } } } userErrors { field message } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/625362839",
        "returnLineItems": [
          {
            "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
            "quantity": 1,
            "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
            "customerNote": "The item doesn'\''t fit properly"
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
    mutation returnRequest($input: ReturnRequestInput!) {
      returnRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 10) {
            edges {
              node {
                id
                quantity
                returnReasonDefinition {
                  id
                  handle
                  name
                }
                customerNote
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
          "input": {
              "orderId": "gid://shopify/Order/625362839",
              "returnLineItems": [
                  {
                      "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                      "quantity": 1,
                      "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
                      "customerNote": "The item doesn't fit properly"
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
    mutation returnRequest($input: ReturnRequestInput!) {
      returnRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 10) {
            edges {
              node {
                id
                quantity
                returnReasonDefinition {
                  id
                  handle
                  name
                }
                customerNote
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
    "input": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
          "customerNote": "The item doesn't fit properly"
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
      "query": `mutation returnRequest($input: ReturnRequestInput!) {
        returnRequest(input: $input) {
          return {
            id
            name
            status
            returnLineItems(first: 10) {
              edges {
                node {
                  id
                  quantity
                  returnReasonDefinition {
                    id
                    handle
                    name
                  }
                  customerNote
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
          "input": {
              "orderId": "gid://shopify/Order/625362839",
              "returnLineItems": [
                  {
                      "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                      "quantity": 1,
                      "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
                      "customerNote": "The item doesn't fit properly"
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
    "returnRequest": {
      "return": {
        "id": "gid://shopify/Return/963805102",
        "name": "#1001-R2",
        "status": "REQUESTED",
        "returnLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/ReturnLineItem/791246334",
                "quantity": 1,
                "returnReasonDefinition": {
                  "id": "gid://shopify/ReturnReasonDefinition/640710815",
                  "handle": "too-small",
                  "name": "Too Small"
                },
                "customerNote": "The item doesn't fit properly"
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Request a return

  #### Description

  Request a return for the order.

  #### Query

  ```graphql
  mutation ReturnRequest($input: ReturnRequestInput!) {
    returnRequest(input: $input) {
      userErrors {
        field
        message
      }
      return {
        id
        status
        returnLineItems(first: 1) {
          edges {
            node {
              id
              returnReason
              customerNote
            }
          }
        }
        order {
          id
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReason": "WRONG_ITEM",
          "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
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
  "query": "mutation ReturnRequest($input: ReturnRequestInput!) { returnRequest(input: $input) { userErrors { field message } return { id status returnLineItems(first: 1) { edges { node { id returnReason customerNote } } } order { id } } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/625362839",
        "returnLineItems": [
          {
            "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
            "quantity": 1,
            "returnReason": "WRONG_ITEM",
            "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
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
    mutation ReturnRequest($input: ReturnRequestInput!) {
      returnRequest(input: $input) {
        userErrors {
          field
          message
        }
        return {
          id
          status
          returnLineItems(first: 1) {
            edges {
              node {
                id
                returnReason
                customerNote
              }
            }
          }
          order {
            id
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/625362839",
              "returnLineItems": [
                  {
                      "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                      "quantity": 1,
                      "returnReason": "WRONG_ITEM",
                      "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
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
    mutation ReturnRequest($input: ReturnRequestInput!) {
      returnRequest(input: $input) {
        userErrors {
          field
          message
        }
        return {
          id
          status
          returnLineItems(first: 1) {
            edges {
              node {
                id
                returnReason
                customerNote
              }
            }
          }
          order {
            id
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReason": "WRONG_ITEM",
          "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
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
      "query": `mutation ReturnRequest($input: ReturnRequestInput!) {
        returnRequest(input: $input) {
          userErrors {
            field
            message
          }
          return {
            id
            status
            returnLineItems(first: 1) {
              edges {
                node {
                  id
                  returnReason
                  customerNote
                }
              }
            }
            order {
              id
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/625362839",
              "returnLineItems": [
                  {
                      "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                      "quantity": 1,
                      "returnReason": "WRONG_ITEM",
                      "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
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
    "returnRequest": {
      "userErrors": [],
      "return": {
        "id": "gid://shopify/Return/945000961",
        "status": "REQUESTED",
        "returnLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/ReturnLineItem/677614678",
                "returnReason": "WRONG_ITEM",
                "customerNote": "Sorry, I ordered the wrong item. Could I get a refund or store credit?"
              }
            }
          ]
        },
        "order": {
          "id": "gid://shopify/Order/625362839"
        }
      }
    }
  }
  ```

* ### returnRequest reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20returnRequest\(%24input%3A%20ReturnRequestInput!\)%20%7B%0A%20%20returnRequest\(input%3A%20%24input\)%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20returnLineItems\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20returnReasonDefinition%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20customerNote%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F625362839%22%2C%0A%20%20%20%20%22returnLineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22fulfillmentLineItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentLineItem%2F820022594%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22returnReasonDefinitionId%22%3A%20%22gid%3A%2F%2Fshopify%2FReturnReasonDefinition%2F640710815%22%2C%0A%20%20%20%20%20%20%20%20%22customerNote%22%3A%20%22The%20item%20doesn't%20fit%20properly%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation returnRequest($input: ReturnRequestInput!) {
  returnRequest(input: $input) {
    return {
      id
      name
      status
      returnLineItems(first: 10) {
        edges {
          node {
            id
            quantity
            returnReasonDefinition {
              id
              handle
              name
            }
            customerNote
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
"query": "mutation returnRequest($input: ReturnRequestInput!) { returnRequest(input: $input) { return { id name status returnLineItems(first: 10) { edges { node { id quantity returnReasonDefinition { id handle name } customerNote } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
          "customerNote": "The item doesn'\''t fit properly"
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
  mutation returnRequest($input: ReturnRequestInput!) {
    returnRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 10) {
          edges {
            node {
              id
              quantity
              returnReasonDefinition {
                id
                handle
                name
              }
              customerNote
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
        "input": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
                    "customerNote": "The item doesn't fit properly"
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
    "query": `mutation returnRequest($input: ReturnRequestInput!) {
      returnRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 10) {
            edges {
              node {
                id
                quantity
                returnReasonDefinition {
                  id
                  handle
                  name
                }
                customerNote
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
        "input": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
                    "customerNote": "The item doesn't fit properly"
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
  mutation returnRequest($input: ReturnRequestInput!) {
    returnRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 10) {
          edges {
            node {
              id
              quantity
              returnReasonDefinition {
                id
                handle
                name
              }
              customerNote
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
  "input": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
        "customerNote": "The item doesn't fit properly"
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
  "input": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
        "customerNote": "The item doesn't fit properly"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "returnRequest": {
    "return": {
      "id": "gid://shopify/Return/963805102",
      "name": "#1001-R2",
      "status": "REQUESTED",
      "returnLineItems": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ReturnLineItem/791246334",
              "quantity": 1,
              "returnReasonDefinition": {
                "id": "gid://shopify/ReturnReasonDefinition/640710815",
                "handle": "too-small",
                "name": "Too Small"
              },
              "customerNote": "The item doesn't fit properly"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
```
