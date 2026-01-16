---
title: mobilePlatformApplicationUpdate - GraphQL Admin
description: Update a mobile platform application.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate.md
---

# mobile​Platform​Application​Update

mutation

Requires `write_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Update a mobile platform application.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the Mobile Platform Application to be updated.

* input

  [Mobile​Platform​Application​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationUpdateInput)

  required

  The input to updat a Mobile Platform Application.

***

## Mobile​Platform​Application​Update​Payload returns

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Created mobile platform application.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update a mobile platform application

  #### Query

  ```graphql
  mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
    mobilePlatformApplicationUpdate(id: $id, input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
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
    "id": "gid://shopify/MobilePlatformApplication/1066176040",
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false,
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app"
      }
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
  "query": "mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) { mobilePlatformApplicationUpdate(id: $id, input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/MobilePlatformApplication/1066176040",
      "input": {
        "apple": {
          "appId": "com.apple.package",
          "universalLinksEnabled": false,
          "sharedWebCredentialsEnabled": false,
          "appClipsEnabled": true,
          "appClipApplicationId": "clip.app"
        }
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
    mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MobilePlatformApplication/1066176040",
          "input": {
              "apple": {
                  "appId": "com.apple.package",
                  "universalLinksEnabled": false,
                  "sharedWebCredentialsEnabled": false,
                  "appClipsEnabled": true,
                  "appClipApplicationId": "clip.app"
              }
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
    mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MobilePlatformApplication/1066176040",
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false,
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app"
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
        mobilePlatformApplicationUpdate(id: $id, input: $input) {
          mobilePlatformApplication {
            ... on AppleApplication {
              id
              appId
              universalLinksEnabled
              sharedWebCredentialsEnabled
              appClipsEnabled
              appClipApplicationId
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MobilePlatformApplication/1066176040",
          "input": {
              "apple": {
                  "appId": "com.apple.package",
                  "universalLinksEnabled": false,
                  "sharedWebCredentialsEnabled": false,
                  "appClipsEnabled": true,
                  "appClipApplicationId": "clip.app"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "mobilePlatformApplicationUpdate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176040",
        "appId": "com.apple.package",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false,
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app"
      },
      "userErrors": []
    }
  }
  ```

* ### Update an Android Mobile Platform Application

  #### Description

  Update a Mobile Platform Application for the Android platform.

  #### Query

  ```graphql
  mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
    mobilePlatformApplicationUpdate(id: $id, input: $input) {
      mobilePlatformApplication {
        ... on AndroidApplication {
          id
          applicationId
          sha256CertFingerprints
          appLinksEnabled
          __typename
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MobilePlatformApplication/1066176035",
    "input": {
      "android": {
        "applicationId": "com.android.package",
        "appLinksEnabled": true,
        "sha256CertFingerprints": [
          "A1:B2:C3:D4"
        ]
      }
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
  "query": "mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) { mobilePlatformApplicationUpdate(id: $id, input: $input) { mobilePlatformApplication { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } } userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/MobilePlatformApplication/1066176035",
      "input": {
        "android": {
          "applicationId": "com.android.package",
          "appLinksEnabled": true,
          "sha256CertFingerprints": [
            "A1:B2:C3:D4"
          ]
        }
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
    mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MobilePlatformApplication/1066176035",
          "input": {
              "android": {
                  "applicationId": "com.android.package",
                  "appLinksEnabled": true,
                  "sha256CertFingerprints": [
                      "A1:B2:C3:D4"
                  ]
              }
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
    mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MobilePlatformApplication/1066176035",
    "input": {
      "android": {
        "applicationId": "com.android.package",
        "appLinksEnabled": true,
        "sha256CertFingerprints": [
          "A1:B2:C3:D4"
        ]
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
        mobilePlatformApplicationUpdate(id: $id, input: $input) {
          mobilePlatformApplication {
            ... on AndroidApplication {
              id
              applicationId
              sha256CertFingerprints
              appLinksEnabled
              __typename
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MobilePlatformApplication/1066176035",
          "input": {
              "android": {
                  "applicationId": "com.android.package",
                  "appLinksEnabled": true,
                  "sha256CertFingerprints": [
                      "A1:B2:C3:D4"
                  ]
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "mobilePlatformApplicationUpdate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176035",
        "applicationId": "com.android.package",
        "sha256CertFingerprints": [
          "A1:B2:C3:D4"
        ],
        "appLinksEnabled": true,
        "__typename": "AndroidApplication"
      },
      "userErrors": []
    }
  }
  ```

* ### Update an Apple Mobile Platform Application

  #### Description

  Update a Mobile Platform Application for the Apple platform.

  #### Query

  ```graphql
  mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
    mobilePlatformApplicationUpdate(id: $id, input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
          __typename
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MobilePlatformApplication/1066176032",
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false
      }
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
  "query": "mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) { mobilePlatformApplicationUpdate(id: $id, input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId __typename } } userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/MobilePlatformApplication/1066176032",
      "input": {
        "apple": {
          "appId": "com.apple.package",
          "appClipsEnabled": true,
          "appClipApplicationId": "clip.app",
          "universalLinksEnabled": false,
          "sharedWebCredentialsEnabled": false
        }
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
    mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
            __typename
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MobilePlatformApplication/1066176032",
          "input": {
              "apple": {
                  "appId": "com.apple.package",
                  "appClipsEnabled": true,
                  "appClipApplicationId": "clip.app",
                  "universalLinksEnabled": false,
                  "sharedWebCredentialsEnabled": false
              }
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
    mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
            __typename
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MobilePlatformApplication/1066176032",
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpdateMobilePlatformApplication($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
        mobilePlatformApplicationUpdate(id: $id, input: $input) {
          mobilePlatformApplication {
            ... on AppleApplication {
              id
              appId
              universalLinksEnabled
              sharedWebCredentialsEnabled
              appClipsEnabled
              appClipApplicationId
              __typename
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MobilePlatformApplication/1066176032",
          "input": {
              "apple": {
                  "appId": "com.apple.package",
                  "appClipsEnabled": true,
                  "appClipApplicationId": "clip.app",
                  "universalLinksEnabled": false,
                  "sharedWebCredentialsEnabled": false
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "mobilePlatformApplicationUpdate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176032",
        "appId": "com.apple.package",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false,
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "__typename": "AppleApplication"
      },
      "userErrors": []
    }
  }
  ```

* ### mobilePlatformApplicationUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20MobilePlatformApplicationUpdate\(%24id%3A%20ID!%2C%20%24input%3A%20MobilePlatformApplicationUpdateInput!\)%20%7B%0A%20%20mobilePlatformApplicationUpdate\(id%3A%20%24id%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20mobilePlatformApplication%20%7B%0A%20%20%20%20%20%20...%20on%20AppleApplication%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20appId%0A%20%20%20%20%20%20%20%20universalLinksEnabled%0A%20%20%20%20%20%20%20%20sharedWebCredentialsEnabled%0A%20%20%20%20%20%20%20%20appClipsEnabled%0A%20%20%20%20%20%20%20%20appClipApplicationId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMobilePlatformApplication%2F1066176040%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22apple%22%3A%20%7B%0A%20%20%20%20%20%20%22appId%22%3A%20%22com.apple.package%22%2C%0A%20%20%20%20%20%20%22universalLinksEnabled%22%3A%20false%2C%0A%20%20%20%20%20%20%22sharedWebCredentialsEnabled%22%3A%20false%2C%0A%20%20%20%20%20%20%22appClipsEnabled%22%3A%20true%2C%0A%20%20%20%20%20%20%22appClipApplicationId%22%3A%20%22clip.app%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
  mobilePlatformApplicationUpdate(id: $id, input: $input) {
    mobilePlatformApplication {
      ... on AppleApplication {
        id
        appId
        universalLinksEnabled
        sharedWebCredentialsEnabled
        appClipsEnabled
        appClipApplicationId
      }
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
"query": "mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) { mobilePlatformApplicationUpdate(id: $id, input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/MobilePlatformApplication/1066176040",
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false,
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app"
      }
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
  mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
    mobilePlatformApplicationUpdate(id: $id, input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MobilePlatformApplication/1066176040",
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false,
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app"
            }
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
    "query": `mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
      mobilePlatformApplicationUpdate(id: $id, input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MobilePlatformApplication/1066176040",
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false,
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app"
            }
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
  mutation MobilePlatformApplicationUpdate($id: ID!, $input: MobilePlatformApplicationUpdateInput!) {
    mobilePlatformApplicationUpdate(id: $id, input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MobilePlatformApplication/1066176040",
  "input": {
    "apple": {
      "appId": "com.apple.package",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false,
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app"
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/MobilePlatformApplication/1066176040",
  "input": {
    "apple": {
      "appId": "com.apple.package",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false,
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app"
    }
  }
}
```

## Response

JSON

```json
{
  "mobilePlatformApplicationUpdate": {
    "mobilePlatformApplication": {
      "id": "gid://shopify/MobilePlatformApplication/1066176040",
      "appId": "com.apple.package",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false,
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app"
    },
    "userErrors": []
  }
}
```
