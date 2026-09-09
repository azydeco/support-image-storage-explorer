---
title: Wordpress
info: Using the extension with a Wordpress Media Library
---

## Requirements

- Wordpress site

### Optional

- Wordpress username
- Application Password

## Adding a Wordpress provider

Adding a Wordpress provider to the extension side panel only requires you to add the public url to the Endpoint input. Provide a name for your provider on the side panel, you can optionally input a public domain or path, username, application password, prefix and max keys to fetch, then click on create. The extension will attempt to fetch the url to validate it before adding the provider, and the provider will not be added if you input an invalid url or the url can't be reached.

## Authenticating with Wordpress

From wp-admin on your Wordpress site go to wp-admin/users.php, where there will be a table of users. Find the username column of the user that you want to authenticate with and copy it into the Username field in the extension. Hovering over the user's table row displays an Edit option. Click on Edit and scroll the to bottom of the page where Application Passwords are, you will need to create a new Application Password. Input a New Application Password Name and then click on Add Application Password. A new password will be displayed once and you will be unable to retrieve it after, so click on Copy and paste it into the extension's Application Password field, then create or update your provider. You will now be authenticated.

Authenticating with the Wordpress provider is optional and will allow you to uploaded to and delete images from the Wordpress media library. Without authenticating you can add a public Wordpress site url when adding a provider and the extension will fetch the json contents of the sites media library. Any images that have links in the json will be displayed on the extension main panel.

## Limitations

You cannot use the extension to upload images to or delete images from a Wordpress media library due to Wordpress providers not having authentication.

## Troubleshooting

### Images listed but not showing Wordpress

If images are listed on the main panel but the thumbnails are not showing they may have been moved, renamed or removed from the media library. You can refresh your provider by clicking on the three dots besides the provider name on the side panel and selecting Refresh Images from Source from the options. This will do another fetch for the media library, using the prefix if you set one, and display the most recent images on the main panel.

If the images you were expecting are no longer listed after refreshing they have likely been removed from the media library.
