# Azure Blob Storage

### Requirements

- Storage Account Name
- Access Key
- Container Name

Azure's equivalent of Amazon S3 buckets is called Azure Blob Storage. Azure Blob Storage is a service for storing large amounts of unstructured data, such as text or binary data. It is designed for storing and retrieving large amounts of data, similar to Amazon S3.

In Azure Blob Storage, data is stored in containers, which are similar to buckets in Amazon S3. Each container can hold an unlimited number of blobs, which are the actual data objects.

Here is a brief overview of the key components:

Storage Account: The top-level container that holds all your Azure Storage data objects, including blobs, files, queues, and tables.
Container: A container organizes a set of blobs, similar to a directory in a file system.
Blob: The actual data object, which can be of different types (Block Blob, Append Blob, or Page Blob).
To interact with Azure Blob Storage, you can use the Azure SDKs, REST API, or Azure CLI.

Example of creating a container and uploading a blob using Azure SDK for JavaScript:

To add authentication with a username and password to an Azure Blob Storage client, you typically use Azure Active Directory (AAD) or a Shared Access Signature (SAS) token. However, if you want to authenticate using a username and password, you would generally use Azure Active Directory (AAD) to obtain a token.

To create a username and password for "@azure/identity" in Azure, you need to register an application within your Azure Active Directory (Azure AD) and retrieve the "Application (client) ID" and "Client secret" which act as your "username" and "password" respectively; you can do this through the Azure portal by navigating to "App registrations" and creating a new application.

Key steps:

- Access Azure Portal: Log in to the Azure portal using your Microsoft account.
- Navigate to App registrations: Go to "Azure Active Directory" then "App registrations" in the left menu.
- Create a new application: Click "New registration" and provide a name for your application.
- Generate credentials:
  - Select your newly created application.
  - Go to the "Certificates & secrets" section.
  - Click "New client secret" to generate a new secret.
  - Copy the "Client secret" value - this is considered your "password".
- Get application ID:
  - In the application overview page, find the "Application (client) ID" - this is your "username".
- Important considerations:
  - Permissions: Ensure your application has the necessary permissions to access the Azure resources you need.
  - Security: Treat your "client secret" as sensitive information and store it securely.

auth info

<https://www.npmjs.com/package/@microsoft/vscode-azext-azureauth>

![alt text](https://images.azydeco.com/azure_1.png)

get the accountKey for your Azure Storage account, follow these steps:

Navigate to the Azure Portal: Go to the Azure Portal.

Find Your Storage Account:

In the left-hand menu, click on "Storage accounts".
Select the storage account for which you want to retrieve the account key.
Access the Access Keys:

In the storage account's navigation pane, under the "Security + networking" section, click on "Access keys".
You will see two keys listed, key1 and key2. These are your account keys.
Copy the Account Key:

Click on the "Show keys" button if the keys are hidden.
Copy one of the keys (either key1 or key2). This is your accountKey.
Set the Account Key in Your Environment Variables:

Add the copied account key to your environment variables. For example, if you are using a .env file, add the following line:

```shell
AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<your_account_key>
```

## Accessing a container with the extension

![docs/Add_azure_provider.png](https://images.azydeco.com/docs/Add_azure_provider.png )

An active subscription is required to add an Azure provider to the extension.

---
