---
title: Local Workspace
info: Using a local filesystem with the extension
sidebar:
  order: 1
---


## Requirements

- A directory containing image files

## Adding a local workspace provider

Adding a provider requires you to select a folder that exists under your vscode workspace. You can optionally provide a name and a public domain or path to the provider when creating it. The name is what the provider is called on the side panel. The public domain or path is prefixed to the image mask when you copy it from an image on the main panel.

## Local Image Server

The local image server runs when using a local fs provider to serve the images displayed on the main panel. It defaults to port 3833 and tries to use the next port if it is unavailable. The default port can be changed in the extension settings under Image Storage Explorer: Local Server Port.

## Troubleshooting

### Excluded directories

When fetching images from a local fs provider, your excluded directories will be logged in the output tab of the terminal in vscode. You can change the excluded directories in the extension settings for Image Storage Explorer.

### Images listed but not showing

If the images and names are listed on the main panel but no image is shown, the local image server may have stopped. You can restart the local image server by pressing F1 to run a command, searching for Image Storage Explorer server: Restart Local Image Server, and running the command. You may need to click on the local fs provider on the sidepanel to reload the main panel. All of the images should now be showing.
