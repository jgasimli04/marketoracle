---
title: marketingActivityUpdate - GraphQL Admin
description: >-
  Updates a marketing activity with the latest information. Marketing activity
  app extensions are deprecated and will be removed in the near future.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate.md
---

# marketing​Activity​Update

mutation

Requires `write_marketing_events` access scope.

Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

## Arguments

* input

  [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

  required

  The Input of the marketing activity.

***

## Marketing​Activity​Update​Payload returns

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The redirect path from the embedded editor to the Shopify admin.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sets the budget for the marketing activity

  #### Query

  ```graphql
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MarketingActivity/794355127",
    "budgetType": "LIFETIME",
    "amount": 100,
    "currencyCode": "CAD"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) { marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) { marketingActivity { budget { budgetType total { amount currencyCode } } } } }",
   "variables": {
      "id": "gid://shopify/MarketingActivity/794355127",
      "budgetType": "LIFETIME",
      "amount": 100,
      "currencyCode": "CAD"
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
    mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
      marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
        marketingActivity {
          budget {
            budgetType
            total {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MarketingActivity/794355127",
          "budgetType": "LIFETIME",
          "amount": 100,
          "currencyCode": "CAD"
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
    mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
      marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
        marketingActivity {
          budget {
            budgetType
            total {
              amount
              currencyCode
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MarketingActivity/794355127",
    "budgetType": "LIFETIME",
    "amount": 100,
    "currencyCode": "CAD"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
        marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
          marketingActivity {
            budget {
              budgetType
              total {
                amount
                currencyCode
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MarketingActivity/794355127",
          "budgetType": "LIFETIME",
          "amount": 100,
          "currencyCode": "CAD"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdate": {
      "marketingActivity": {
        "budget": {
          "budgetType": "LIFETIME",
          "total": {
            "amount": "100.0",
            "currencyCode": "CAD"
          }
        }
      }
    }
  }
  ```

* ### Updates a marketing activity into ACTIVE state

  #### Query

  ```graphql
  mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
    marketingActivityUpdate(input: {id: $id, status: $status}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/MarketingActivity/794355127",
    "status": "ACTIVE"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) { marketingActivityUpdate(input: {id: $id, status: $status}) { marketingActivity { id title status } } }",
   "variables": {
      "id": "gid://shopify/MarketingActivity/794355127",
      "status": "ACTIVE"
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
    mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
      marketingActivityUpdate(input: {id: $id, status: $status}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/MarketingActivity/794355127",
          "status": "ACTIVE"
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
    mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
      marketingActivityUpdate(input: {id: $id, status: $status}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/MarketingActivity/794355127",
    "status": "ACTIVE"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
        marketingActivityUpdate(input: {id: $id, status: $status}) {
          marketingActivity {
            id
            title
            status
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/MarketingActivity/794355127",
          "status": "ACTIVE"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "marketingActivityUpdate": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/794355127",
        "title": "Marketing Activity for Snowdevil",
        "status": "ACTIVE"
      }
    }
  }
  ```

* ### marketingActivityUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpdate\(%24id%3A%20ID!%2C%20%24budgetType%3A%20MarketingBudgetBudgetType!%2C%20%24amount%3A%20Decimal!%2C%20%24currencyCode%3A%20CurrencyCode!\)%20%7B%0A%20%20marketingActivityUpdate\(input%3A%20%7Bid%3A%20%24id%2C%20budget%3A%20%7BbudgetType%3A%20%24budgetType%2C%20total%3A%20%7Bamount%3A%20%24amount%2C%20currencyCode%3A%20%24currencyCode%7D%7D%7D\)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20budget%20%7B%0A%20%20%20%20%20%20%20%20budgetType%0A%20%20%20%20%20%20%20%20total%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMarketingActivity%2F794355127%22%2C%0A%20%20%22budgetType%22%3A%20%22LIFETIME%22%2C%0A%20%20%22amount%22%3A%20100%2C%0A%20%20%22currencyCode%22%3A%20%22CAD%22%0A%7D)

##### GQL

```graphql
mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
  marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
    marketingActivity {
      budget {
        budgetType
        total {
          amount
          currencyCode
        }
      }
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
"query": "mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) { marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) { marketingActivity { budget { budgetType total { amount currencyCode } } } } }",
 "variables": {
    "id": "gid://shopify/MarketingActivity/794355127",
    "budgetType": "LIFETIME",
    "amount": 100,
    "currencyCode": "CAD"
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
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
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
    "query": `mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
      marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
        marketingActivity {
          budget {
            budgetType
            total {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
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
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MarketingActivity/794355127",
  "budgetType": "LIFETIME",
  "amount": 100,
  "currencyCode": "CAD"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/MarketingActivity/794355127",
  "budgetType": "LIFETIME",
  "amount": 100,
  "currencyCode": "CAD"
}
```

## Response

JSON

```json
{
  "marketingActivityUpdate": {
    "marketingActivity": {
      "budget": {
        "budgetType": "LIFETIME",
        "total": {
          "amount": "100.0",
          "currencyCode": "CAD"
        }
      }
    }
  }
}
```
