---
title: subscriptionContractAtomicCreate - GraphQL Admin
description: Creates a Subscription Contract.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate.md
---

# subscription​Contract​Atomic​Create

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Creates a Subscription Contract.

## Arguments

* input

  [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

  required

  The properties of the new Subscription Contract.

***

## Subscription​Contract​Atomic​Create​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a subscription contract with a single line item

  #### Description

  Creates a subscription contract with a line item with a single GraphQL call.

  #### Query

  ```graphql
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
          }
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
    "customerId": "gid://shopify/Customer/544365967",
    "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) { subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: \"2025-06-01\", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: \"John\", lastName: \"King\", address1: \"1483 rue Mossoro\", city: \"Montreal\", province: \"Quebec\", country: \"Canada\", zip: \"H2S1Z5\"}}}}}) { contract { id lines(first: 10) { nodes { id quantity } } } userErrors { field message } } }",
   "variables": {
      "customerId": "gid://shopify/Customer/544365967",
      "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
      "variantId": "gid://shopify/ProductVariant/30322695"
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
    mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
      subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
        contract {
          id
          lines(first: 10) {
            nodes {
              id
              quantity
            }
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
          "customerId": "gid://shopify/Customer/544365967",
          "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
          "variantId": "gid://shopify/ProductVariant/30322695"
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
    mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
      subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
        contract {
          id
          lines(first: 10) {
            nodes {
              id
              quantity
            }
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
    "customerId": "gid://shopify/Customer/544365967",
    "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
        subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
          contract {
            id
            lines(first: 10) {
              nodes {
                id
                quantity
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "customerId": "gid://shopify/Customer/544365967",
          "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
          "variantId": "gid://shopify/ProductVariant/30322695"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "subscriptionContractAtomicCreate": {
      "contract": {
        "id": "gid://shopify/SubscriptionContract/975257121",
        "lines": {
          "nodes": [
            {
              "id": "gid://shopify/SubscriptionLine/93b63eb2-70d1-43db-98a8-031a9b1c8042",
              "quantity": 20
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### subscriptionContractAtomicCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation\(%24customerId%3A%20ID!%2C%20%24paymentMethodId%3A%20ID!%2C%20%24variantId%3A%20ID!\)%20%7B%0A%20%20subscriptionContractAtomicCreate\(input%3A%20%7BcustomerId%3A%20%24customerId%2C%20nextBillingDate%3A%20%222025-06-01%22%2C%20currencyCode%3A%20USD%2C%20lines%3A%20%5B%7Bline%3A%20%7BproductVariantId%3A%20%24variantId%2C%20quantity%3A%2020%2C%20currentPrice%3A%2025.0%7D%7D%5D%2C%20contract%3A%20%7Bstatus%3A%20ACTIVE%2C%20paymentMethodId%3A%20%24paymentMethodId%2C%20billingPolicy%3A%20%7Binterval%3A%20MONTH%2C%20intervalCount%3A%201%2C%20minCycles%3A%203%7D%2C%20deliveryPolicy%3A%20%7Binterval%3A%20MONTH%2C%20intervalCount%3A%201%7D%2C%20deliveryPrice%3A%2014.99%2C%20deliveryMethod%3A%20%7Bshipping%3A%20%7Baddress%3A%20%7BfirstName%3A%20%22John%22%2C%20lastName%3A%20%22King%22%2C%20address1%3A%20%221483%20rue%20Mossoro%22%2C%20city%3A%20%22Montreal%22%2C%20province%3A%20%22Quebec%22%2C%20country%3A%20%22Canada%22%2C%20zip%3A%20%22H2S1Z5%22%7D%7D%7D%7D%7D\)%20%7B%0A%20%20%20%20contract%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20lines\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22paymentMethodId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomerPaymentMethod%2Fb7cc6e3267aace169e516ed48be72dff%22%2C%0A%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F30322695%22%0A%7D)

##### GQL

```graphql
mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
  subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
    contract {
      id
      lines(first: 10) {
        nodes {
          id
          quantity
        }
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
"query": "mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) { subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: \"2025-06-01\", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: \"John\", lastName: \"King\", address1: \"1483 rue Mossoro\", city: \"Montreal\", province: \"Quebec\", country: \"Canada\", zip: \"H2S1Z5\"}}}}}) { contract { id lines(first: 10) { nodes { id quantity } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/544365967",
    "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
    "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
          }
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
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
    "query": `mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
      subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
        contract {
          id
          lines(first: 10) {
            nodes {
              id
              quantity
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
          }
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
  "customerId": "gid://shopify/Customer/544365967",
  "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
  "variantId": "gid://shopify/ProductVariant/30322695"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "customerId": "gid://shopify/Customer/544365967",
  "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
  "variantId": "gid://shopify/ProductVariant/30322695"
}
```

## Response

JSON

```json
{
  "subscriptionContractAtomicCreate": {
    "contract": {
      "id": "gid://shopify/SubscriptionContract/975257121",
      "lines": {
        "nodes": [
          {
            "id": "gid://shopify/SubscriptionLine/93b63eb2-70d1-43db-98a8-031a9b1c8042",
            "quantity": 20
          }
        ]
      }
    },
    "userErrors": []
  }
}
```
