---
title: customerUpdateDefaultAddress - GraphQL Admin
description: Updates a customer's default address.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress.md
---

# customer​Update​Default​Address

mutation

Requires `write_customers` access scope.

Updates a customer's default address.

## Arguments

* address​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer's new default address.

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer whose default address is being updated.

***

## Customer​Update​Default​Address​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer whose address was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sets the default address for a customer

  #### Query

  ```graphql
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { id defaultAddress { id address1 city } } userErrors { field message } } }",
   "variables": {
      "customerId": "gid://shopify/Customer/624407574",
      "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
    mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          id
          defaultAddress {
            id
            address1
            city
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
          "customerId": "gid://shopify/Customer/624407574",
          "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
    mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          id
          defaultAddress {
            id
            address1
            city
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
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
        customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
          customer {
            id
            defaultAddress {
              id
              address1
              city
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "customerId": "gid://shopify/Customer/624407574",
          "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerUpdateDefaultAddress": {
      "customer": {
        "id": "gid://shopify/Customer/624407574",
        "defaultAddress": {
          "id": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress",
          "address1": "124 Amoebobacterieae St",
          "city": "Ottawa"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Updates an existing customer address

  #### Query

  ```graphql
  mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        defaultAddress {
          id
        }
      }
      userErrors {
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { defaultAddress { id } } userErrors { message } } }",
   "variables": {
      "customerId": "gid://shopify/Customer/624407574",
      "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
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
    mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          defaultAddress {
            id
          }
        }
        userErrors {
          message
        }
      }
    }`,
    {
      variables: {
          "customerId": "gid://shopify/Customer/624407574",
          "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
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
    mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          defaultAddress {
            id
          }
        }
        userErrors {
          message
        }
      }
    }
  QUERY

  variables = {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
        customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
          customer {
            defaultAddress {
              id
            }
          }
          userErrors {
            message
          }
        }
      }`,
      "variables": {
          "customerId": "gid://shopify/Customer/624407574",
          "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerUpdateDefaultAddress": {
      "customer": {
        "defaultAddress": {
          "id": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### customerUpdateDefaultAddress reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CustomerAddressDefault\(%24addressId%3A%20ID!%2C%20%24customerId%3A%20ID!\)%20%7B%0A%20%20customerUpdateDefaultAddress\(addressId%3A%20%24addressId%2C%20customerId%3A%20%24customerId\)%20%7B%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20defaultAddress%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%0A%20%20%22addressId%22%3A%20%22gid%3A%2F%2Fshopify%2FMailingAddress%2F624407574%3Fmodel_name%3DCustomerAddress%22%0A%7D)

##### GQL

```graphql
mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
  customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
    customer {
      id
      defaultAddress {
        id
        address1
        city
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
"query": "mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { id defaultAddress { id address1 city } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
    "query": `mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          id
          defaultAddress {
            id
            address1
            city
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
}
```

## Response

JSON

```json
{
  "customerUpdateDefaultAddress": {
    "customer": {
      "id": "gid://shopify/Customer/624407574",
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress",
        "address1": "124 Amoebobacterieae St",
        "city": "Ottawa"
      }
    },
    "userErrors": []
  }
}
```
