# AWS S3

Accessing your AWS S3 bucket with the extension.

## Requirements

- AWS Account
- Bucket Name
- Access Key
- Secret Access Key

## AWS S3 and CloudFront Configuration Guide

This guide provides step-by-step instructions on how to configure an Amazon S3 bucket, set up IAM policies and users for programmatic access, create a CloudFront distribution to serve content from the bucket, and define the bucket's CORS policy.

We will be creating a Bucket called : azydeco_demo_bucket
The bucket will not be directly accessible via the internet; however a IAM policy and user account will be pointed to the bucket and this will enable programmatic access which can be used in conjunction with Image Storage Explorer allowing you to interact with the Image assets. Additionally these instructions will explain how to create a cloudfront end point for the bucket which makes the content visible to the web.

## 1. Create a New S3 Bucket

An S3 bucket is a fundamental storage unit in AWS S3, used to store objects (files).

1. **Sign in to the AWS Management Console**: Go to [https://aws.amazon.com/console/](https://aws.amazon.com/console/) and sign in with your AWS account credentials.
2. **Navigate to S3**: In the search bar at the top, type S3 and select **S3** under Services.
3. **Create Bucket**:
   - Click the **Create bucket** button.
   - **AWS Region**: Choose a region that is geographically close to your users or where you want your data stored.
   - **Bucket name**: Enter azydeco_demo_bucket. Bucket names must be globally unique to your own AWS account.
   - **Object Ownership**: Select "ACLs disabled (recommended)".
   - **Block Public Access settings for this bucket**: For now, keep "Block all public access" **enabled**. We will configure CloudFront to make content accessible, which is more secure.
   - **Bucket Versioning**: You can leave this disabled or enable it based on your needs.
   - Leave other settings as default unless you have specific requirements.
   - Click **Create bucket** at the bottom of the page.

## 2. Create an IAM Policy (azydeco_ise_example_policy)

An IAM (Identity and Access Management) policy defines permissions for an entity in AWS. This policy will grant specific permissions to interact with `azydeco_demo_bucket`.

1. **Navigate to IAM**: In the AWS search bar, type IAM and select **IAM** under Services.
2. **Policies**: In the left navigation pane, click **Policies**.
3. **Create Policy**:
   - Click **Create policy**.
   - Select the **JSON** tab.
   - Replace the existing content with the following JSON policy document. This policy grants permissions to list the azydeco_demo_bucket and its objects, and to PUT (upload) and DELETE objects within it.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::azydeco_demo_bucket"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:PutObjectAcl"
      ],
      "Resource": "arn:aws:s3:::azydeco_demo_bucket\*"
    }
  ]
}
```

- Click **Next: Tags**. You can skip tags for this exercise.
- Click **Next: Review**.
- **Name**: Enter azydeco_ise_example_policy.
- **Description**: (Optional) Add a description, e.g., "Policy for azydeco_demo_bucket access".
- Click **Create policy**.

## 3. Create an IAM User Account and Attach the Policy

An IAM user represents a person or service that interacts with AWS. We will create a user with programmatic access and attach the policy we just created.

1. **Navigate to IAM (if not already there)**: In the left navigation pane, click **Users**.
2. **Create User**:
   - Click **Create user**.
   - **User name**: Enter a descriptive name, e.g., azydeco_demo_user.
   - **AWS access type**: Check the box for **Programmatic access**. This will generate an access key ID and secret access key.
   - Click **Next: Permissions**.
3. **Set Permissions**:
   - Select **Attach existing policies directly**.
   - In the search bar, type azydeco_ise_example_policy.
   - Check the box next to azydeco_ise_example_policy.
   - Click **Next: Tags**. You can skip tags.
   - Click **Next: Review**.
4. **Review and Create User**:
   - Review the details and click **Create user**.
5. **Download and Note the Secret and Key**:
   - **IMPORTANT**: On the success page, you will see the **Access key ID** and **Secret access key**.
   - Click **Download .csv** to save these credentials to a file. **This is your only chance to download the secret access key.** If you lose it, you will need to generate new credentials.
   - Store these credentials securely.

## 4. Create a CloudFront Resource as a Front End

CloudFront is a content delivery network (CDN) service that securely delivers content with low latency and high transfer speeds. We will use it to serve content from your S3 bucket publicly.

1. **Navigate to CloudFront**: In the AWS search bar, type CloudFront and select **CloudFront** under Services.
2. **Create Distribution**:
   - Click **Create a CloudFront distribution**.
   - **Origin domain**: Click in the text box. Your azydeco_demo_bucket.s3.amazonaws.com (or similar) will appear in the dropdown. Select it.
   - **S3 bucket access**: Select **Yes, use OAI (Origin Access Identity)**.
     - **Create new OAI**: Select this option. A default OAI name will be suggested.
     - **Update bucket policy**: Select **Yes, update the bucket policy**. This allows CloudFront to access your private S3 bucket.
   - **Viewer protocol policy**: Select **Redirect HTTP to HTTPS**.
   - **Allowed HTTP methods**: Select GET, HEAD. (If you need to support POST, PUT, etc. directly via CloudFront, you might need to adjust, but for typical web content serving, GET/HEAD is common).
   - **Price class**: Choose the price class that suits your needs (e.g., "Use all edge locations" for global reach, or a more restricted one for cost savings).
   - Leave other settings as default unless you have specific requirements.
   - Click **Create distribution**.
3. **Wait for Deployment**: CloudFront distributions take time to deploy (typically 10-20 minutes). The status will change from "Deploying" to "Deployed". Once deployed, you will see a **Domain name** (e.g., d1234abcd.cloudfront.net). This is the URL you will use to access your S3 content via CloudFront.  
   _Note: To make your content visible via CloudFront, you'll need to upload files to your azydeco_demo_bucket._

## 5. Configure the S3 Bucket CORS Policy

CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that prevents web pages from making requests to a different domain than the one that served the web page. You need to configure CORS on your S3 bucket to allow for example : localhost, localhost.dev, and awss3.azydeco.com to access its content.

1. **Navigate back to S3**: In the AWS search bar, type S3 and select **S3** under Services.
2. **Go to your bucket**: Click on azydeco_demo_bucket.
3. **Permissions Tab**: Click on the **Permissions** tab.
4. **CORS (Cross-origin resource sharing)**: Scroll down to the **Cross-origin resource sharing (CORS)** section.
5. **Edit CORS Policy**:
   - Click **Edit**.
   - Replace any existing JSON with the following configuration. This allows GET (retrieve), PUT (upload), POST (upload, form data), DELETE (delete), and HEAD (check existence) methods from the specified origins.

```json
[
  {
    "AllowedHeaders": ["\*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "AllowedOrigins": [
      "http://localhost",
      "http://localhost.dev",
      "http://awss3.azydeco.com",
      "https://localhost",
      "https://localhost.dev",
      "https://awss3.azydeco.com"
    ],
    "ExposeHeaders": [],
    "MaxAgeSeconds": 3000
  }
]
```

- Click **Save changes**.

You have now successfully configured your S3 bucket, IAM access, CloudFront distribution, and CORS policy!

## Accessing a bucket with the extension

An active subscription is required to add an AWS S3 provider to the extension.

![docs/Add_AWS_S3_provider.png](https://images.azydeco.com/docs/Add_AWS_S3_provider.png )

You can give your provider any Name, it will be displayed on the side panel with the name you enter.

The region must match the region you selected when you created the bucket.

With your saved credentials Access Key and Secret Access Key, copy the values into the form where the inputs Access Key and Secret are. If you did not save these values you will need to repeat the previous steps to generate new ones.

The Prefix will filter the images fetched from the bucket to only objects with keys beginning with your input string.

The option MaxKeys can be used to limit how many objects are fetched from the bucket. It defaults to 1000.

When you are done click on create and the provider will be validated then saved. If validation fails the provider will not be saved and you will be shown any errors on the form.

## Troubleshooting

### Images listed but not showing AWS S3

If you are seeing images listed on the main panel that do not show a thumbnail, you may need ro refresh your images from source. You can do this by clicking on the three dots by the selected provider on the side panel to open a dropdown menu, then clicking on Refresh Images from Source to start a refresh. Once the icon stops spinning the refresh will be finished and your images should all be visible. If any of the images have disappeared from the main panel after the refresh they may have been removed from the bucket.

### Objects stored in the AWS S3 bucket are missing from the extension main panel

Objects that do not include a supported file extension will not be shown on the main panel. The full count of objects fetched from the bucket is listed on the side panel labelled Bucket Keys.

The supported file extensions are avif, apng, png, jpg, jpeg, webp, zip, pdf, mp4 and gif and cannot be changed.
