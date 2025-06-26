# Cloudflare R2

Using a Cloudflare R2 provider with the extension.

### Requirements

- Cloudflare account
- Bucket Name
- Access Key
- Secret Access Key
- Endpoint

## Creating an R2 bucket

Log into the Cloudflare dashboard and from your Cloudflare account open R2 Object Storage on the side bar.

Click on the Create bucket button and give your bucket a name, set a location for the bucket if you need to, then click Create bucket. The bucket should now be listed on the page. From here you will need to create an API token to get the values you can input into the extension to see the contents of your bucket.

### API tokens

From the R2 Object Storage page in your account on the Cloudflare Dashboard, there is an dropdown menu labelled API found next to the Create bucket button. Open the menu and click on Manage API tokens.

You will be shown a page where you can create either an Account API token or a User API token. Only one API token is needed.

Regardless if you choose to create an Account API token or a User API token, you can optionally choose permissions, specific buckets the token applies to, time to live, and IP address filtering before clicking on the Create API token button. You will be taken to a page that includes the values you need.

## Getting the Access Keys

To get access keys for an existing bucket you will need to repeat the previous steps to create a new API token because the values are only shown once by Cloudflare for security reasons.

### After creating an API token

When an API token is created you will be shown the **Access Key ID**, **Secret Access Key** and **Endpoint**. Save these values securely as they will not be shown again.

The respective values now need to be copied into the inputs on the Add Provider Cloudflare R2 screen on the extension sidepanel. With each input filled in you should now be able to create the provider in the extension and your image objects will be shown on the main panel.

## Accessing a bucket with the extension

![docs/Add_cloudflare_R2_provider.png](https://images.azydeco.com/docs/Add_cloudflare_R2_provider.png)

From the extension side panel click on the plus icon to open the add provider screen and select choose Cloudflare R2 from the list to show the add form. Without a trial or subscription the option may be disabled because you can only add up to 2 providers of types Cloudflare R2 or Local Workspace without a subscription.

You can give your provider any Name, it will be displayed on the side panel with the name you enter.

The Bucket Name is the name you gave the bucket on the Cloudflare dashboard.

Copy the Access Key, Secret Access Key and Endpoint you saved into the form. If you did not save these values you will need to create a new API token to receive new values.

The Public Domain or Path is optional, it will be prefixed to the images url when you copy an image mask from the extension main panel.

The Prefix will filter the images fetched from the bucket to only objects with keys beginning with your input string.

The option MaxKeys can be used to limit how many objects are fetched from the bucket. It defaults to 1000.

When you are done click on create and the provider will be validated then saved. If validation fails the provider will not be saved and you will be shown any errors on the form.

## Troubleshooting

### Images listed but not showing Cloudflare R2

Images may be listed on the main panel with no image thumbnail shown. To fix this try clicking on the three dots besides the name of your selected provider on the side panel to open a dropdown menu, then clicking on Refresh Images from Source. Once the refresh has finished all of your images should be visible.

If the images are no longer listed after a refresh, they may have been removed from the bucket.

### Objects stored in the Cloudflare R2 bucket are missing from the extension main panel

Only objects with supported file extensions are displayed on the main panel, your full count of objects fetched from the provider is the number labelled next to Bucket Keys on the side panel.

The supported file types are currently: 'avif', 'apng', 'png', 'jpg', 'jpeg', 'webp', 'zip', 'pdf', 'mp4' and 'gif'. These cannot be changed.
