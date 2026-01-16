---
title: returnApproveRequest - GraphQL Admin
description: |-
  Approves a customer's return request.
  If this mutation is successful, then the `Return.status` field of the
  approved return is set to `OPEN`.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest.md
---

# return​Approve​Request

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

## Arguments

* input

  [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

  required

  The input fields to approve a return.

***

## Return​Approve​Request​Payload returns

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The approved return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Approve a return

  #### Description

  Approve a return for the order.

  #### Query

  ```graphql
  mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
    returnApproveRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 1) {
          edges {
            node {
              id
            }
          }
        }
        order {
          id
        }
      }
      userErrors {
        code
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
      "id": "gid://shopify/Return/945000959"
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
  "query": "mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) { returnApproveRequest(input: $input) { return { id name status returnLineItems(first: 1) { edges { node { id } } } order { id } } userErrors { code field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Return/945000959"
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
    mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
      returnApproveRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          order {
            id
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/Return/945000959"
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
    mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
      returnApproveRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          order {
            id
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/Return/945000959"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
        returnApproveRequest(input: $input) {
          return {
            id
            name
            status
            returnLineItems(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
            order {
              id
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Return/945000959"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "returnApproveRequest": {
      "return": {
        "id": "gid://shopify/Return/945000959",
        "name": "#1001-R1",
        "status": "OPEN",
        "returnLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/ReturnLineItem/677614676"
              }
            }
          ]
        },
        "order": {
          "id": "gid://shopify/Order/311154583"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Cannot approve a return with an invalid status

  #### Description

  Mutation fails if the return status is \`CANCELED\`.

  #### Query

  ```graphql
  mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
    returnApproveRequest(input: $input) {
      return {
        id
        status
      }
      userErrors {
        code
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
      "id": "gid://shopify/Return/945000958"
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
  "query": "mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) { returnApproveRequest(input: $input) { return { id status } userErrors { code field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Return/945000958"
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
    mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
      returnApproveRequest(input: $input) {
        return {
          id
          status
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/Return/945000958"
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
    mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
      returnApproveRequest(input: $input) {
        return {
          id
          status
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/Return/945000958"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
        returnApproveRequest(input: $input) {
          return {
            id
            status
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Return/945000958"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "returnApproveRequest": {
      "return": null,
      "userErrors": [
        {
          "code": "INVALID_STATE",
          "field": [
            "input",
            "id"
          ],
          "message": "Return is not approvable. Only returns with status REQUESTED can be approved."
        }
      ]
    }
  }
  ```

* ### returnApproveRequest reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ReturnApproveRequest\(%24input%3A%20ReturnApproveRequestInput!\)%20%7B%0A%20%20returnApproveRequest\(input%3A%20%24input\)%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20returnLineItems\(first%3A%201\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FReturn%2F945000959%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
  returnApproveRequest(input: $input) {
    return {
      id
      name
      status
      returnLineItems(first: 1) {
        edges {
          node {
            id
          }
        }
      }
      order {
        id
      }
    }
    userErrors {
      code
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
"query": "mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) { returnApproveRequest(input: $input) { return { id name status returnLineItems(first: 1) { edges { node { id } } } order { id } } userErrors { code field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Return/945000959"
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
  mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
    returnApproveRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 1) {
          edges {
            node {
              id
            }
          }
        }
        order {
          id
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Return/945000959"
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
    "query": `mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
      returnApproveRequest(input: $input) {
        return {
          id
          name
          status
          returnLineItems(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          order {
            id
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Return/945000959"
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
  mutation ReturnApproveRequest($input: ReturnApproveRequestInput!) {
    returnApproveRequest(input: $input) {
      return {
        id
        name
        status
        returnLineItems(first: 1) {
          edges {
            node {
              id
            }
          }
        }
        order {
          id
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Return/945000959"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/Return/945000959"
  }
}
```

## Response

JSON

```json
{
  "returnApproveRequest": {
    "return": {
      "id": "gid://shopify/Return/945000959",
      "name": "#1001-R1",
      "status": "OPEN",
      "returnLineItems": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ReturnLineItem/677614676"
            }
          }
        ]
      },
      "order": {
        "id": "gid://shopify/Order/311154583"
      }
    },
    "userErrors": []
  }
}
```
