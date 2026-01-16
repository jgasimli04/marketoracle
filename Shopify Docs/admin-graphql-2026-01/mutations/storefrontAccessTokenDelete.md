---
title: storefrontAccessTokenDelete - GraphQL Admin
description: Deletes a storefront access token.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete.md
---

# storefront​Access​Token​Delete

mutation

Deletes a storefront access token.

## Arguments

* input

  [Storefront​Access​Token​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

  required

  Provides the input fields required to delete a storefront access token.

***

## Storefront​Access​Token​Delete​Payload returns

* deleted​Storefront​Access​Token​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted storefront access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a Storefront Access Token.

  #### Description

  This example demonstrates how to delete a storefront access token.

  #### Query

  ```graphql
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
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
      "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  "query": "mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) { storefrontAccessTokenDelete(input: $input) { deletedStorefrontAccessTokenId userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
      storefrontAccessTokenDelete(input: $input) {
        deletedStorefrontAccessTokenId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
      storefrontAccessTokenDelete(input: $input) {
        deletedStorefrontAccessTokenId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/StorefrontAccessToken/55270800"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
        storefrontAccessTokenDelete(input: $input) {
          deletedStorefrontAccessTokenId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/StorefrontAccessToken/55270800"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "storefrontAccessTokenDelete": {
      "deletedStorefrontAccessTokenId": "gid://shopify/StorefrontAccessToken/55270800",
      "userErrors": []
    }
  }
  ```

* ### Deletes an existing storefront access token

  #### Query

  ```graphql
  mutation storefrontAccessTokenDelete($id: ID!) {
    storefrontAccessTokenDelete(input: {id: $id}) {
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
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation storefrontAccessTokenDelete($id: ID!) { storefrontAccessTokenDelete(input: {id: $id}) { userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    mutation storefrontAccessTokenDelete($id: ID!) {
      storefrontAccessTokenDelete(input: {id: $id}) {
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    mutation storefrontAccessTokenDelete($id: ID!) {
      storefrontAccessTokenDelete(input: {id: $id}) {
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation storefrontAccessTokenDelete($id: ID!) {
        storefrontAccessTokenDelete(input: {id: $id}) {
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/StorefrontAccessToken/55270800"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "storefrontAccessTokenDelete": {
      "userErrors": []
    }
  }
  ```

* ### storefrontAccessTokenDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20storefrontAccessTokenDelete\(%24input%3A%20StorefrontAccessTokenDeleteInput!\)%20%7B%0A%20%20storefrontAccessTokenDelete\(input%3A%20%24input\)%20%7B%0A%20%20%20%20deletedStorefrontAccessTokenId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStorefrontAccessToken%2F55270800%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
  storefrontAccessTokenDelete(input: $input) {
    deletedStorefrontAccessTokenId
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
"query": "mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) { storefrontAccessTokenDelete(input: $input) { deletedStorefrontAccessTokenId userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    "query": `mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
      storefrontAccessTokenDelete(input: $input) {
        deletedStorefrontAccessTokenId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
}
```

## Response

JSON

```json
{
  "storefrontAccessTokenDelete": {
    "deletedStorefrontAccessTokenId": "gid://shopify/StorefrontAccessToken/55270800",
    "userErrors": []
  }
}
```
