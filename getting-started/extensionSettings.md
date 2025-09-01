# Extension Settings

The vscode extension has settings under Settings / Extensions / Image Storage Explorer. Settings can also be changed in the settings.json.

## Excluded Directories

Directories that will not be searched for files in a local_fs provider. Can only be edited in the settings.json. By default the excluded directories are

```json
"node_modules",
".git",
".vscode",
".github",
"dist",
"build",
"out",
"coverage",
"test",
"tests",
"tmp",
"temp",
"logs",
"log",
"cache",
"caches"
```

## Local Server Port

Port number used for the local image server. Defaults to port set in the extension settings or 3833.

## Mask: Default

The image mask that is used when copying the html for a supported image type. Supported file types include

- .avif
- .apng
- .png
- .jpg
- .jpeg
- .webp
- .gif

## Mask: Mp4

The image mask that is used when copying the html for an mp4 file.

## Mask: Pdf

The image mask that is used when copying the html for a pdf file.

## Mask: Zip

The image mask that is used when copying the html for a zip file.

## Flatten Downloads

When set to true images downloaded from the bucket will not include paths that exist in the key. For example downloading an image with the key `path/to/image.png` will save the image as `image.png`.
