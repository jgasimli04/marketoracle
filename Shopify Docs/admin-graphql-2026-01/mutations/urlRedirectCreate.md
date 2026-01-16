---
title: urlRedirectCreate - GraphQL Admin
description: >-
  Creates a
  [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect)
  object.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate.md
---

# url​Redirect​Create

mutation

Requires `write_online_store_navigation` access scope.

Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

## Arguments

* url​Redirect

  [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

  required

  The fields to use when creating the redirect.

***

## Url​Redirect​Create​Payload returns

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  The created redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a redirect

  #### Query

  ```graphql
  mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
    urlRedirectCreate(urlRedirect: $urlRedirect) {
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
  "query": "mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) { urlRedirectCreate(urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
   "variables": {
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
    mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
      urlRedirectCreate(urlRedirect: $urlRedirect) {
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
    mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
      urlRedirectCreate(urlRedirect: $urlRedirect) {
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
      "query": `mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
        urlRedirectCreate(urlRedirect: $urlRedirect) {
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
    "urlRedirectCreate": {
      "urlRedirect": {
        "id": "gid://shopify/UrlRedirect/984542199",
        "path": "/thepath",
        "target": "/thetarget"
      },
      "userErrors": []
    }
  }
  ```

* ### urlRedirectCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UrlRedirectCreate\(%24urlRedirect%3A%20UrlRedirectInput!\)%20%7B%0A%20%20urlRedirectCreate\(urlRedirect%3A%20%24urlRedirect\)%20%7B%0A%20%20%20%20urlRedirect%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20path%0A%20%20%20%20%20%20target%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22urlRedirect%22%3A%20%7B%0A%20%20%20%20%22path%22%3A%20%22%2Fthepath%22%2C%0A%20%20%20%20%22target%22%3A%20%22%2Fthetarget%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
  urlRedirectCreate(urlRedirect: $urlRedirect) {
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
"query": "mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) { urlRedirectCreate(urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
 "variables": {
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
  mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
    urlRedirectCreate(urlRedirect: $urlRedirect) {
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
    "query": `mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
      urlRedirectCreate(urlRedirect: $urlRedirect) {
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
  mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
    urlRedirectCreate(urlRedirect: $urlRedirect) {
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
  "urlRedirectCreate": {
    "urlRedirect": {
      "id": "gid://shopify/UrlRedirect/984542199",
      "path": "/thepath",
      "target": "/thetarget"
    },
    "userErrors": []
  }
}
```
