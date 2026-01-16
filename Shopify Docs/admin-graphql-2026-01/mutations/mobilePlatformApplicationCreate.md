---
title: mobilePlatformApplicationCreate - GraphQL Admin
description: Create a mobile platform application.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate.md
---

# mobile​Platform​Application​Create

mutation

Requires `write_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Create a mobile platform application.

## Arguments

* input

  [Mobile​Platform​Application​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput)

  required

  The input to create a mobile platform application.

***

## Mobile​Platform​Application​Create​Payload returns

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Created mobile platform application.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a mobile platform application

  #### Query

  ```graphql
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
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
  "query": "mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
   "variables": {
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
    mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
    mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
      "query": `mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
        mobilePlatformApplicationCreate(input: $input) {
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
    "mobilePlatformApplicationCreate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176023",
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

* ### Create an Android Mobile Platform Application

  #### Description

  Create a Mobile Platform Application for the Android platform.

  #### Query

  ```graphql
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
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
  "query": "mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } } userErrors { field message code } } }",
   "variables": {
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
    mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
    mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
      "query": `mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
        mobilePlatformApplicationCreate(input: $input) {
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
    "mobilePlatformApplicationCreate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176024",
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

* ### Create an Apple Mobile Platform Application

  #### Description

  Create a Mobile Platform Application for the Apple platform.

  #### Query

  ```graphql
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
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
  "query": "mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId __typename } } userErrors { field message code } } }",
   "variables": {
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
    mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
    mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
      "query": `mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
        mobilePlatformApplicationCreate(input: $input) {
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
    "mobilePlatformApplicationCreate": {
      "mobilePlatformApplication": {
        "id": "gid://shopify/MobilePlatformApplication/1066176022",
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

* ### mobilePlatformApplicationCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20mobilePlatformApplicationCreate\(%24input%3A%20MobilePlatformApplicationCreateInput!\)%20%7B%0A%20%20mobilePlatformApplicationCreate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20mobilePlatformApplication%20%7B%0A%20%20%20%20%20%20...%20on%20AppleApplication%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20appId%0A%20%20%20%20%20%20%20%20universalLinksEnabled%0A%20%20%20%20%20%20%20%20sharedWebCredentialsEnabled%0A%20%20%20%20%20%20%20%20appClipsEnabled%0A%20%20%20%20%20%20%20%20appClipApplicationId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22apple%22%3A%20%7B%0A%20%20%20%20%20%20%22appId%22%3A%20%22com.apple.package%22%2C%0A%20%20%20%20%20%20%22appClipsEnabled%22%3A%20true%2C%0A%20%20%20%20%20%20%22appClipApplicationId%22%3A%20%22clip.app%22%2C%0A%20%20%20%20%20%20%22universalLinksEnabled%22%3A%20false%2C%0A%20%20%20%20%20%20%22sharedWebCredentialsEnabled%22%3A%20false%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
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
"query": "mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
 "variables": {
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

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
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

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
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
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
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

## Input variables

JSON

```json
{
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

## Response

JSON

```json
{
  "mobilePlatformApplicationCreate": {
    "mobilePlatformApplication": {
      "id": "gid://shopify/MobilePlatformApplication/1066176023",
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
