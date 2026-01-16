---
title: shopLocaleUpdate - GraphQL Admin
description: Updates a locale for a shop.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate.md
---

# shop​Locale​Update

mutation

Requires `write_locales` access scope.

Updates a locale for a shop.

## Arguments

* locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  ISO code of the locale to update.

* shop​Locale

  [Shop​Locale​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

  required

  Specifies the input fields for a shop locale.

***

## Shop​Locale​Update​Payload returns

* shop​Locale

  [Shop​Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  The locale that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Publish a locale

  #### Description

  Publishing a locale makes it available for translation. Make sure that you enable the locale before publishing it. A shop can have up to 20 alternate published locales.

  #### Query

  ```graphql
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "locale": "ko",
    "shopLocale": {
      "published": true
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
  "query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
   "variables": {
      "locale": "ko",
      "shopLocale": {
        "published": true
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
    mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    {
      variables: {
          "locale": "ko",
          "shopLocale": {
              "published": true
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
    mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }
  QUERY

  variables = {
    "locale": "ko",
    "shopLocale": {
      "published": true
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
        shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
          userErrors {
            message
            field
          }
          shopLocale {
            name
            locale
            primary
            published
          }
        }
      }`,
      "variables": {
          "locale": "ko",
          "shopLocale": {
              "published": true
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "shopLocaleUpdate": {
      "userErrors": [],
      "shopLocale": {
        "name": "Korean",
        "locale": "ko",
        "primary": false,
        "published": true
      }
    }
  }
  ```

* ### Unpublish a locale

  #### Query

  ```graphql
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "locale": "ko",
    "shopLocale": {
      "published": false
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
  "query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
   "variables": {
      "locale": "ko",
      "shopLocale": {
        "published": false
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
    mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    {
      variables: {
          "locale": "ko",
          "shopLocale": {
              "published": false
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
    mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }
  QUERY

  variables = {
    "locale": "ko",
    "shopLocale": {
      "published": false
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
        shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
          userErrors {
            message
            field
          }
          shopLocale {
            name
            locale
            primary
            published
          }
        }
      }`,
      "variables": {
          "locale": "ko",
          "shopLocale": {
              "published": false
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "shopLocaleUpdate": {
      "userErrors": [],
      "shopLocale": {
        "name": "Korean",
        "locale": "ko",
        "primary": false,
        "published": false
      }
    }
  }
  ```

* ### shopLocaleUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateLocale\(%24locale%3A%20String!%2C%20%24shopLocale%3A%20ShopLocaleInput!\)%20%7B%0A%20%20shopLocaleUpdate\(locale%3A%20%24locale%2C%20shopLocale%3A%20%24shopLocale\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20shopLocale%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20locale%0A%20%20%20%20%20%20primary%0A%20%20%20%20%20%20published%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22locale%22%3A%20%22ko%22%2C%0A%20%20%22shopLocale%22%3A%20%7B%0A%20%20%20%20%22published%22%3A%20true%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
  shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
    userErrors {
      message
      field
    }
    shopLocale {
      name
      locale
      primary
      published
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
"query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
 "variables": {
    "locale": "ko",
    "shopLocale": {
      "published": true
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
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko",
        "shopLocale": {
            "published": true
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
    "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko",
        "shopLocale": {
            "published": true
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
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko",
  "shopLocale": {
    "published": true
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "locale": "ko",
  "shopLocale": {
    "published": true
  }
}
```

## Response

JSON

```json
{
  "shopLocaleUpdate": {
    "userErrors": [],
    "shopLocale": {
      "name": "Korean",
      "locale": "ko",
      "primary": false,
      "published": true
    }
  }
}
```
