---
title: companyContactCreate - GraphQL Admin
description: Creates a company contact and the associated customer.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate.md
---

# company​Contact​Create

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a company contact and the associated customer.

## Arguments

* company​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the company that the company contact belongs to.

* input

  [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

  required

  The fields to use to create the company contact.

***

## Company​Contact​Create​Payload returns

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The created company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a company contact

  #### Description

  Create a company contact for the specified company.

  #### Query

  ```graphql
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
    "companyId": "gid://shopify/Company/426793626",
    "input": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
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
  "query": "mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) { companyContactCreate(companyId: $companyId, input: $input) { companyContact { id company { id name } customer { id firstName lastName email } } userErrors { field message code } } }",
   "variables": {
      "companyId": "gid://shopify/Company/426793626",
      "input": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
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
    mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        companyContact {
          id
          company {
            id
            name
          }
          customer {
            id
            firstName
            lastName
            email
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
          "companyId": "gid://shopify/Company/426793626",
          "input": {
              "email": "avery.brown@example.com",
              "firstName": "Avery",
              "lastName": "Brown"
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
    mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        companyContact {
          id
          company {
            id
            name
          }
          customer {
            id
            firstName
            lastName
            email
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
    "companyId": "gid://shopify/Company/426793626",
    "input": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
        companyContactCreate(companyId: $companyId, input: $input) {
          companyContact {
            id
            company {
              id
              name
            }
            customer {
              id
              firstName
              lastName
              email
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
          "companyId": "gid://shopify/Company/426793626",
          "input": {
              "email": "avery.brown@example.com",
              "firstName": "Avery",
              "lastName": "Brown"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "companyContactCreate": {
      "companyContact": {
        "id": "gid://shopify/CompanyContact/1059341859",
        "company": {
          "id": "gid://shopify/Company/426793626",
          "name": "Fancy Pants Inc."
        },
        "customer": {
          "id": "gid://shopify/Customer/1073339480",
          "firstName": "Avery",
          "lastName": "Brown",
          "email": "avery.brown@example.com"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### companyContactCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CompanyContactCreate\(%24companyId%3A%20ID!%2C%20%24input%3A%20CompanyContactInput!\)%20%7B%0A%20%20companyContactCreate\(companyId%3A%20%24companyId%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20companyContact%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20company%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22companyId%22%3A%20%22gid%3A%2F%2Fshopify%2FCompany%2F426793626%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22email%22%3A%20%22avery.brown%40example.com%22%2C%0A%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%22lastName%22%3A%20%22Brown%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
  companyContactCreate(companyId: $companyId, input: $input) {
    companyContact {
      id
      company {
        id
        name
      }
      customer {
        id
        firstName
        lastName
        email
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

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) { companyContactCreate(companyId: $companyId, input: $input) { companyContact { id company { id name } customer { id firstName lastName email } } userErrors { field message code } } }",
 "variables": {
    "companyId": "gid://shopify/Company/426793626",
    "input": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
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
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
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
    "query": `mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        companyContact {
          id
          company {
            id
            name
          }
          customer {
            id
            firstName
            lastName
            email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
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
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
  "companyId": "gid://shopify/Company/426793626",
  "input": {
    "email": "avery.brown@example.com",
    "firstName": "Avery",
    "lastName": "Brown"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "companyId": "gid://shopify/Company/426793626",
  "input": {
    "email": "avery.brown@example.com",
    "firstName": "Avery",
    "lastName": "Brown"
  }
}
```

## Response

JSON

```json
{
  "companyContactCreate": {
    "companyContact": {
      "id": "gid://shopify/CompanyContact/1059341859",
      "company": {
        "id": "gid://shopify/Company/426793626",
        "name": "Fancy Pants Inc."
      },
      "customer": {
        "id": "gid://shopify/Customer/1073339480",
        "firstName": "Avery",
        "lastName": "Brown",
        "email": "avery.brown@example.com"
      }
    },
    "userErrors": []
  }
}
```
