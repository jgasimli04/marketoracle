---
title: themeFilesCopy - GraphQL Admin
description: Copy theme files. Copying to existing theme files will overwrite them.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy.md
---

# theme​Files​Copy

mutation

Requires The user needs write\_themes and an exemption from Shopify to modify theme files. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Copy theme files. Copying to existing theme files will overwrite them.

## Arguments

* files

  [\[Theme​Files​Copy​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ThemeFilesCopyFileInput)

  required

  The files to update.

* theme​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The theme to update.

***

## Theme​Files​Copy​Payload returns

* copied​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Copy the content of a file into another file

  #### Query

  ```graphql
  mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
    themeFilesCopy(files: $files, themeId: $themeId) {
      copiedThemeFiles {
        filename
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
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "dstFilename": "templates/index.alt.json",
        "srcFilename": "templates/index.json"
      }
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
  "query": "mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) { themeFilesCopy(files: $files, themeId: $themeId) { copiedThemeFiles { filename } userErrors { field message } } }",
   "variables": {
      "themeId": "gid://shopify/OnlineStoreTheme/529529152",
      "files": [
        {
          "dstFilename": "templates/index.alt.json",
          "srcFilename": "templates/index.json"
        }
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
    mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
      themeFilesCopy(files: $files, themeId: $themeId) {
        copiedThemeFiles {
          filename
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "themeId": "gid://shopify/OnlineStoreTheme/529529152",
          "files": [
              {
                  "dstFilename": "templates/index.alt.json",
                  "srcFilename": "templates/index.json"
              }
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
    mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
      themeFilesCopy(files: $files, themeId: $themeId) {
        copiedThemeFiles {
          filename
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "dstFilename": "templates/index.alt.json",
        "srcFilename": "templates/index.json"
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
        themeFilesCopy(files: $files, themeId: $themeId) {
          copiedThemeFiles {
            filename
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "themeId": "gid://shopify/OnlineStoreTheme/529529152",
          "files": [
              {
                  "dstFilename": "templates/index.alt.json",
                  "srcFilename": "templates/index.json"
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeFilesCopy": {
      "copiedThemeFiles": [
        {
          "filename": "templates/index.alt.json"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Creates or updates an asset for a theme

  #### Query

  ```graphql
  mutation ThemeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
    themeFilesCopy(files: $files, themeId: $themeId) {
      copiedThemeFiles {
        filename
      }
      userErrors {
        code
        field
        filename
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "dstFilename": "templates/index.alt.liquid",
        "srcFilename": "templates/index.liquid"
      }
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
  "query": "mutation ThemeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) { themeFilesCopy(files: $files, themeId: $themeId) { copiedThemeFiles { filename } userErrors { code field filename message } } }",
   "variables": {
      "themeId": "gid://shopify/OnlineStoreTheme/529529152",
      "files": [
        {
          "dstFilename": "templates/index.alt.liquid",
          "srcFilename": "templates/index.liquid"
        }
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
    mutation ThemeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
      themeFilesCopy(files: $files, themeId: $themeId) {
        copiedThemeFiles {
          filename
        }
        userErrors {
          code
          field
          filename
          message
        }
      }
    }`,
    {
      variables: {
          "themeId": "gid://shopify/OnlineStoreTheme/529529152",
          "files": [
              {
                  "dstFilename": "templates/index.alt.liquid",
                  "srcFilename": "templates/index.liquid"
              }
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
    mutation ThemeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
      themeFilesCopy(files: $files, themeId: $themeId) {
        copiedThemeFiles {
          filename
        }
        userErrors {
          code
          field
          filename
          message
        }
      }
    }
  QUERY

  variables = {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "dstFilename": "templates/index.alt.liquid",
        "srcFilename": "templates/index.liquid"
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ThemeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
        themeFilesCopy(files: $files, themeId: $themeId) {
          copiedThemeFiles {
            filename
          }
          userErrors {
            code
            field
            filename
            message
          }
        }
      }`,
      "variables": {
          "themeId": "gid://shopify/OnlineStoreTheme/529529152",
          "files": [
              {
                  "dstFilename": "templates/index.alt.liquid",
                  "srcFilename": "templates/index.liquid"
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeFilesCopy": {
      "copiedThemeFiles": [
        {
          "filename": "templates/index.alt.liquid"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### themeFilesCopy reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeFilesCopy\(%24files%3A%20%5BThemeFilesCopyFileInput!%5D!%2C%20%24themeId%3A%20ID!\)%20%7B%0A%20%20themeFilesCopy\(files%3A%20%24files%2C%20themeId%3A%20%24themeId\)%20%7B%0A%20%20%20%20copiedThemeFiles%20%7B%0A%20%20%20%20%20%20filename%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22themeId%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F529529152%22%2C%0A%20%20%22files%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22dstFilename%22%3A%20%22templates%2Findex.alt.json%22%2C%0A%20%20%20%20%20%20%22srcFilename%22%3A%20%22templates%2Findex.json%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
  themeFilesCopy(files: $files, themeId: $themeId) {
    copiedThemeFiles {
      filename
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
"query": "mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) { themeFilesCopy(files: $files, themeId: $themeId) { copiedThemeFiles { filename } userErrors { field message } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "dstFilename": "templates/index.alt.json",
        "srcFilename": "templates/index.json"
      }
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
  mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
    themeFilesCopy(files: $files, themeId: $themeId) {
      copiedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "dstFilename": "templates/index.alt.json",
                "srcFilename": "templates/index.json"
            }
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
    "query": `mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
      themeFilesCopy(files: $files, themeId: $themeId) {
        copiedThemeFiles {
          filename
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "dstFilename": "templates/index.alt.json",
                "srcFilename": "templates/index.json"
            }
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
  mutation themeFilesCopy($files: [ThemeFilesCopyFileInput!]!, $themeId: ID!) {
    themeFilesCopy(files: $files, themeId: $themeId) {
      copiedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "dstFilename": "templates/index.alt.json",
      "srcFilename": "templates/index.json"
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "dstFilename": "templates/index.alt.json",
      "srcFilename": "templates/index.json"
    }
  ]
}
```

## Response

JSON

```json
{
  "themeFilesCopy": {
    "copiedThemeFiles": [
      {
        "filename": "templates/index.alt.json"
      }
    ],
    "userErrors": []
  }
}
```
