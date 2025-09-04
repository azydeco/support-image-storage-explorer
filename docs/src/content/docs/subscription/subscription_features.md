---
title: Subscription Features
---

## Access To Additional Providers

A subscription provides access to the Google Storage, AWS S3, Wordpress and Azure providers that once created you can keep even after the subscription has expired. Once the subscription expires the edit functionality is disabled for providers that required a subscription to create. You can delete the providers if you no longer need them.

## Unrestricted Providers

With a subscription you can add more than 2 providers to the side panel with any type of bucket including multiple cloudflare buckets. You are able to edit the providers as long as the subscription is active, changing the prefix used to filter objects. You can always edit local workspace and cloudflare providers with or without a subscription.

## Image Mask

With an active subscription the Image Mask dropdown settings will be visible on the side panel beneath your providers list. You can read about how to use the image mask in the [mask docs](https://github.com/azydeco/support-image-storage-explorer/blob/docsite/docs/src/content/docs/getting-started/installation.md). If your subscription expires your html mask settings will change back to use the default copy value

```html
<img src="%PUBLIC_ENDPOINT%/%ASSET_NAME%" alt="" />
```
