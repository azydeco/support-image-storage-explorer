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
