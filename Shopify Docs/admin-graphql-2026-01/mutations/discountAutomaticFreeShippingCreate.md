---
title: discountAutomaticFreeShippingCreate - GraphQL Admin
description: >-
  Creates automatic free shipping discounts that apply to qualifying orders
  without requiring discount codes. These promotions automatically activate when
  customers meet specified criteria, streamlining the checkout experience.


  For example, a store might create an automatic free shipping discount for
  orders over variable pricing to encourage larger purchases, or offer free
  shipping to specific customer segments during promotional periods.


  Use `DiscountAutomaticFreeShippingCreate` to:

  - Set up code-free shipping promotions

  - Create order value-based shipping incentives

  - Target specific customer groups with shipping benefits

  - Establish location-based shipping discounts


  The mutation validates discount configuration and returns the created
  automatic discount node along with any configuration errors that need
  resolution.


  Learn more about [automatic
  discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate.md
---

# discount​Automatic​Free​Shipping​Create

mutation

Requires Apps must have `write_discounts` access scope.

Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

Use `DiscountAutomaticFreeShippingCreate` to:

* Set up code-free shipping promotions
* Create order value-based shipping incentives
* Target specific customer groups with shipping benefits
* Establish location-based shipping discounts

The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

## Arguments

* free​Shipping​Automatic​Discount

  [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

  required

  The input data used to create the automatic free shipping discount.

***

## Discount​Automatic​Free​Shipping​Create​Payload returns

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic free shipping discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a free shipping discount based on cart value

  #### Description

  Create an automatic \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) discount. This mutation creates a discount that applies free shipping to North America on orders with a subtotal of $50 or more. The discount can be \[combined]\(https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with order and product discounts. The discount applies to one-time purchases and orders with a maximum shipping price of $200.

  #### Query

  ```graphql
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
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
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-01-11T22:30:47Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
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
  "query": "mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { id } userErrors { field message } } }",
   "variables": {
      "freeShippingAutomaticDiscount": {
        "title": "FREESHIPPING50",
        "startsAt": "2025-01-11T22:30:47Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "destination": {
          "countries": {
            "add": [
              "CA",
              "US"
            ]
          }
        },
        "appliesOnOneTimePurchase": true,
        "maximumShippingPrice": "200",
        "minimumRequirement": {
          "subtotal": {
            "greaterThanOrEqualToSubtotal": "50"
          }
        },
        "combinesWith": {
          "orderDiscounts": true,
          "productDiscounts": true
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
    mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingAutomaticDiscount": {
              "title": "FREESHIPPING50",
              "startsAt": "2025-01-11T22:30:47Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "destination": {
                  "countries": {
                      "add": [
                          "CA",
                          "US"
                      ]
                  }
              },
              "appliesOnOneTimePurchase": true,
              "maximumShippingPrice": "200",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": "50"
                  }
              },
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true
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
    mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-01-11T22:30:47Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
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
      "query": `mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
        discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
          automaticDiscountNode {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "freeShippingAutomaticDiscount": {
              "title": "FREESHIPPING50",
              "startsAt": "2025-01-11T22:30:47Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "destination": {
                  "countries": {
                      "add": [
                          "CA",
                          "US"
                      ]
                  }
              },
              "appliesOnOneTimePurchase": true,
              "maximumShippingPrice": "200",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": "50"
                  }
              },
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticFreeShippingCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856669"
      },
      "userErrors": []
    }
  }
  ```

* ### Create a free shipping discount for 5+ items

  #### Description

  Create an automatic \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) discount. This mutation creates a discount that applies free shipping to all destinations on orders with 5 or more items.

  #### Query

  ```graphql
  mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
              }
            }
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
    "input": {
      "title": "FREESHIP5PLUS",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "minimumRequirement": {
        "quantity": {
          "greaterThanOrEqualToQuantity": "5"
        }
      },
      "destination": {
        "all": true
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
  "query": "mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumQuantity { greaterThanOrEqualToQuantity } } destinationSelection { ... on DiscountCountryAll { allCountries } } } } } userErrors { field message } } }",
   "variables": {
      "input": {
        "title": "FREESHIP5PLUS",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "minimumRequirement": {
          "quantity": {
            "greaterThanOrEqualToQuantity": "5"
          }
        },
        "destination": {
          "all": true
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
    mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
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
          "input": {
              "title": "FREESHIP5PLUS",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "minimumRequirement": {
                  "quantity": {
                      "greaterThanOrEqualToQuantity": "5"
                  }
              },
              "destination": {
                  "all": true
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
    mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
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
    "input": {
      "title": "FREESHIP5PLUS",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "minimumRequirement": {
        "quantity": {
          "greaterThanOrEqualToQuantity": "5"
        }
      },
      "destination": {
        "all": true
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
      "query": `mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
        discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticFreeShipping {
                title
                startsAt
                endsAt
                minimumRequirement {
                  ... on DiscountMinimumQuantity {
                    greaterThanOrEqualToQuantity
                  }
                }
                destinationSelection {
                  ... on DiscountCountryAll {
                    allCountries
                  }
                }
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
          "input": {
              "title": "FREESHIP5PLUS",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "minimumRequirement": {
                  "quantity": {
                      "greaterThanOrEqualToQuantity": "5"
                  }
              },
              "destination": {
                  "all": true
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticFreeShippingCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856671",
        "automaticDiscount": {
          "title": "FREESHIP5PLUS",
          "startsAt": "2025-01-01T00:00:00Z",
          "endsAt": "2025-12-31T23:59:59Z",
          "minimumRequirement": {
            "greaterThanOrEqualToQuantity": "5"
          },
          "destinationSelection": {
            "allCountries": true
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a free shipping discount for a customer segment

  #### Description

  Create an automatic \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) discount. This mutation creates a discount that applies free shipping to North America on orders with a subtotal of $50 or more. The discount can be \[combined]\(https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with order and product discounts. The discount applies to one-time purchases and orders with a maximum shipping price of $200. This discount applies to customers from a particular segment.

  #### Query

  ```graphql
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
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
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-07-24T16:21:30-04:00",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
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
  "query": "mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { id } userErrors { field message } } }",
   "variables": {
      "freeShippingAutomaticDiscount": {
        "title": "FREESHIPPING50",
        "startsAt": "2025-07-24T16:21:30-04:00",
        "destination": {
          "countries": {
            "add": [
              "CA",
              "US"
            ]
          }
        },
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
          }
        },
        "appliesOnOneTimePurchase": true,
        "maximumShippingPrice": "200",
        "minimumRequirement": {
          "subtotal": {
            "greaterThanOrEqualToSubtotal": "50"
          }
        },
        "combinesWith": {
          "orderDiscounts": true,
          "productDiscounts": true
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
    mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingAutomaticDiscount": {
              "title": "FREESHIPPING50",
              "startsAt": "2025-07-24T16:21:30-04:00",
              "destination": {
                  "countries": {
                      "add": [
                          "CA",
                          "US"
                      ]
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "appliesOnOneTimePurchase": true,
              "maximumShippingPrice": "200",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": "50"
                  }
              },
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true
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
    mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-07-24T16:21:30-04:00",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
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
      "query": `mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
        discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
          automaticDiscountNode {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "freeShippingAutomaticDiscount": {
              "title": "FREESHIPPING50",
              "startsAt": "2025-07-24T16:21:30-04:00",
              "destination": {
                  "countries": {
                      "add": [
                          "CA",
                          "US"
                      ]
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "appliesOnOneTimePurchase": true,
              "maximumShippingPrice": "200",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": "50"
                  }
              },
              "combinesWith": {
                  "orderDiscounts": true,
                  "productDiscounts": true
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticFreeShippingCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856670"
      },
      "userErrors": []
    }
  }
  ```

* ### discountAutomaticFreeShippingCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20M\(%24freeShippingAutomaticDiscount%3A%20DiscountAutomaticFreeShippingInput!\)%20%7B%0A%20%20discountAutomaticFreeShippingCreate\(freeShippingAutomaticDiscount%3A%20%24freeShippingAutomaticDiscount\)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22freeShippingAutomaticDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22FREESHIPPING50%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-11T22%3A30%3A47Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22destination%22%3A%20%7B%0A%20%20%20%20%20%20%22countries%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22CA%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22US%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22appliesOnOneTimePurchase%22%3A%20true%2C%0A%20%20%20%20%22maximumShippingPrice%22%3A%20%22200%22%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22subtotal%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToSubtotal%22%3A%20%2250%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22combinesWith%22%3A%20%7B%0A%20%20%20%20%20%20%22orderDiscounts%22%3A%20true%2C%0A%20%20%20%20%20%20%22productDiscounts%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
    automaticDiscountNode {
      id
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
"query": "mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { id } userErrors { field message } } }",
 "variables": {
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-01-11T22:30:47Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
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
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "freeShippingAutomaticDiscount": {
            "title": "FREESHIPPING50",
            "startsAt": "2025-01-11T22:30:47Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "destination": {
                "countries": {
                    "add": [
                        "CA",
                        "US"
                    ]
                }
            },
            "appliesOnOneTimePurchase": true,
            "maximumShippingPrice": "200",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50"
                }
            },
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true
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
    "query": `mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "freeShippingAutomaticDiscount": {
            "title": "FREESHIPPING50",
            "startsAt": "2025-01-11T22:30:47Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "destination": {
                "countries": {
                    "add": [
                        "CA",
                        "US"
                    ]
                }
            },
            "appliesOnOneTimePurchase": true,
            "maximumShippingPrice": "200",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50"
                }
            },
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true
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
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "freeShippingAutomaticDiscount": {
    "title": "FREESHIPPING50",
    "startsAt": "2025-01-11T22:30:47Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "destination": {
      "countries": {
        "add": [
          "CA",
          "US"
        ]
      }
    },
    "appliesOnOneTimePurchase": true,
    "maximumShippingPrice": "200",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50"
      }
    },
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "freeShippingAutomaticDiscount": {
    "title": "FREESHIPPING50",
    "startsAt": "2025-01-11T22:30:47Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "destination": {
      "countries": {
        "add": [
          "CA",
          "US"
        ]
      }
    },
    "appliesOnOneTimePurchase": true,
    "maximumShippingPrice": "200",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50"
      }
    },
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true
    }
  }
}
```

## Response

JSON

```json
{
  "discountAutomaticFreeShippingCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057856669"
    },
    "userErrors": []
  }
}
```
