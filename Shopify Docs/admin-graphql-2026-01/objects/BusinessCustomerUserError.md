---
title: BusinessCustomerUserError - GraphQL Admin
description: An error that happens during the execution of a business customer mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError.md
---

# Business​Customer​User​Error

object

Requires `read_customers` access scope or `read_companies` access scope.

An error that happens during the execution of a business customer mutation.

## Fields

* code

  [Business​Customer​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BusinessCustomerErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesDelete)

  mutation

  Deletes a list of companies.

  * company​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of companies to delete.

  ***

* [company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete)

  mutation

  Deletes a company address.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to delete.

  ***

* [company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)

  mutation

  Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Companies are business entities that make purchases from the merchant's store. Use this mutation when you have a customer who needs to be associated with a B2B company to make purchases on behalf of that company.

  The mutation returns the newly created [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) that links the customer to the company. After assignment, the customer becomes a company contact who can place orders on behalf of the company with access to any catalogs, pricing, and payment terms configured for the company's locations.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the contact to.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer to assign as the contact.

  ***

* [company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)

  mutation

  Assigns the main contact for the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the main contact to.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the company contact to be assigned as the main contact.

  ***

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

  mutation

  Assigns a role to a contact for a location.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to assign a role to.

  * company​Contact​Role​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role to assign to a contact.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location to assign a role to a contact.

  ***

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

  mutation

  Assigns roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

    required

    The new roles to assign.

  ***

* [company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)

  mutation

  Creates a company contact and the associated customer.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company contact belongs to.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to create the company contact.

  ***

* [company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactDelete)

  mutation

  Deletes a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to delete.

  ***

* [company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany)

  mutation

  Removes a company contact from a Company.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to remove from the Company.

  ***

* [company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole)

  mutation

  Revokes a role on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to revoke a role from.

  * company​Contact​Role​Assignment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role assignment to revoke from a contact.

  ***

* [company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRoles)

  mutation

  Revokes roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being revoked.

  * role​Assignment​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The current role assignment IDs to revoke.

  * revoke​All

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Flag to revoke all roles on the contact.

  ***

* [company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete)

  mutation

  Deletes one or more company contacts.

  * company​Contact​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company contacts to delete.

  ***

* [company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

  mutation

  Updates a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to be updated.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to update the company contact.

  ***

* [company​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)

  mutation

  Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

  ***

  Note

  Creating a company without a `name` [returns an error](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error).

  ***

  Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

  * input

    [Company​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

    required

    ### Arguments

    The fields to use when creating the company.

  ***

* [company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete)

  mutation

  Deletes a company.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to delete.

  ***

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

  mutation

  Assigns roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

    required

    The roles to assign.

  ***

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

  mutation

  Creates one or more mappings between a staff member at a shop and a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to assign the staff member to.

  * staff​Member​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of IDs of the staff members to assign.

  ***

* [company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)

  mutation

  Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

  Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company location belongs to.

  * input

    [Company​Location​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

    required

    The fields to use to create the company location.

  ***

* [company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete)

  mutation

  Deletes a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to delete.

  ***

* [company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers)

  mutation

  Deletes one or more existing mappings between a staff member at a shop and a company location.

  * company​Location​Staff​Member​Assignment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company location staff member assignment to delete.

  ***

* [company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeRoles)

  mutation

  Revokes roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being revoked.

  * roles​To​Revoke

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The current roles to revoke.

  ***

* [company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete)

  mutation

  Deletes a list of company locations.

  * company​Location​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of company locations to delete.

  ***

* [company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)

  mutation

  Sets the tax settings for a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax settings get assigned to.

  * tax​Registration​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique tax registration ID for the company location.

  * tax​Exempt

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the location is exempt from taxes.

  * exemptions​To​Assign

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to assign to the company location.

  * exemptions​To​Remove

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to remove from the company location.

  ***

* [company​Location​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)

  mutation

  Updates a company location's information and B2B checkout settings. Company locations are branches or offices where [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) members place orders on behalf of the company. Contacts must be assigned to a location through `roleAssignments` to place orders.

  The mutation modifies details such as the location's name, contact information, preferred locale, and internal notes. You can also configure the B2B checkout experience through [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) settings that control whether orders require merchant review, [`PaymentTermsTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate) settings, shipping address editing permissions, and [`DepositConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration) requirements.

  Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update.

  * input

    [Company​Location​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationUpdateInput)

    required

    The input fields to update in the company location.

  ***

* [company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)

  mutation

  Revokes the main contact from the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to revoke the main contact from.

  ***

* [company​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

  mutation

  Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers that can have multiple contacts and locations with specific pricing, payment terms, and checkout settings.

  The mutation accepts the company's ID and an input object containing the fields to update. You can modify the company name, add or update internal notes, set an external ID for integration with other systems, or adjust the customer relationship start date.

  Learn more about [building B2B features](https://shopify.dev/docs/apps/build/b2b/start-building).

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to be updated.

  * input

    [Company​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput)

    required

    The input fields to update the company.

  ***

### Deprecated mutations

* [company​Location​Assign​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignTaxExemptions)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location to which the tax exemptions will be assigned.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being assigned to the location.

  ***

* [company​Location​Create​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreateTaxRegistration)

  mutation

  Deprecated

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax registration gets assigned to.

  * tax​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The unique tax id for the tax registration.

  ***

* [company​Location​Revoke​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxExemptions)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location from which the tax exemptions will be revoked.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being revoked from the location.

  ***

* [company​Location​Revoke​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose tax registration is being revoked.

  ***

***

## <\~> BusinessCustomerUserError Mutations

### Mutated by

* <\~>[companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesDelete)
* <\~>[company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete)
* <\~>[company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)
* <\~>[company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)
* <\~>[company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)
* <\~>[company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)
* <\~>[company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)
* <\~>[company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactDelete)
* <\~>[company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany)
* <\~>[company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole)
* <\~>[company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRoles)
* <\~>[company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)
* <\~>[company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete)
* <\~>[company​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)
* <\~>[company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete)
* <\~>[company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)
* <\~>[company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)
* <\~>[company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)
* <\~>[company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)
* <\~>[company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete)
* <\~>[company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers)
* <\~>[company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeRoles)
* <\~>[company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)
* <\~>[company​Location​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)
* <\~>[company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete)
* <\~>[company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)
* <\~>[company​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BusinessCustomerUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
