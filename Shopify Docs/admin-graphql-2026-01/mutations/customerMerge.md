---
title: customerMerge - GraphQL Admin
description: Merges two customers.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge.md'
---

# customer​Merge

mutation

Requires `write_customer_merge` access scope.

Merges two customers.

## Arguments

* customer​One​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the first customer that will be merged.

* customer​Two​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the second customer that will be merged.

* override​Fields

  [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

  The fields to override the default customer merge rules.

***

## Customer​Merge​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for merging the customers.

* resulting​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer resulting from the merge.

* user​Errors

  [\[Customer​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Merge customers with override fields

  #### Description

  Merge customers with override fields.

  #### Query

  ```graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
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
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
  "query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\", overrideFields: {customerIdOfFirstNameToKeep: \"gid://shopify/Customer/544365967\", customerIdOfLastNameToKeep: \"gid://shopify/Customer/624407574\"}) { resultingCustomerId job { id done } userErrors { code field message } } }",
   "variables": {
      "customerOneId": "gid://shopify/Customer/544365967",
      "customerTwoId": "gid://shopify/Customer/624407574",
      "overrideFields": {
        "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
        "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
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
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574",
          "overrideFields": {
              "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
              "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
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
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CustomerMerge {
        customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
          resultingCustomerId
          job {
            id
            done
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574",
          "overrideFields": {
              "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
              "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerMerge": {
      "resultingCustomerId": "gid://shopify/Customer/624407574",
      "job": {
        "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
        "done": true
      },
      "userErrors": []
    }
  }
  ```

* ### Merge two customers

  #### Description

  Merge two customers.

  #### Query

  ```graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
      resultingCustomerId
      job {
        id
        done
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
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\") { resultingCustomerId job { id done } userErrors { code field message } } }",
   "variables": {
      "customerOneId": "gid://shopify/Customer/544365967",
      "customerTwoId": "gid://shopify/Customer/624407574"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
        resultingCustomerId
        job {
          id
          done
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
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574"
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
    mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
        resultingCustomerId
        job {
          id
          done
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
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CustomerMerge {
        customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
          resultingCustomerId
          job {
            id
            done
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "customerOneId": "gid://shopify/Customer/544365967",
          "customerTwoId": "gid://shopify/Customer/624407574"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerMerge": {
      "resultingCustomerId": "gid://shopify/Customer/624407574",
      "job": {
        "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
        "done": true
      },
      "userErrors": []
    }
  }
  ```

* ### customerMerge reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CustomerMerge%20%7B%0A%20%20customerMerge\(customerOneId%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%20customerTwoId%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%20overrideFields%3A%20%7BcustomerIdOfFirstNameToKeep%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%20customerIdOfLastNameToKeep%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%7D\)%20%7B%0A%20%20%20%20resultingCustomerId%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20done%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22customerOneId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22customerTwoId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%0A%20%20%22overrideFields%22%3A%20%7B%0A%20%20%20%20%22customerIdOfFirstNameToKeep%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%20%20%22customerIdOfLastNameToKeep%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CustomerMerge {
  customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
    resultingCustomerId
    job {
      id
      done
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
"query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\", overrideFields: {customerIdOfFirstNameToKeep: \"gid://shopify/Customer/544365967\", customerIdOfLastNameToKeep: \"gid://shopify/Customer/624407574\"}) { resultingCustomerId job { id done } userErrors { code field message } } }",
 "variables": {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
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
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
    "query": `mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
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
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574",
  "overrideFields": {
    "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
    "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574",
  "overrideFields": {
    "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
    "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
  }
}
```

## Response

JSON

```json
{
  "customerMerge": {
    "resultingCustomerId": "gid://shopify/Customer/624407574",
    "job": {
      "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
      "done": true
    },
    "userErrors": []
  }
}
```
