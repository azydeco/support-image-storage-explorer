---
title: Wordpress
info: Using the extension with a Wordpress Media Library
---

### Requirements

- Wordpress site

## Adding a Wordpress provider

Adding a Wordpress provider to the extension side panel only requires you to add the public url to the Endpoint input. Provide a name for your provider on the side panel, you can optionally input a public domain or path, prefix and max keys to fetch, then click on create. The extension will attempt to fetch the url to validate it before adding the provider, and the provider will not be added if you input an invalid url or the url can't be reached.

## Authenticating with Wordpress

The Wordpress provider option does not currently have authentication. You can add a public Wordpress site url when adding a provider and the extension will fetch the json contents of the sites media library. Any images that have links in the json will be displayed on the extension main panel.

## Limitations

You cannot use the extension to upload images to or delete images from a Wordpress media library due to Wordpress providers not having authentication.
