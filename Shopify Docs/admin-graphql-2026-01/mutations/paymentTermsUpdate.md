---
title: paymentTermsUpdate - GraphQL Admin
description: >-
  Update payment terms on an order. To update payment terms on a draft order,
  use a draft order mutation and include the request with the `DraftOrderInput`.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate.md
---

# payment​Terms​Update

mutation

Requires `write_payment_terms` access scope. Also: User must have either orders or draft orders access according to the reference.

Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

## Arguments

* input

  [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

  required

  The input fields used to update the payment terms.

***

## Payment​Terms​Update​Payload returns

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The updated payment terms.

* user​Errors

  [\[Payment​Terms​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update payment terms date

  #### Description

  Update the due date for fixed date payment terms.

  #### Query

  ```graphql
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
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
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
        "paymentSchedules": [
          {
            "dueAt": "2022-06-13T22:35:23.311Z"
          }
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
  "query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
   "variables": {
      "input": {
        "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
        "paymentTermsAttributes": {
          "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
          "paymentSchedules": [
            {
              "dueAt": "2022-06-13T22:35:23.311Z"
            }
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
    mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
              "paymentTermsAttributes": {
                  "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                  "paymentSchedules": [
                      {
                          "dueAt": "2022-06-13T22:35:23.311Z"
                      }
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
    mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
        "paymentSchedules": [
          {
            "dueAt": "2022-06-13T22:35:23.311Z"
          }
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
      "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
        paymentTermsUpdate(input: $input) {
          paymentTerms {
            id
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
              "paymentTermsAttributes": {
                  "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                  "paymentSchedules": [
                      {
                          "dueAt": "2022-06-13T22:35:23.311Z"
                      }
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
    "paymentTermsUpdate": {
      "paymentTerms": {
        "id": "gid://shopify/PaymentTerms/977822362"
      },
      "userErrors": []
    }
  }
  ```

* ### Update payment terms type

  #### Description

  Change payment terms to net terms.

  #### Query

  ```graphql
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
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
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
        "paymentSchedules": [
          {
            "issuedAt": "2022-06-13T22:35:23.311Z"
          }
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
  "query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
   "variables": {
      "input": {
        "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
        "paymentTermsAttributes": {
          "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
          "paymentSchedules": [
            {
              "issuedAt": "2022-06-13T22:35:23.311Z"
            }
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
    mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
              "paymentTermsAttributes": {
                  "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
                  "paymentSchedules": [
                      {
                          "issuedAt": "2022-06-13T22:35:23.311Z"
                      }
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
    mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
        "paymentSchedules": [
          {
            "issuedAt": "2022-06-13T22:35:23.311Z"
          }
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
      "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
        paymentTermsUpdate(input: $input) {
          paymentTerms {
            id
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
              "paymentTermsAttributes": {
                  "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
                  "paymentSchedules": [
                      {
                          "issuedAt": "2022-06-13T22:35:23.311Z"
                      }
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
    "paymentTermsUpdate": {
      "paymentTerms": {
        "id": "gid://shopify/PaymentTerms/977822362"
      },
      "userErrors": []
    }
  }
  ```

* ### paymentTermsUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PaymentTermsUpdate\(%24input%3A%20PaymentTermsUpdateInput!\)%20%7B%0A%20%20paymentTermsUpdate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20paymentTerms%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22paymentTermsId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTerms%2F977822362%22%2C%0A%20%20%20%20%22paymentTermsAttributes%22%3A%20%7B%0A%20%20%20%20%20%20%22paymentTermsTemplateId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTermsTemplate%2F7%22%2C%0A%20%20%20%20%20%20%22paymentSchedules%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22dueAt%22%3A%20%222022-06-13T22%3A35%3A23.311Z%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
  paymentTermsUpdate(input: $input) {
    paymentTerms {
      id
    }
    userErrors {
      code
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
"query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
        "paymentSchedules": [
          {
            "dueAt": "2022-06-13T22:35:23.311Z"
          }
        ]
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
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
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

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
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
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
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
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
    }
  }
}
```

## Response

JSON

```json
{
  "paymentTermsUpdate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/977822362"
    },
    "userErrors": []
  }
}
```
