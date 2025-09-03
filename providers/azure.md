# Azure Blob Storage

## Requirements

To access your Azure Blob Storage account programmatically, you will need the following information:

- Storage Account Name
- Account Key
- Container Name

We will use these variables to access the Azure Blob Storage account programmatically.

Create a .env file in **this** project directory and add the following lines:

```shell
AZURE_STORAGE_ACCOUNT_NAME=<your_storage_account_name>
AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<your_account_key>
AZURE_STORAGE_ACCOUNT_CONTAINER_NAME=<your_container_name>
```

## Find Your - Storage Account Name

1. [Navigate to the Azure Portal](https://portal.azure.com/#home).

2. Find Your Storage Account
   ![select_azure_service.png](https://images.azydeco.com/select_azure_service.png)

This is your **Storage Account Name**. You will need this to access your storage account programmatically.

## Find Your - Storage Account Access Key

Follow the previous steps to get to Azure portal home page.

1. Once you have clicked on the storage account name link, you will be taken to the storage account page.

2. In the left-hand menu, click on "Security + networking" accordion header to expand it.
   ![step_2.webp](https://images.azydeco.com/step_2.webp)

3. Next ![alt text](https://images.azydeco.com/azure_2.webp):
   - Select the **'Access Keys'** List Item in the left-hand menu.
   - Click on the "Show" button for either key1 or key2.
   - Copy the revealed key to your clipboard, this is your **Storage Account Access Key**.

## Find Your - Storage Account Container name

Once you have clicked on the storage account name link (see previous section), you will be taken to the storage account page.
![find_container_name.png](https://images.azydeco.com/find_container_name.png)

1. In the left-hand menu, click on "Data storage" accordion header to expand it.
2. Click on "Containers" List Item in the left-hand menu.
3. you will now see a list of containers in your storage account, I have only one container in my storage account apart form azure created $logs one, and it is called "blobtastic" so I will use this as my container name.

This is your **Storage Account Container name**. You can add this to your .env file.

## Your Completed .env file

If you use the results from the above steps, your .env file should look something like this:

```shell
AZURE_STORAGE_ACCOUNT_NAME='mytestblob'
AZURE_STORAGE_ACCOUNT_ACCESS_KEY='falsdkjfldsfsd3341234morerandomness=='
AZURE_STORAGE_ACCOUNT_CONTAINER_NAME='blobtastic'
```

## Link to Blobs in the Azure Blob Storage Container

When you click on an item in a container, you will go to the blob's page details.
The first property is the URL and will be in the following format:

```txt
https://<your storage account name>.blob.core.windows.net/<your container name>/your_blob_name.png
```

If you try to access this URL in your browser, you will most likely get an error message like this:

![errorxml.png](https://images.azydeco.com/errorxml.png)

this is because the blob is private and you need to authenticate to access it.

## Generate a SAS token

You will need to generate a SAS token to access the blob without the account key

In the blob's page details, click on the "Generate SAS" button, then change any settings you want, and click on the "Generate SAS token and URL" button.

Once you have generated the SAS token, you can access the blob using the URL provided by pasting it in the browser.

Note! The link will automatically expire after the specified time set when you generated the SAS token.

## Accessing a container with the extension

![docs/Add_azure_provider.png](https://images.azydeco.com/docs/Add_azure_provider.png )

An active subscription is required to add an Azure provider to the extension.

You can give your provider any Name, it will be displayed on the side panel with the name you enter.

The Storage Account Name must match the name you see on the Azure Portal.

The Access Key used can be either key 1 or key 2.

The container name is found under Data Storage, copy it into the form.

The Public Domain or Path is optional, it will be prefixed to the images url when you copy an image mask from the extension main panel.

The Prefix will filter the images fetched from the bucket to only objects with keys beginning with your input string.

The option MaxKeys can be used to limit how many objects are fetched from the bucket. It defaults to 1000.

When you are done click on create and the provider will be validated then saved. If validation fails the provider will not be saved and you will be shown any errors on the form.
