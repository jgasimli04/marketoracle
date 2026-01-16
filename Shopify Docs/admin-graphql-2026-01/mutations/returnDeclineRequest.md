---
title: returnDeclineRequest - GraphQL Admin
description: >-
  Declines a return on an order.

  When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be
  associated to a new return.

  Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest.md
---

# return​Decline​Request

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

## Arguments

* input

  [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

  required

  The input fields for declining a customer's return request.

***

## Return​Decline​Request​Payload returns

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The declined return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Cannot decline a return that has been refunded

  #### Description

  Mutation fails if the return was already refunded.

  #### Query

  ```graphql
  mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
    returnDeclineRequest(input: $input) {
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
      "id": "gid://shopify/Return/491427904",
      "declineReason": "RETURN_PERIOD_ENDED"
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
  "query": "mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) { returnDeclineRequest(input: $input) { return { id status } userErrors { code field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Return/491427904",
        "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
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
              "id": "gid://shopify/Return/491427904",
              "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
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
      "id": "gid://shopify/Return/491427904",
      "declineReason": "RETURN_PERIOD_ENDED"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
        returnDeclineRequest(input: $input) {
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
              "id": "gid://shopify/Return/491427904",
              "declineReason": "RETURN_PERIOD_ENDED"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "returnDeclineRequest": {
      "return": null,
      "userErrors": [
        {
          "code": "INVALID_STATE",
          "field": [
            "input",
            "id"
          ],
          "message": "Return is not declinable. Only non-refunded returns with status REQUESTED can be declined."
        }
      ]
    }
  }
  ```

* ### Cannot decline a return with an invalid status

  #### Description

  Mutation fails if the return status is \`OPEN\`.

  #### Query

  ```graphql
  mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
    returnDeclineRequest(input: $input) {
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
      "id": "gid://shopify/Return/945000954",
      "declineReason": "RETURN_PERIOD_ENDED"
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
  "query": "mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) { returnDeclineRequest(input: $input) { return { id status } userErrors { code field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Return/945000954",
        "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
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
              "id": "gid://shopify/Return/945000954",
              "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
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
      "id": "gid://shopify/Return/945000954",
      "declineReason": "RETURN_PERIOD_ENDED"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
        returnDeclineRequest(input: $input) {
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
              "id": "gid://shopify/Return/945000954",
              "declineReason": "RETURN_PERIOD_ENDED"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "returnDeclineRequest": {
      "return": null,
      "userErrors": [
        {
          "code": "INVALID_STATE",
          "field": [
            "input",
            "id"
          ],
          "message": "Return is not declinable. Only non-refunded returns with status REQUESTED can be declined."
        }
      ]
    }
  }
  ```

* ### Decline a return

  #### Description

  Decline a return for the order.

  #### Query

  ```graphql
  mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
    returnDeclineRequest(input: $input) {
      return {
        id
        status
        decline {
          reason
        }
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
      "id": "gid://shopify/Return/945000960",
      "declineReason": "RETURN_PERIOD_ENDED"
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
  "query": "mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) { returnDeclineRequest(input: $input) { return { id status decline { reason } returnLineItems(first: 1) { edges { node { id } } } order { id } } userErrors { code field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Return/945000960",
        "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
        return {
          id
          status
          decline {
            reason
          }
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
              "id": "gid://shopify/Return/945000960",
              "declineReason": "RETURN_PERIOD_ENDED"
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
    mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
        return {
          id
          status
          decline {
            reason
          }
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
      "id": "gid://shopify/Return/945000960",
      "declineReason": "RETURN_PERIOD_ENDED"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
        returnDeclineRequest(input: $input) {
          return {
            id
            status
            decline {
              reason
            }
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
              "id": "gid://shopify/Return/945000960",
              "declineReason": "RETURN_PERIOD_ENDED"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "returnDeclineRequest": {
      "return": {
        "id": "gid://shopify/Return/945000960",
        "status": "DECLINED",
        "decline": {
          "reason": "RETURN_PERIOD_ENDED"
        },
        "returnLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/ReturnLineItem/677614677"
              }
            }
          ]
        },
        "order": {
          "id": "gid://shopify/Order/625362839"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### returnDeclineRequest reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ReturnDeclineRequest\(%24input%3A%20ReturnDeclineRequestInput!\)%20%7B%0A%20%20returnDeclineRequest\(input%3A%20%24input\)%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FReturn%2F491427904%22%2C%0A%20%20%20%20%22declineReason%22%3A%20%22RETURN_PERIOD_ENDED%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
  returnDeclineRequest(input: $input) {
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

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) { returnDeclineRequest(input: $input) { return { id status } userErrors { code field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Return/491427904",
      "declineReason": "RETURN_PERIOD_ENDED"
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
  mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
    returnDeclineRequest(input: $input) {
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
            "id": "gid://shopify/Return/491427904",
            "declineReason": "RETURN_PERIOD_ENDED"
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
    "query": `mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
      returnDeclineRequest(input: $input) {
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
            "id": "gid://shopify/Return/491427904",
            "declineReason": "RETURN_PERIOD_ENDED"
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
  mutation ReturnDeclineRequest($input: ReturnDeclineRequestInput!) {
    returnDeclineRequest(input: $input) {
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
    "id": "gid://shopify/Return/491427904",
    "declineReason": "RETURN_PERIOD_ENDED"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/Return/491427904",
    "declineReason": "RETURN_PERIOD_ENDED"
  }
}
```

## Response

JSON

```json
{
  "returnDeclineRequest": {
    "return": null,
    "userErrors": [
      {
        "code": "INVALID_STATE",
        "field": [
          "input",
          "id"
        ],
        "message": "Return is not declinable. Only non-refunded returns with status REQUESTED can be declined."
      }
    ]
  }
}
```
