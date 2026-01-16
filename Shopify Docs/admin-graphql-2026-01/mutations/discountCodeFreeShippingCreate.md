---
title: discountCodeFreeShippingCreate - GraphQL Admin
description: >-
  Creates an [free shipping
  discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
  that's applied on a cart and at checkout when a customer enters a code.


  > Note:

  > To create discounts that are automatically applied on a cart and at
  checkout, use the
  [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)
  mutation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate.md
---

# discount​Code​Free​Shipping​Create

mutation

Requires Apps must have `write_discounts` access scope.

Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

***

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.

***

## Arguments

* free​Shipping​Code​Discount

  [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

  required

  The input data used to create the discount code.

***

## Discount​Code​Free​Shipping​Create​Payload returns

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a free shipping discount code

  #### Description

  Create a \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied when customers enter a code. This example shows how to create a discount code that offers free shipping on orders over $20.

  #### Query

  ```graphql
  mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
    discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            maximumShippingPrice {
              amount
            }
            customerSelection {
              ... on DiscountCustomerAll {
                allCustomers
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
              }
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "freeShippingCodeDiscount": {
      "startsAt": "2022-06-22T21:12:07.000Z",
      "appliesOncePerCustomer": false,
      "title": "FreeShipping",
      "code": "FreeShipping",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 20
        }
      },
      "customerSelection": {
        "all": true
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
  "query": "mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) { discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt maximumShippingPrice { amount } customerSelection { ... on DiscountCustomerAll { allCustomers } } destinationSelection { ... on DiscountCountryAll { allCountries } } minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount } } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
   "variables": {
      "freeShippingCodeDiscount": {
        "startsAt": "2022-06-22T21:12:07.000Z",
        "appliesOncePerCustomer": false,
        "title": "FreeShipping",
        "code": "FreeShipping",
        "minimumRequirement": {
          "subtotal": {
            "greaterThanOrEqualToSubtotal": 20
          }
        },
        "customerSelection": {
          "all": true
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
    mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
      discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              maximumShippingPrice {
                amount
              }
              customerSelection {
                ... on DiscountCustomerAll {
                  allCustomers
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingCodeDiscount": {
              "startsAt": "2022-06-22T21:12:07.000Z",
              "appliesOncePerCustomer": false,
              "title": "FreeShipping",
              "code": "FreeShipping",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": 20
                  }
              },
              "customerSelection": {
                  "all": true
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
    mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
      discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              maximumShippingPrice {
                amount
              }
              customerSelection {
                ... on DiscountCustomerAll {
                  allCustomers
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingCodeDiscount": {
      "startsAt": "2022-06-22T21:12:07.000Z",
      "appliesOncePerCustomer": false,
      "title": "FreeShipping",
      "code": "FreeShipping",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 20
        }
      },
      "customerSelection": {
        "all": true
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
      "query": `mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
        discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeFreeShipping {
                title
                startsAt
                endsAt
                maximumShippingPrice {
                  amount
                }
                customerSelection {
                  ... on DiscountCustomerAll {
                    allCustomers
                  }
                }
                destinationSelection {
                  ... on DiscountCountryAll {
                    allCountries
                  }
                }
                minimumRequirement {
                  ... on DiscountMinimumSubtotal {
                    greaterThanOrEqualToSubtotal {
                      amount
                    }
                  }
                }
                codes(first: 2) {
                  nodes {
                    code
                  }
                }
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }`,
      "variables": {
          "freeShippingCodeDiscount": {
              "startsAt": "2022-06-22T21:12:07.000Z",
              "appliesOncePerCustomer": false,
              "title": "FreeShipping",
              "code": "FreeShipping",
              "minimumRequirement": {
                  "subtotal": {
                      "greaterThanOrEqualToSubtotal": 20
                  }
              },
              "customerSelection": {
                  "all": true
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
    "discountCodeFreeShippingCreate": {
      "codeDiscountNode": {
        "id": "gid://shopify/DiscountCodeNode/1057856657",
        "codeDiscount": {
          "title": "FreeShipping",
          "startsAt": "2022-06-22T21:12:07Z",
          "endsAt": null,
          "maximumShippingPrice": null,
          "customerSelection": {
            "allCustomers": true
          },
          "destinationSelection": {
            "allCountries": true
          },
          "minimumRequirement": {
            "greaterThanOrEqualToSubtotal": {
              "amount": "20.0"
            }
          },
          "codes": {
            "nodes": [
              {
                "code": "FreeShipping"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a free shipping discount code for a customer segment

  #### Description

  Create a \[free shipping discount]\(https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied when customers enter a code. This example shows how to create a discount code that offers free shipping for a specific customer segment.

  #### Query

  ```graphql
  mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
    discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "freeShippingCodeDiscount": {
      "startsAt": "2025-07-24T16:18:00-04:00",
      "appliesOncePerCustomer": false,
      "title": "FreeShipping",
      "code": "FreeShipping",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
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
  "query": "mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) { discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt context { ... on DiscountCustomerSegments { segments { id } } } destinationSelection { ... on DiscountCountryAll { allCountries } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
   "variables": {
      "freeShippingCodeDiscount": {
        "startsAt": "2025-07-24T16:18:00-04:00",
        "appliesOncePerCustomer": false,
        "title": "FreeShipping",
        "code": "FreeShipping",
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
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
    mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
      discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
          "freeShippingCodeDiscount": {
              "startsAt": "2025-07-24T16:18:00-04:00",
              "appliesOncePerCustomer": false,
              "title": "FreeShipping",
              "code": "FreeShipping",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
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
    mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
      discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
  QUERY

  variables = {
    "freeShippingCodeDiscount": {
      "startsAt": "2025-07-24T16:18:00-04:00",
      "appliesOncePerCustomer": false,
      "title": "FreeShipping",
      "code": "FreeShipping",
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
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
      "query": `mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
        discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
          codeDiscountNode {
            id
            codeDiscount {
              ... on DiscountCodeFreeShipping {
                title
                startsAt
                endsAt
                context {
                  ... on DiscountCustomerSegments {
                    segments {
                      id
                    }
                  }
                }
                destinationSelection {
                  ... on DiscountCountryAll {
                    allCountries
                  }
                }
                codes(first: 2) {
                  nodes {
                    code
                  }
                }
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }`,
      "variables": {
          "freeShippingCodeDiscount": {
              "startsAt": "2025-07-24T16:18:00-04:00",
              "appliesOncePerCustomer": false,
              "title": "FreeShipping",
              "code": "FreeShipping",
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
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
    "discountCodeFreeShippingCreate": {
      "codeDiscountNode": {
        "id": "gid://shopify/DiscountCodeNode/1057856658",
        "codeDiscount": {
          "title": "FreeShipping",
          "startsAt": "2025-07-24T20:18:00Z",
          "endsAt": null,
          "context": {
            "segments": [
              {
                "id": "gid://shopify/Segment/210588551"
              }
            ]
          },
          "destinationSelection": {
            "allCountries": true
          },
          "codes": {
            "nodes": [
              {
                "code": "FreeShipping"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### discountCodeFreeShippingCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeFreeShippingCreate\(%24freeShippingCodeDiscount%3A%20DiscountCodeFreeShippingInput!\)%20%7B%0A%20%20discountCodeFreeShippingCreate\(freeShippingCodeDiscount%3A%20%24freeShippingCodeDiscount\)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeFreeShipping%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20maximumShippingPrice%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20customerSelection%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCustomerAll%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20allCustomers%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20destinationSelection%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCountryAll%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20allCountries%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20minimumRequirement%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountMinimumSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20greaterThanOrEqualToSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20codes\(first%3A%202\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22freeShippingCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22startsAt%22%3A%20%222022-06-22T21%3A12%3A07.000Z%22%2C%0A%20%20%20%20%22appliesOncePerCustomer%22%3A%20false%2C%0A%20%20%20%20%22title%22%3A%20%22FreeShipping%22%2C%0A%20%20%20%20%22code%22%3A%20%22FreeShipping%22%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22subtotal%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToSubtotal%22%3A%2020%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerSelection%22%3A%20%7B%0A%20%20%20%20%20%20%22all%22%3A%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22destination%22%3A%20%7B%0A%20%20%20%20%20%20%22all%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
  discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
    codeDiscountNode {
      id
      codeDiscount {
        ... on DiscountCodeFreeShipping {
          title
          startsAt
          endsAt
          maximumShippingPrice {
            amount
          }
          customerSelection {
            ... on DiscountCustomerAll {
              allCustomers
            }
          }
          destinationSelection {
            ... on DiscountCountryAll {
              allCountries
            }
          }
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
              }
            }
          }
          codes(first: 2) {
            nodes {
              code
            }
          }
        }
      }
    }
    userErrors {
      field
      code
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
"query": "mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) { discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) { codeDiscountNode { id codeDiscount { ... on DiscountCodeFreeShipping { title startsAt endsAt maximumShippingPrice { amount } customerSelection { ... on DiscountCustomerAll { allCustomers } } destinationSelection { ... on DiscountCountryAll { allCountries } } minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount } } } codes(first: 2) { nodes { code } } } } } userErrors { field code message } } }",
 "variables": {
    "freeShippingCodeDiscount": {
      "startsAt": "2022-06-22T21:12:07.000Z",
      "appliesOncePerCustomer": false,
      "title": "FreeShipping",
      "code": "FreeShipping",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": 20
        }
      },
      "customerSelection": {
        "all": true
      },
      "destination": {
        "all": true
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
  mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
    discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            maximumShippingPrice {
              amount
            }
            customerSelection {
              ... on DiscountCustomerAll {
                allCustomers
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
              }
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "freeShippingCodeDiscount": {
            "startsAt": "2022-06-22T21:12:07.000Z",
            "appliesOncePerCustomer": false,
            "title": "FreeShipping",
            "code": "FreeShipping",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": 20
                }
            },
            "customerSelection": {
                "all": true
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

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
      discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeFreeShipping {
              title
              startsAt
              endsAt
              maximumShippingPrice {
                amount
              }
              customerSelection {
                ... on DiscountCustomerAll {
                  allCustomers
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
                }
              }
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                  }
                }
              }
              codes(first: 2) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "freeShippingCodeDiscount": {
            "startsAt": "2022-06-22T21:12:07.000Z",
            "appliesOncePerCustomer": false,
            "title": "FreeShipping",
            "code": "FreeShipping",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": 20
                }
            },
            "customerSelection": {
                "all": true
            },
            "destination": {
                "all": true
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
  mutation discountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
    discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeFreeShipping {
            title
            startsAt
            endsAt
            maximumShippingPrice {
              amount
            }
            customerSelection {
              ... on DiscountCustomerAll {
                allCustomers
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
              }
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                }
              }
            }
            codes(first: 2) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "freeShippingCodeDiscount": {
    "startsAt": "2022-06-22T21:12:07.000Z",
    "appliesOncePerCustomer": false,
    "title": "FreeShipping",
    "code": "FreeShipping",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": 20
      }
    },
    "customerSelection": {
      "all": true
    },
    "destination": {
      "all": true
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "freeShippingCodeDiscount": {
    "startsAt": "2022-06-22T21:12:07.000Z",
    "appliesOncePerCustomer": false,
    "title": "FreeShipping",
    "code": "FreeShipping",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": 20
      }
    },
    "customerSelection": {
      "all": true
    },
    "destination": {
      "all": true
    }
  }
}
```

## Response

JSON

```json
{
  "discountCodeFreeShippingCreate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/1057856657",
      "codeDiscount": {
        "title": "FreeShipping",
        "startsAt": "2022-06-22T21:12:07Z",
        "endsAt": null,
        "maximumShippingPrice": null,
        "customerSelection": {
          "allCustomers": true
        },
        "destinationSelection": {
          "allCountries": true
        },
        "minimumRequirement": {
          "greaterThanOrEqualToSubtotal": {
            "amount": "20.0"
          }
        },
        "codes": {
          "nodes": [
            {
              "code": "FreeShipping"
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
```
