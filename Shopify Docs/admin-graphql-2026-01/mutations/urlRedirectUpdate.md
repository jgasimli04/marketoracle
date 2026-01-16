---
title: urlRedirectUpdate - GraphQL Admin
description: Updates a URL redirect.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate.md
---

# url​Redirect​Update

mutation

Requires `write_online_store_navigation` access scope.

Updates a URL redirect.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the URL redirect to update.

* url​Redirect

  [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

  required

  The input fields required to update the URL redirect.

***

## Url​Redirect​Update​Payload returns

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  Returns the updated URL redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Updates an existing redirect

  #### Query

  ```graphql
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
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
    "id": "gid://shopify/UrlRedirect/905192165",
    "urlRedirect": {
      "path": "/thepath",
      "target": "/thetarget"
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
  "query": "mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) { urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/UrlRedirect/905192165",
      "urlRedirect": {
        "path": "/thepath",
        "target": "/thetarget"
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
    mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
      urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
        urlRedirect {
          id
          path
          target
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/UrlRedirect/905192165",
          "urlRedirect": {
              "path": "/thepath",
              "target": "/thetarget"
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
    mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
      urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
        urlRedirect {
          id
          path
          target
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/UrlRedirect/905192165",
    "urlRedirect": {
      "path": "/thepath",
      "target": "/thetarget"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
        urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
          urlRedirect {
            id
            path
            target
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/UrlRedirect/905192165",
          "urlRedirect": {
              "path": "/thepath",
              "target": "/thetarget"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "urlRedirectUpdate": {
      "urlRedirect": {
        "id": "gid://shopify/UrlRedirect/905192165",
        "path": "/thepath",
        "target": "/thetarget"
      },
      "userErrors": []
    }
  }
  ```

* ### urlRedirectUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UrlRedirectUpdate\(%24id%3A%20ID!%2C%20%24urlRedirect%3A%20UrlRedirectInput!\)%20%7B%0A%20%20urlRedirectUpdate\(id%3A%20%24id%2C%20urlRedirect%3A%20%24urlRedirect\)%20%7B%0A%20%20%20%20urlRedirect%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20path%0A%20%20%20%20%20%20target%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FUrlRedirect%2F905192165%22%2C%0A%20%20%22urlRedirect%22%3A%20%7B%0A%20%20%20%20%22path%22%3A%20%22%2Fthepath%22%2C%0A%20%20%20%20%22target%22%3A%20%22%2Fthetarget%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
  urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
    urlRedirect {
      id
      path
      target
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
"query": "mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) { urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165",
    "urlRedirect": {
      "path": "/thepath",
      "target": "/thetarget"
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
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
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
    "query": `mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
      urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
        urlRedirect {
          id
          path
          target
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
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
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165",
  "urlRedirect": {
    "path": "/thepath",
    "target": "/thetarget"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/UrlRedirect/905192165",
  "urlRedirect": {
    "path": "/thepath",
    "target": "/thetarget"
  }
}
```

## Response

JSON

```json
{
  "urlRedirectUpdate": {
    "urlRedirect": {
      "id": "gid://shopify/UrlRedirect/905192165",
      "path": "/thepath",
      "target": "/thetarget"
    },
    "userErrors": []
  }
}
```
