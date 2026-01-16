---
title: customerRemoveTaxExemptions - GraphQL Admin
description: Remove tax exemptions from a customer.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions.md
---

# customer​Remove​Tax​Exemptions

mutation

Requires `write_customers` access scope.

Remove tax exemptions from a customer.

## Arguments

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer to update.

* tax​Exemptions

  [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  required

  The list of tax exemptions to remove for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

***

## Customer​Remove​Tax​Exemptions​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove tax exemptions from a customer

  #### Query

  ```graphql
  mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
    customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
      userErrors {
        field
        message
      }
      customer {
        id
        taxExemptions
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "customerId": "gid://shopify/Customer/554122808",
    "taxExemptions": [
      "CA_BC_RESELLER_EXEMPTION",
      "CA_STATUS_CARD_EXEMPTION"
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
  "query": "mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) { customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) { userErrors { field message } customer { id taxExemptions } } }",
   "variables": {
      "customerId": "gid://shopify/Customer/554122808",
      "taxExemptions": [
        "CA_BC_RESELLER_EXEMPTION",
        "CA_STATUS_CARD_EXEMPTION"
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
    mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
      customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
        userErrors {
          field
          message
        }
        customer {
          id
          taxExemptions
        }
      }
    }`,
    {
      variables: {
          "customerId": "gid://shopify/Customer/554122808",
          "taxExemptions": [
              "CA_BC_RESELLER_EXEMPTION",
              "CA_STATUS_CARD_EXEMPTION"
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
    mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
      customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
        userErrors {
          field
          message
        }
        customer {
          id
          taxExemptions
        }
      }
    }
  QUERY

  variables = {
    "customerId": "gid://shopify/Customer/554122808",
    "taxExemptions": [
      "CA_BC_RESELLER_EXEMPTION",
      "CA_STATUS_CARD_EXEMPTION"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
        customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
          userErrors {
            field
            message
          }
          customer {
            id
            taxExemptions
          }
        }
      }`,
      "variables": {
          "customerId": "gid://shopify/Customer/554122808",
          "taxExemptions": [
              "CA_BC_RESELLER_EXEMPTION",
              "CA_STATUS_CARD_EXEMPTION"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerRemoveTaxExemptions": {
      "userErrors": [],
      "customer": {
        "id": "gid://shopify/Customer/554122808",
        "taxExemptions": []
      }
    }
  }
  ```

* ### customerRemoveTaxExemptions reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerRemoveTaxExemptions\(%24customerId%3A%20ID!%2C%20%24taxExemptions%3A%20%5BTaxExemption!%5D!\)%20%7B%0A%20%20customerRemoveTaxExemptions\(customerId%3A%20%24customerId%2C%20taxExemptions%3A%20%24taxExemptions\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20taxExemptions%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F554122808%22%2C%0A%20%20%22taxExemptions%22%3A%20%5B%0A%20%20%20%20%22CA_BC_RESELLER_EXEMPTION%22%2C%0A%20%20%20%20%22CA_STATUS_CARD_EXEMPTION%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
  customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
    userErrors {
      field
      message
    }
    customer {
      id
      taxExemptions
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
"query": "mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) { customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) { userErrors { field message } customer { id taxExemptions } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/554122808",
    "taxExemptions": [
      "CA_BC_RESELLER_EXEMPTION",
      "CA_STATUS_CARD_EXEMPTION"
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
  mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
    customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
      userErrors {
        field
        message
      }
      customer {
        id
        taxExemptions
      }
    }
  }`,
  {
    variables: {
        "customerId": "gid://shopify/Customer/554122808",
        "taxExemptions": [
            "CA_BC_RESELLER_EXEMPTION",
            "CA_STATUS_CARD_EXEMPTION"
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
    "query": `mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
      customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
        userErrors {
          field
          message
        }
        customer {
          id
          taxExemptions
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/554122808",
        "taxExemptions": [
            "CA_BC_RESELLER_EXEMPTION",
            "CA_STATUS_CARD_EXEMPTION"
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
  mutation customerRemoveTaxExemptions($customerId: ID!, $taxExemptions: [TaxExemption!]!) {
    customerRemoveTaxExemptions(customerId: $customerId, taxExemptions: $taxExemptions) {
      userErrors {
        field
        message
      }
      customer {
        id
        taxExemptions
      }
    }
  }
QUERY

variables = {
  "customerId": "gid://shopify/Customer/554122808",
  "taxExemptions": [
    "CA_BC_RESELLER_EXEMPTION",
    "CA_STATUS_CARD_EXEMPTION"
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "customerId": "gid://shopify/Customer/554122808",
  "taxExemptions": [
    "CA_BC_RESELLER_EXEMPTION",
    "CA_STATUS_CARD_EXEMPTION"
  ]
}
```

## Response

JSON

```json
{
  "customerRemoveTaxExemptions": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/554122808",
      "taxExemptions": []
    }
  }
}
```
