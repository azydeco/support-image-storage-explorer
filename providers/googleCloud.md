# Google Cloud

This document is relevant when using an Account Key to access your google cloud bucket

### Requirements

- Google cloud account.

## Creating your Account Key

Navigate to [https://console.cloud.google.com](https://console.cloud.google.com/)

To create an account key to add a Google Cloud provider, you will need to first create a **Service Account** then add a key to this newly created account, this key is then used within Image Storage Explorer to authenticate against the Google api when making requests.

### Create a Service Account

- Click the hamburger menu on the left hand side and select -> IAM
- Then select 'Service Account' in the drop menu

![ServiceAccount-0.png](https://images.azydeco.com/ServiceAccount-0.png)

Click the '+CREATE SERVICE ACCOUNT' button.

now complete the form

![ServiceAccount-1.png](https://images.azydeco.com/ServiceAccount-1.png)

now click 'CREATE AND CONTINUE'

now add the role of 'Storage Folder Admin'

![ServiceAccount-2.png](https://images.azydeco.com/ServiceAccount-2.png)

### Create Account Key

you should now have a new account setup, but you will notice the 'no key' cell for it,let's add one.

![Screenshot 2024-02-22 154748.png](https://images.azydeco.com/Screenshot%202024-02-22%20154748.png)

on the row of your new account, click the three vertical dots on the right side of the row

and click the 'Manage Keys' button

![ServiceAccount-3.png](https://images.azydeco.com/ServiceAccount-3.png)

Now click the 'Add Key' -> 'Create new Key'

![ServiceAccount-04png.png](https://images.azydeco.com/ServiceAccount-04png.png)

and Select JSON

![ServiceAccount-05png.png](https://images.azydeco.com/ServiceAccount-05png.png)

and finally 'CREATE'

![ServiceAccount-06png.png](https://images.azydeco.com/ServiceAccount-06png.png)

This **key** and your **bucket name** is all you need to set up a new provider in 'Image Storage Explorer'

An active subscription is required to add a Google provider in the extension.

## Uploading Images

To enable upload of images you will need to ACL enabled on your bucket when using an account key.

From the drop menu click -> Cloud Storage -> Buckets

![Screenshot 2024-02-22 141553.png](https://images.azydeco.com/Screenshot%202024-02-22%20141553.png)

then select the bucket you want to work with.

![Screenshot 2024-02-22 142206.png](https://images.azydeco.com/Screenshot%202024-02-22%20142206.png)

you can now configure you bucket, you will need to select the 'PERMISSIONS' tab

![Screenshot 2024-02-22 143322.png](https://images.azydeco.com/Screenshot%202024-02-22%20143322.png)

now check or change the Access Control for you bucket.
currently I have Uniform selected, so need to click on the 'SWITCH TO FINE-GRAINED' button

![Screenshot 2024-02-22 143731.png](https://images.azydeco.com/Screenshot%202024-02-22%20143731.png)

and select the 'Fine-grained' option

![Screenshot 2024-02-22 143611.png](https://images.azydeco.com/Screenshot%202024-02-22%20143611.png)

If you have the correct permissions you should now be able to upload files.

## Accessing your bucket with the extension

An active subscription is required to add a new Google Storage provider to the extension.

![docs/Add_google_storage_provider.png](https://images.azydeco.com/docs/Add_google_storage_provider.png)

When adding a Google Storage provider to the extension first you will need to provide the account key that you saved earlier. Click on Validate Key and you will be shown the add provider form.

![docs/Add_google_storage_provider_2.png](https://images.azydeco.com/docs/Add_google_storage_provider_2.png)

Enter the Bucket and give your provider a name it will be displayed as on the side panel.

The Prefix will filter the images fetched from the bucket to only objects with keys beginning with your input string.

The Public Domain or Path is optional, it will be prefixed to the images url when you copy an image mask from the extension main panel.

The option MaxKeys can be used to limit how many objects are fetched from the bucket. It defaults to 1000.

When you are done click on Submit and the provider will be validated then saved. If validation fails the provider will not be saved and you will be shown any errors on the form.
