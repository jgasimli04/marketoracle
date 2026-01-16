---
title: customerMergeJobStatus - GraphQL Admin
description: Returns the status of a customer merge request job.
api_version: 2026-01
api_name: admin
type: query
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus.md
---

# customer​Merge​Job​Status

query

Requires `read_customer_merge` access scope.

Returns the status of a customer merge request job.

## Arguments

* job​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the job performing the customer merge request.

***

## Possible returns

* Customer​Merge​Request

  [Customer​Merge​Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest)

  A merge request for merging two customers.

  * customer​Merge​Errors

    [\[Customer​Merge​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

    non-null

    The merge errors that occurred during the customer merge request.

  * job​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The UUID of the merge job.

  * resulting​Customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The ID of the customer resulting from the merge.

  * status

    [Customer​Merge​Request​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeRequestStatus)

    non-null

    The status of the customer merge request.

***

## Examples

* ### Get the merge status of a customer merge request

  #### Description

  Retrieve the merge status of a customer merge request.

  #### Query

  ```graphql
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
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
  "query": "query { customerMergeJobStatus(jobId: \"gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59\") { jobId status resultingCustomerId customerMergeErrors { errorFields message } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query {
      customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
        jobId
        status
        resultingCustomerId
        customerMergeErrors {
          errorFields
          message
        }
      }
    }`,
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
    query {
      customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
        jobId
        status
        resultingCustomerId
        customerMergeErrors {
          errorFields
          message
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query {
      customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
        jobId
        status
        resultingCustomerId
        customerMergeErrors {
          errorFields
          message
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "customerMergeJobStatus": {
      "jobId": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
      "status": "IN_PROGRESS",
      "resultingCustomerId": "gid://shopify/Customer/544365967",
      "customerMergeErrors": []
    }
  }
  ```

## Get the merge status of a customer merge request

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20customerMergeJobStatus\(jobId%3A%20%22gid%3A%2F%2Fshopify%2FJob%2Fab22429a-ea18-4dad-ac2c-5823288b1e59%22\)%20%7B%0A%20%20%20%20jobId%0A%20%20%20%20status%0A%20%20%20%20resultingCustomerId%0A%20%20%20%20customerMergeErrors%20%7B%0A%20%20%20%20%20%20errorFields%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
query {
  customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
    jobId
    status
    resultingCustomerId
    customerMergeErrors {
      errorFields
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
"query": "query { customerMergeJobStatus(jobId: \"gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59\") { jobId status resultingCustomerId customerMergeErrors { errorFields message } } }"
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
      }
    }
  }`,
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
      }
    }
  }`,
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
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
      }
    }
  }
QUERY

response = client.query(query: query)
```

## Response

JSON

```json
{
  "customerMergeJobStatus": {
    "jobId": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
    "status": "IN_PROGRESS",
    "resultingCustomerId": "gid://shopify/Customer/544365967",
    "customerMergeErrors": []
  }
}
```
