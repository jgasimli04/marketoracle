---
title: giftCardDebit - GraphQL Admin
description: Debit a gift card.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit.md'
---

# gift​Card​Debit

mutation

Requires `write_gift_card_transactions` access scope.

Debit a gift card.

## Arguments

* debit​Input

  [Gift​Card​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput)

  required

  The input fields to debit a gift card.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the gift card to be debited.

***

## Gift​Card​Debit​Payload returns

* gift​Card​Debit​Transaction

  [Gift​Card​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

  The gift card debit transaction that was created.

* user​Errors

  [\[Gift​Card​Transaction​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Debit a gift card by ID

  #### Query

  ```graphql
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/GiftCard/411106674",
    "debitInput": {
      "debitAmount": {
        "amount": "10",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T12:48:33-04:00",
      "note": "A note."
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
  "query": "mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) { giftCardDebit(id: $id, debitInput: $debitInput) { giftCardDebitTransaction { id amount { amount currencyCode } processedAt note giftCard { id balance { amount currencyCode } } } userErrors { message field code } } }",
   "variables": {
      "id": "gid://shopify/GiftCard/411106674",
      "debitInput": {
        "debitAmount": {
          "amount": "10",
          "currencyCode": "USD"
        },
        "processedAt": "2024-09-09T12:48:33-04:00",
        "note": "A note."
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
    mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
      giftCardDebit(id: $id, debitInput: $debitInput) {
        giftCardDebitTransaction {
          id
          amount {
            amount
            currencyCode
          }
          processedAt
          note
          giftCard {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/GiftCard/411106674",
          "debitInput": {
              "debitAmount": {
                  "amount": "10",
                  "currencyCode": "USD"
              },
              "processedAt": "2024-09-09T12:48:33-04:00",
              "note": "A note."
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
    mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
      giftCardDebit(id: $id, debitInput: $debitInput) {
        giftCardDebitTransaction {
          id
          amount {
            amount
            currencyCode
          }
          processedAt
          note
          giftCard {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/GiftCard/411106674",
    "debitInput": {
      "debitAmount": {
        "amount": "10",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T12:48:33-04:00",
      "note": "A note."
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
        giftCardDebit(id: $id, debitInput: $debitInput) {
          giftCardDebitTransaction {
            id
            amount {
              amount
              currencyCode
            }
            processedAt
            note
            giftCard {
              id
              balance {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            message
            field
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/GiftCard/411106674",
          "debitInput": {
              "debitAmount": {
                  "amount": "10",
                  "currencyCode": "USD"
              },
              "processedAt": "2024-09-09T12:48:33-04:00",
              "note": "A note."
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "giftCardDebit": {
      "giftCardDebitTransaction": {
        "id": "gid://shopify/GiftCardDebitTransaction/1064273912",
        "amount": {
          "amount": "-10.0",
          "currencyCode": "USD"
        },
        "processedAt": "2024-09-09T16:48:33Z",
        "note": "A note.",
        "giftCard": {
          "id": "gid://shopify/GiftCard/411106674",
          "balance": {
            "amount": "15.0",
            "currencyCode": "USD"
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### giftCardDebit reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20giftCardDebit\(%24id%3A%20ID!%2C%20%24debitInput%3A%20GiftCardDebitInput!\)%20%7B%0A%20%20giftCardDebit\(id%3A%20%24id%2C%20debitInput%3A%20%24debitInput\)%20%7B%0A%20%20%20%20giftCardDebitTransaction%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20processedAt%0A%20%20%20%20%20%20note%0A%20%20%20%20%20%20giftCard%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGiftCard%2F411106674%22%2C%0A%20%20%22debitInput%22%3A%20%7B%0A%20%20%20%20%22debitAmount%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%20%2210%22%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22processedAt%22%3A%20%222024-09-09T12%3A48%3A33-04%3A00%22%2C%0A%20%20%20%20%22note%22%3A%20%22A%20note.%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
  giftCardDebit(id: $id, debitInput: $debitInput) {
    giftCardDebitTransaction {
      id
      amount {
        amount
        currencyCode
      }
      processedAt
      note
      giftCard {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
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
"query": "mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) { giftCardDebit(id: $id, debitInput: $debitInput) { giftCardDebitTransaction { id amount { amount currencyCode } processedAt note giftCard { id balance { amount currencyCode } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/411106674",
    "debitInput": {
      "debitAmount": {
        "amount": "10",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T12:48:33-04:00",
      "note": "A note."
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
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
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
    "query": `mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
      giftCardDebit(id: $id, debitInput: $debitInput) {
        giftCardDebitTransaction {
          id
          amount {
            amount
            currencyCode
          }
          processedAt
          note
          giftCard {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
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
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/GiftCard/411106674",
  "debitInput": {
    "debitAmount": {
      "amount": "10",
      "currencyCode": "USD"
    },
    "processedAt": "2024-09-09T12:48:33-04:00",
    "note": "A note."
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/GiftCard/411106674",
  "debitInput": {
    "debitAmount": {
      "amount": "10",
      "currencyCode": "USD"
    },
    "processedAt": "2024-09-09T12:48:33-04:00",
    "note": "A note."
  }
}
```

## Response

JSON

```json
{
  "giftCardDebit": {
    "giftCardDebitTransaction": {
      "id": "gid://shopify/GiftCardDebitTransaction/1064273912",
      "amount": {
        "amount": "-10.0",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T16:48:33Z",
      "note": "A note.",
      "giftCard": {
        "id": "gid://shopify/GiftCard/411106674",
        "balance": {
          "amount": "15.0",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
```
