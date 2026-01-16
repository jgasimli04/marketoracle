---
title: urlRedirectDelete - GraphQL Admin
description: >-
  Deletes a
  [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
  object.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete.md
---

# url​Redirect​Delete

mutation

Requires `write_online_store_navigation` access scope.

Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the redirect to delete.

***

## Url​Redirect​Delete​Payload returns

* deleted​Url​Redirect​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Deletes a redirect

  #### Query

  ```graphql
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
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
    "id": "gid://shopify/UrlRedirect/905192165"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation UrlRedirectDelete($id: ID!) { urlRedirectDelete(id: $id) { deletedUrlRedirectId userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/UrlRedirect/905192165"
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
    mutation UrlRedirectDelete($id: ID!) {
      urlRedirectDelete(id: $id) {
        deletedUrlRedirectId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/UrlRedirect/905192165"
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
    mutation UrlRedirectDelete($id: ID!) {
      urlRedirectDelete(id: $id) {
        deletedUrlRedirectId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/UrlRedirect/905192165"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UrlRedirectDelete($id: ID!) {
        urlRedirectDelete(id: $id) {
          deletedUrlRedirectId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/UrlRedirect/905192165"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "urlRedirectDelete": {
      "deletedUrlRedirectId": "gid://shopify/UrlRedirect/905192165",
      "userErrors": []
    }
  }
  ```

* ### urlRedirectDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UrlRedirectDelete\(%24id%3A%20ID!\)%20%7B%0A%20%20urlRedirectDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedUrlRedirectId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FUrlRedirect%2F905192165%22%0A%7D)

##### GQL

```graphql
mutation UrlRedirectDelete($id: ID!) {
  urlRedirectDelete(id: $id) {
    deletedUrlRedirectId
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
"query": "mutation UrlRedirectDelete($id: ID!) { urlRedirectDelete(id: $id) { deletedUrlRedirectId userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165"
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
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165"
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
    "query": `mutation UrlRedirectDelete($id: ID!) {
      urlRedirectDelete(id: $id) {
        deletedUrlRedirectId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165"
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
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/UrlRedirect/905192165"
}
```

## Response

JSON

```json
{
  "urlRedirectDelete": {
    "deletedUrlRedirectId": "gid://shopify/UrlRedirect/905192165",
    "userErrors": []
  }
}
```
