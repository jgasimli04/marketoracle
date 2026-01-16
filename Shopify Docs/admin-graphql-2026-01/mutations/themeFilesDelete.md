---
title: themeFilesDelete - GraphQL Admin
description: Deletes a theme's files.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete.md
---

# theme​Files​Delete

mutation

Requires The user needs write\_themes and an exemption from Shopify to modify theme files. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Deletes a theme's files.

## Arguments

* files

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The files to delete.

* theme​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the theme to deleted.

***

## Theme​Files​Delete​Payload returns

* deleted​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a theme file

  #### Query

  ```graphql
  mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
    themeFilesDelete(themeId: $themeId, files: $files) {
      deletedThemeFiles {
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
      "templates/index.json"
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
  "query": "mutation themeFilesDelete($themeId: ID!, $files: [String!]!) { themeFilesDelete(themeId: $themeId, files: $files) { deletedThemeFiles { filename } userErrors { field message } } }",
   "variables": {
      "themeId": "gid://shopify/OnlineStoreTheme/529529152",
      "files": [
        "templates/index.json"
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
    mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
      themeFilesDelete(themeId: $themeId, files: $files) {
        deletedThemeFiles {
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
              "templates/index.json"
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
    mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
      themeFilesDelete(themeId: $themeId, files: $files) {
        deletedThemeFiles {
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
      "templates/index.json"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
        themeFilesDelete(themeId: $themeId, files: $files) {
          deletedThemeFiles {
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
              "templates/index.json"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeFilesDelete": {
      "deletedThemeFiles": [
        {
          "filename": "templates/index.json"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Deletes an asset from a theme

  #### Query

  ```graphql
  mutation ThemeFilesDelete($files: [String!]!, $themeId: ID!) {
    themeFilesDelete(files: $files, themeId: $themeId) {
      deletedThemeFiles {
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
      "sections/content_section.liquid"
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
  "query": "mutation ThemeFilesDelete($files: [String!]!, $themeId: ID!) { themeFilesDelete(files: $files, themeId: $themeId) { deletedThemeFiles { filename } userErrors { code field filename message } } }",
   "variables": {
      "themeId": "gid://shopify/OnlineStoreTheme/529529152",
      "files": [
        "sections/content_section.liquid"
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
    mutation ThemeFilesDelete($files: [String!]!, $themeId: ID!) {
      themeFilesDelete(files: $files, themeId: $themeId) {
        deletedThemeFiles {
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
              "sections/content_section.liquid"
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
    mutation ThemeFilesDelete($files: [String!]!, $themeId: ID!) {
      themeFilesDelete(files: $files, themeId: $themeId) {
        deletedThemeFiles {
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
      "sections/content_section.liquid"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ThemeFilesDelete($files: [String!]!, $themeId: ID!) {
        themeFilesDelete(files: $files, themeId: $themeId) {
          deletedThemeFiles {
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
              "sections/content_section.liquid"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeFilesDelete": {
      "deletedThemeFiles": [
        {
          "filename": "sections/content_section.liquid"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### themeFilesDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeFilesDelete\(%24themeId%3A%20ID!%2C%20%24files%3A%20%5BString!%5D!\)%20%7B%0A%20%20themeFilesDelete\(themeId%3A%20%24themeId%2C%20files%3A%20%24files\)%20%7B%0A%20%20%20%20deletedThemeFiles%20%7B%0A%20%20%20%20%20%20filename%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22themeId%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F529529152%22%2C%0A%20%20%22files%22%3A%20%5B%0A%20%20%20%20%22templates%2Findex.json%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
  themeFilesDelete(themeId: $themeId, files: $files) {
    deletedThemeFiles {
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
"query": "mutation themeFilesDelete($themeId: ID!, $files: [String!]!) { themeFilesDelete(themeId: $themeId, files: $files) { deletedThemeFiles { filename } userErrors { field message } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      "templates/index.json"
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
  mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
    themeFilesDelete(themeId: $themeId, files: $files) {
      deletedThemeFiles {
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
            "templates/index.json"
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
    "query": `mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
      themeFilesDelete(themeId: $themeId, files: $files) {
        deletedThemeFiles {
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
            "templates/index.json"
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
  mutation themeFilesDelete($themeId: ID!, $files: [String!]!) {
    themeFilesDelete(themeId: $themeId, files: $files) {
      deletedThemeFiles {
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
    "templates/index.json"
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
    "templates/index.json"
  ]
}
```

## Response

JSON

```json
{
  "themeFilesDelete": {
    "deletedThemeFiles": [
      {
        "filename": "templates/index.json"
      }
    ],
    "userErrors": []
  }
}
```
