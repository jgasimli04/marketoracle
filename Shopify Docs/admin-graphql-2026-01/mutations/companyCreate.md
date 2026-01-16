---
title: companyCreate - GraphQL Admin
description: >-
  Creates a
  [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)
  for B2B commerce. This mutation creates the company and can optionally create
  an initial
  [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)
  and
  [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)
  in a single operation. Company contacts are people who place orders on behalf
  of the company. Company locations are branches or offices with their own
  billing and shipping addresses.


  > Note: Creating a company without a `name` [returns an
  error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).


  Learn more about [creating companies for
  B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate.md'
---

# company​Create

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

***

Note

Creating a company without a `name` [returns an error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).

***

Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

## Arguments

* input

  [Company​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

  required

  The fields to use when creating the company.

***

## Company​Create​Payload returns

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The created company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a company

  #### Description

  Create a company with a company contact and company location.

  #### Query

  ```graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "company": {
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001"
      },
      "companyLocation": {
        "name": "Ottawa Postal Cards",
        "shippingAddress": {
          "firstName": "Avery",
          "lastName": "Brown",
          "address1": "150 Elgin Street",
          "address2": "8th Floor",
          "city": "Ottawa",
          "zoneCode": "ON",
          "zip": "K2P 1L4",
          "countryCode": "CA"
        },
        "billingSameAsShipping": true
      },
      "companyContact": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
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
  "query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name externalId mainContact { id customer { id email firstName lastName } } contacts(first: 5) { edges { node { id customer { email firstName lastName } } } } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
   "variables": {
      "input": {
        "company": {
          "name": "Postal Cards Inc",
          "externalId": "01456606-0001"
        },
        "companyLocation": {
          "name": "Ottawa Postal Cards",
          "shippingAddress": {
            "firstName": "Avery",
            "lastName": "Brown",
            "address1": "150 Elgin Street",
            "address2": "8th Floor",
            "city": "Ottawa",
            "zoneCode": "ON",
            "zip": "K2P 1L4",
            "countryCode": "CA"
          },
          "billingSameAsShipping": true
        },
        "companyContact": {
          "email": "avery.brown@example.com",
          "firstName": "Avery",
          "lastName": "Brown"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          externalId
          mainContact {
            id
            customer {
              id
              email
              firstName
              lastName
            }
          }
          contacts(first: 5) {
            edges {
              node {
                id
                customer {
                  email
                  firstName
                  lastName
                }
              }
            }
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "input": {
              "company": {
                  "name": "Postal Cards Inc",
                  "externalId": "01456606-0001"
              },
              "companyLocation": {
                  "name": "Ottawa Postal Cards",
                  "shippingAddress": {
                      "firstName": "Avery",
                      "lastName": "Brown",
                      "address1": "150 Elgin Street",
                      "address2": "8th Floor",
                      "city": "Ottawa",
                      "zoneCode": "ON",
                      "zip": "K2P 1L4",
                      "countryCode": "CA"
                  },
                  "billingSameAsShipping": true
              },
              "companyContact": {
                  "email": "avery.brown@example.com",
                  "firstName": "Avery",
                  "lastName": "Brown"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          externalId
          mainContact {
            id
            customer {
              id
              email
              firstName
              lastName
            }
          }
          contacts(first: 5) {
            edges {
              node {
                id
                customer {
                  email
                  firstName
                  lastName
                }
              }
            }
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "company": {
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001"
      },
      "companyLocation": {
        "name": "Ottawa Postal Cards",
        "shippingAddress": {
          "firstName": "Avery",
          "lastName": "Brown",
          "address1": "150 Elgin Street",
          "address2": "8th Floor",
          "city": "Ottawa",
          "zoneCode": "ON",
          "zip": "K2P 1L4",
          "countryCode": "CA"
        },
        "billingSameAsShipping": true
      },
      "companyContact": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
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
      "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
        companyCreate(input: $input) {
          company {
            id
            name
            externalId
            mainContact {
              id
              customer {
                id
                email
                firstName
                lastName
              }
            }
            contacts(first: 5) {
              edges {
                node {
                  id
                  customer {
                    email
                    firstName
                    lastName
                  }
                }
              }
            }
            contactRoles(first: 5) {
              edges {
                node {
                  id
                  name
                }
              }
            }
            locations(first: 5) {
              edges {
                node {
                  id
                  name
                  shippingAddress {
                    firstName
                    lastName
                    address1
                    city
                    province
                    zip
                    country
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "input": {
              "company": {
                  "name": "Postal Cards Inc",
                  "externalId": "01456606-0001"
              },
              "companyLocation": {
                  "name": "Ottawa Postal Cards",
                  "shippingAddress": {
                      "firstName": "Avery",
                      "lastName": "Brown",
                      "address1": "150 Elgin Street",
                      "address2": "8th Floor",
                      "city": "Ottawa",
                      "zoneCode": "ON",
                      "zip": "K2P 1L4",
                      "countryCode": "CA"
                  },
                  "billingSameAsShipping": true
              },
              "companyContact": {
                  "email": "avery.brown@example.com",
                  "firstName": "Avery",
                  "lastName": "Brown"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "companyCreate": {
      "company": {
        "id": "gid://shopify/Company/1059559575",
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001",
        "mainContact": {
          "id": "gid://shopify/CompanyContact/1059341835",
          "customer": {
            "id": "gid://shopify/Customer/1073339466",
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
          }
        },
        "contacts": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/CompanyContact/1059341835",
                "customer": {
                  "email": "avery.brown@example.com",
                  "firstName": "Avery",
                  "lastName": "Brown"
                }
              }
            }
          ]
        },
        "contactRoles": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/CompanyContactRole/1007033458",
                "name": "Location admin"
              }
            },
            {
              "node": {
                "id": "gid://shopify/CompanyContactRole/1007033459",
                "name": "Ordering only"
              }
            }
          ]
        },
        "locations": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/CompanyLocation/966871284",
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                  "firstName": "Avery",
                  "lastName": "Brown",
                  "address1": "150 Elgin Street",
                  "city": "Ottawa",
                  "province": "Ontario",
                  "zip": "K2P 1L4",
                  "country": "Canada"
                }
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a company with required fields only

  #### Description

  Create a company with no company contact and the default company location.

  #### Query

  ```graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "company": {
        "name": "Postal Cards Inc"
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
  "query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name mainContact { id } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
   "variables": {
      "input": {
        "company": {
          "name": "Postal Cards Inc"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "input": {
              "company": {
                  "name": "Postal Cards Inc"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "company": {
        "name": "Postal Cards Inc"
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
      "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
        companyCreate(input: $input) {
          company {
            id
            name
            mainContact {
              id
            }
            contactRoles(first: 5) {
              edges {
                node {
                  id
                  name
                }
              }
            }
            locations(first: 5) {
              edges {
                node {
                  id
                  name
                  shippingAddress {
                    firstName
                    lastName
                    address1
                    city
                    province
                    zip
                    country
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "input": {
              "company": {
                  "name": "Postal Cards Inc"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "companyCreate": {
      "company": {
        "id": "gid://shopify/Company/1059559574",
        "name": "Postal Cards Inc",
        "mainContact": null,
        "contactRoles": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/CompanyContactRole/1007033456",
                "name": "Location admin"
              }
            },
            {
              "node": {
                "id": "gid://shopify/CompanyContactRole/1007033457",
                "name": "Ordering only"
              }
            }
          ]
        },
        "locations": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/CompanyLocation/966871283",
                "name": "Postal Cards Inc",
                "shippingAddress": null
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Creating a company without a name returns an error

  #### Description

  Create a company with no company contact and the default company location.

  #### Query

  ```graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "company": {
        "externalId": "123"
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
  "query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name mainContact { id } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
   "variables": {
      "input": {
        "company": {
          "externalId": "123"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "input": {
              "company": {
                  "externalId": "123"
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
    mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "company": {
        "externalId": "123"
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
      "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
        companyCreate(input: $input) {
          company {
            id
            name
            mainContact {
              id
            }
            contactRoles(first: 5) {
              edges {
                node {
                  id
                  name
                }
              }
            }
            locations(first: 5) {
              edges {
                node {
                  id
                  name
                  shippingAddress {
                    firstName
                    lastName
                    address1
                    city
                    province
                    zip
                    country
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "input": {
              "company": {
                  "externalId": "123"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "companyCreate": {
      "company": null,
      "userErrors": [
        {
          "field": [
            "input",
            "company",
            "name"
          ],
          "message": "Name must exist",
          "code": "REQUIRED"
        }
      ]
    }
  }
  ```

* ### companyCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CompanyCreate\(%24input%3A%20CompanyCreateInput!\)%20%7B%0A%20%20companyCreate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20company%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20externalId%0A%20%20%20%20%20%20mainContact%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contacts\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contactRoles\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20locations\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20shippingAddress%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20province%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22company%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Postal%20Cards%20Inc%22%2C%0A%20%20%20%20%20%20%22externalId%22%3A%20%2201456606-0001%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22companyLocation%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Ottawa%20Postal%20Cards%22%2C%0A%20%20%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%20%20%20%20%22lastName%22%3A%20%22Brown%22%2C%0A%20%20%20%20%20%20%20%20%22address1%22%3A%20%22150%20Elgin%20Street%22%2C%0A%20%20%20%20%20%20%20%20%22address2%22%3A%20%228th%20Floor%22%2C%0A%20%20%20%20%20%20%20%20%22city%22%3A%20%22Ottawa%22%2C%0A%20%20%20%20%20%20%20%20%22zoneCode%22%3A%20%22ON%22%2C%0A%20%20%20%20%20%20%20%20%22zip%22%3A%20%22K2P%201L4%22%2C%0A%20%20%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22billingSameAsShipping%22%3A%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22companyContact%22%3A%20%7B%0A%20%20%20%20%20%20%22email%22%3A%20%22avery.brown%40example.com%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Brown%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
    company {
      id
      name
      externalId
      mainContact {
        id
        customer {
          id
          email
          firstName
          lastName
        }
      }
      contacts(first: 5) {
        edges {
          node {
            id
            customer {
              email
              firstName
              lastName
            }
          }
        }
      }
      contactRoles(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      locations(first: 5) {
        edges {
          node {
            id
            name
            shippingAddress {
              firstName
              lastName
              address1
              city
              province
              zip
              country
            }
          }
        }
      }
    }
    userErrors {
      field
      message
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
"query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name externalId mainContact { id customer { id email firstName lastName } } contacts(first: 5) { edges { node { id customer { email firstName lastName } } } } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "company": {
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001"
      },
      "companyLocation": {
        "name": "Ottawa Postal Cards",
        "shippingAddress": {
          "firstName": "Avery",
          "lastName": "Brown",
          "address1": "150 Elgin Street",
          "address2": "8th Floor",
          "city": "Ottawa",
          "zoneCode": "ON",
          "zip": "K2P 1L4",
          "countryCode": "CA"
        },
        "billingSameAsShipping": true
      },
      "companyContact": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
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
    "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          externalId
          mainContact {
            id
            customer {
              id
              email
              firstName
              lastName
            }
          }
          contacts(first: 5) {
            edges {
              node {
                id
                customer {
                  email
                  firstName
                  lastName
                }
              }
            }
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "company": {
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001"
    },
    "companyLocation": {
      "name": "Ottawa Postal Cards",
      "shippingAddress": {
        "firstName": "Avery",
        "lastName": "Brown",
        "address1": "150 Elgin Street",
        "address2": "8th Floor",
        "city": "Ottawa",
        "zoneCode": "ON",
        "zip": "K2P 1L4",
        "countryCode": "CA"
      },
      "billingSameAsShipping": true
    },
    "companyContact": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "company": {
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001"
    },
    "companyLocation": {
      "name": "Ottawa Postal Cards",
      "shippingAddress": {
        "firstName": "Avery",
        "lastName": "Brown",
        "address1": "150 Elgin Street",
        "address2": "8th Floor",
        "city": "Ottawa",
        "zoneCode": "ON",
        "zip": "K2P 1L4",
        "countryCode": "CA"
      },
      "billingSameAsShipping": true
    },
    "companyContact": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }
}
```

## Response

JSON

```json
{
  "companyCreate": {
    "company": {
      "id": "gid://shopify/Company/1059559575",
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001",
      "mainContact": {
        "id": "gid://shopify/CompanyContact/1059341835",
        "customer": {
          "id": "gid://shopify/Customer/1073339466",
          "email": "avery.brown@example.com",
          "firstName": "Avery",
          "lastName": "Brown"
        }
      },
      "contacts": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyContact/1059341835",
              "customer": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
              }
            }
          }
        ]
      },
      "contactRoles": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033458",
              "name": "Location admin"
            }
          },
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033459",
              "name": "Ordering only"
            }
          }
        ]
      },
      "locations": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyLocation/966871284",
              "name": "Ottawa Postal Cards",
              "shippingAddress": {
                "firstName": "Avery",
                "lastName": "Brown",
                "address1": "150 Elgin Street",
                "city": "Ottawa",
                "province": "Ontario",
                "zip": "K2P 1L4",
                "country": "Canada"
              }
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
```
