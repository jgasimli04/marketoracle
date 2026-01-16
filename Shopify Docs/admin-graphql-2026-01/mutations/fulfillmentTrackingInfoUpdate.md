---
title: fulfillmentTrackingInfoUpdate - GraphQL Admin
description: >-
  Updates tracking information for a fulfillment, including the carrier name,
  tracking numbers, and tracking URLs. You can provide either single or multiple
  tracking numbers for shipments with multiple packages.


  The mutation accepts a
  [`FulfillmentTrackingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)
  that supports both single tracking (using
  [`number`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.number)
  and
  [`url`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.url)
  fields) and multi-package tracking (using
  [`numbers`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.numbers)
  and
  [`urls`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.urls)
  fields). When you specify a [supported carrier
  name](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies),
  Shopify automatically generates tracking URLs for the provided tracking
  numbers.


  You can optionally notify customers about tracking updates with the
  [`notifyCustomer`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-notifyCustomer)
  argument. When enabled, customers receive shipping update emails with tracking
  details and receive notifications about future updates to the fulfillment.


  Learn more about [enabling tracking
  support](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support)
  for fulfillment services.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate.md
---

# fulfillment​Tracking​Info​Update

mutation

Requires `write_assigned_fulfillment_orders` access scope, `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Updates tracking information for a fulfillment, including the carrier name, tracking numbers, and tracking URLs. You can provide either single or multiple tracking numbers for shipments with multiple packages.

The mutation accepts a [`FulfillmentTrackingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput) that supports both single tracking (using [`number`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.number) and [`url`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.url) fields) and multi-package tracking (using [`numbers`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.numbers) and [`urls`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.urls) fields). When you specify a [supported carrier name](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies), Shopify automatically generates tracking URLs for the provided tracking numbers.

You can optionally notify customers about tracking updates with the [`notifyCustomer`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-notifyCustomer) argument. When enabled, customers receive shipping update emails with tracking details and receive notifications about future updates to the fulfillment.

Learn more about [enabling tracking support](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support) for fulfillment services.

## Arguments

* fulfillment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

* tracking​Info​Input

  [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

  required

  The tracking input for the mutation, including tracking URL, number, and company.

***

## Fulfillment​Tracking​Info​Update​Payload returns

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The updated fulfillment with tracking information.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Updates the tracking information for a fulfillment

  #### Query

  ```graphql
  mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
    fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
      fulfillment {
        id
        status
        trackingInfo {
          company
          number
          url
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
    "fulfillmentId": "gid://shopify/Fulfillment/255858046",
    "notifyCustomer": true,
    "trackingInfoInput": {
      "company": "UPS",
      "number": "1Z001985YW99744790"
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
  "query": "mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) { fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) { fulfillment { id status trackingInfo { company number url } } userErrors { field message } } }",
   "variables": {
      "fulfillmentId": "gid://shopify/Fulfillment/255858046",
      "notifyCustomer": true,
      "trackingInfoInput": {
        "company": "UPS",
        "number": "1Z001985YW99744790"
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
    mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
      fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
        fulfillment {
          id
          status
          trackingInfo {
            company
            number
            url
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
          "fulfillmentId": "gid://shopify/Fulfillment/255858046",
          "notifyCustomer": true,
          "trackingInfoInput": {
              "company": "UPS",
              "number": "1Z001985YW99744790"
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
    mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
      fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
        fulfillment {
          id
          status
          trackingInfo {
            company
            number
            url
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
    "fulfillmentId": "gid://shopify/Fulfillment/255858046",
    "notifyCustomer": true,
    "trackingInfoInput": {
      "company": "UPS",
      "number": "1Z001985YW99744790"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
        fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
          fulfillment {
            id
            status
            trackingInfo {
              company
              number
              url
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "fulfillmentId": "gid://shopify/Fulfillment/255858046",
          "notifyCustomer": true,
          "trackingInfoInput": {
              "company": "UPS",
              "number": "1Z001985YW99744790"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentTrackingInfoUpdate": {
      "fulfillment": {
        "id": "gid://shopify/Fulfillment/255858046",
        "status": "SUCCESS",
        "trackingInfo": [
          {
            "company": "UPS",
            "number": "1Z001985YW99744790",
            "url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentTrackingInfoUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20FulfillmentTrackingInfoUpdate\(%24fulfillmentId%3A%20ID!%2C%20%24trackingInfoInput%3A%20FulfillmentTrackingInput!%2C%20%24notifyCustomer%3A%20Boolean\)%20%7B%0A%20%20fulfillmentTrackingInfoUpdate\(fulfillmentId%3A%20%24fulfillmentId%2C%20trackingInfoInput%3A%20%24trackingInfoInput%2C%20notifyCustomer%3A%20%24notifyCustomer\)%20%7B%0A%20%20%20%20fulfillment%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20trackingInfo%20%7B%0A%20%20%20%20%20%20%20%20company%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22fulfillmentId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillment%2F255858046%22%2C%0A%20%20%22notifyCustomer%22%3A%20true%2C%0A%20%20%22trackingInfoInput%22%3A%20%7B%0A%20%20%20%20%22company%22%3A%20%22UPS%22%2C%0A%20%20%20%20%22number%22%3A%20%221Z001985YW99744790%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
  fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
    fulfillment {
      id
      status
      trackingInfo {
        company
        number
        url
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
"query": "mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) { fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) { fulfillment { id status trackingInfo { company number url } } userErrors { field message } } }",
 "variables": {
    "fulfillmentId": "gid://shopify/Fulfillment/255858046",
    "notifyCustomer": true,
    "trackingInfoInput": {
      "company": "UPS",
      "number": "1Z001985YW99744790"
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
  mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
    fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
      fulfillment {
        id
        status
        trackingInfo {
          company
          number
          url
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
        "fulfillmentId": "gid://shopify/Fulfillment/255858046",
        "notifyCustomer": true,
        "trackingInfoInput": {
            "company": "UPS",
            "number": "1Z001985YW99744790"
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
    "query": `mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
      fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
        fulfillment {
          id
          status
          trackingInfo {
            company
            number
            url
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentId": "gid://shopify/Fulfillment/255858046",
        "notifyCustomer": true,
        "trackingInfoInput": {
            "company": "UPS",
            "number": "1Z001985YW99744790"
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
  mutation FulfillmentTrackingInfoUpdate($fulfillmentId: ID!, $trackingInfoInput: FulfillmentTrackingInput!, $notifyCustomer: Boolean) {
    fulfillmentTrackingInfoUpdate(fulfillmentId: $fulfillmentId, trackingInfoInput: $trackingInfoInput, notifyCustomer: $notifyCustomer) {
      fulfillment {
        id
        status
        trackingInfo {
          company
          number
          url
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
  "fulfillmentId": "gid://shopify/Fulfillment/255858046",
  "notifyCustomer": true,
  "trackingInfoInput": {
    "company": "UPS",
    "number": "1Z001985YW99744790"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "fulfillmentId": "gid://shopify/Fulfillment/255858046",
  "notifyCustomer": true,
  "trackingInfoInput": {
    "company": "UPS",
    "number": "1Z001985YW99744790"
  }
}
```

## Response

JSON

```json
{
  "fulfillmentTrackingInfoUpdate": {
    "fulfillment": {
      "id": "gid://shopify/Fulfillment/255858046",
      "status": "SUCCESS",
      "trackingInfo": [
        {
          "company": "UPS",
          "number": "1Z001985YW99744790",
          "url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"
        }
      ]
    },
    "userErrors": []
  }
}
```
