# Extension Commands

Pressing F1 in vscode to display the commands will include commands from the extension. They are all prefixed with Image Storage Explorer.

## Revalidate Licence

Attempts to revalidate your current licence key.

## Help

Opens the Help page in the vscode window that lists each of these commands and describes what they do.

## Show InfoPanel

Opens the Discover page in the active window where you can start a trial or subscription.

## server: Restart Local Image Server

Restarts the local image server running on the port specified in your extension settings (Defaults to 3833). This is useful when your local images are not showing on the main panel with a local_fs provider selected.

If the local image server is running it will first be closed. A port number will be gotten from the workspace configuration Local Server Port, then the port number will be used to start a server with a handle to close it later.

## server: Stop Local Image Server

Stops the local image server running on the port specified in your extension settings (Defaults to 3833).

Checks for an existing local image server. If one exists, sets the local image server, localWebServerCloseHandle, to undefined. A window message will be displayed informing you when the local web server has stopped.

## Show Images

Command defined in packages\imageStorageExplorer\package.json as "imageStorageExplorer.showImageExplorerPanel"

Opens the main panel in vscode's Editor Container.

## Enter Licence Key

Opens a text box that allows the input of a Licence Key, as an alternative to inputting the key from the side panel.

## Show Licence Key

Shows your licence key in an VSCode information message pop up.

## Allow Information Messages

Allows pop up information messages to be shown again if you had previously clicked Do Not Show Again on a message.
