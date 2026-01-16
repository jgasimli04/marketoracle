---
title: translationsRemove - GraphQL Admin
description: Deletes translations.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove.md
---

# translations​Remove

mutation

Requires `write_translations` access scope.

Deletes translations.

## Arguments

* locales

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The list of translation locales. Only locales returned in `shopLocales` are valid.

* market​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of market IDs.

* resource​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  ID of the translatable resource for which translations are being deleted.

* translation​Keys

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The list of translation keys.

***

## Translations​Remove​Payload returns

* translations

  [\[Translation!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  The translations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove a French product title translation

  #### Description

  Translations matching all of the inputs will be removed. In this example, we are removing the product title's French translation that is not specific to any market.

  #### Query

  ```graphql
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) { userErrors { message field } translations { key value } } }",
   "variables": {
      "resourceId": "gid://shopify/Product/20995642",
      "locales": [
        "fr"
      ],
      "translationKeys": [
        "title"
      ]
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
    mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
        }
      }
    }`,
    {
      variables: {
          "resourceId": "gid://shopify/Product/20995642",
          "locales": [
              "fr"
          ],
          "translationKeys": [
              "title"
          ]
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
    mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
        }
      }
    }
  QUERY

  variables = {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
        translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
          userErrors {
            message
            field
          }
          translations {
            key
            value
          }
        }
      }`,
      "variables": {
          "resourceId": "gid://shopify/Product/20995642",
          "locales": [
              "fr"
          ],
          "translationKeys": [
              "title"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "translationsRemove": {
      "userErrors": [],
      "translations": [
        {
          "key": "title",
          "value": "L'élément"
        }
      ]
    }
  }
  ```

* ### Remove a French product title translation specific to a market

  #### Description

  To remove content that surfaces only to buyers in specific markets, make use of the optional \`marketIds\` argument. In this example, the targeted market has an ID of \`gid://shopify/Market/128989799\`.

  #### Query

  ```graphql
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ],
    "marketIds": [
      "gid://shopify/Market/128989799"
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) { userErrors { message field } translations { key value market { id } } } }",
   "variables": {
      "resourceId": "gid://shopify/Product/20995642",
      "locales": [
        "fr"
      ],
      "translationKeys": [
        "title"
      ],
      "marketIds": [
        "gid://shopify/Market/128989799"
      ]
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
    mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
          market {
            id
          }
        }
      }
    }`,
    {
      variables: {
          "resourceId": "gid://shopify/Product/20995642",
          "locales": [
              "fr"
          ],
          "translationKeys": [
              "title"
          ],
          "marketIds": [
              "gid://shopify/Market/128989799"
          ]
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
    mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
          market {
            id
          }
        }
      }
    }
  QUERY

  variables = {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ],
    "marketIds": [
      "gid://shopify/Market/128989799"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
        translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
          userErrors {
            message
            field
          }
          translations {
            key
            value
            market {
              id
            }
          }
        }
      }`,
      "variables": {
          "resourceId": "gid://shopify/Product/20995642",
          "locales": [
              "fr"
          ],
          "translationKeys": [
              "title"
          ],
          "marketIds": [
              "gid://shopify/Market/128989799"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "translationsRemove": {
      "userErrors": [],
      "translations": [
        {
          "key": "title",
          "value": "L'élément canadien",
          "market": {
            "id": "gid://shopify/Market/128989799"
          }
        }
      ]
    }
  }
  ```

* ### translationsRemove reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20translationsRemove\(%24resourceId%3A%20ID!%2C%20%24translationKeys%3A%20%5BString!%5D!%2C%20%24locales%3A%20%5BString!%5D!\)%20%7B%0A%20%20translationsRemove\(resourceId%3A%20%24resourceId%2C%20translationKeys%3A%20%24translationKeys%2C%20locales%3A%20%24locales\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20translations%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22locales%22%3A%20%5B%0A%20%20%20%20%22fr%22%0A%20%20%5D%2C%0A%20%20%22translationKeys%22%3A%20%5B%0A%20%20%20%20%22title%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
  translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
    userErrors {
      message
      field
    }
    translations {
      key
      value
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
"query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) { userErrors { message field } translations { key value } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ]
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
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
        ]
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
    "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
        ]
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
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "resourceId": "gid://shopify/Product/20995642",
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ]
}
```

## Response

JSON

```json
{
  "translationsRemove": {
    "userErrors": [],
    "translations": [
      {
        "key": "title",
        "value": "L'élément"
      }
    ]
  }
}
```
