# TypeScript to JSON Formatter

This is a Google Chrome extension that allows users to convert TypeScript objects from the clipboard to JSON format. It automatically formats the JSON object with indentation for better readability.


## Installation

1. Download or clone the [repository](chrome://extensions/)
2. Open Google Chrome and go to the [Extensions](chrome://extensions/) page
3. Enable "Developer mode" at the top right corner
4. Click on "Load unpacked" and select the directory containing the extension files
5. The extension should now be installed and ready to use

Note: The extension requires a recent version of Google Chrome.


## Setup

The URLs in the `"matches"` field of the `"content_scripts"` section in the `manifest.json` file must be updated to match the URLs of the webpages where the extension will be used.


## Usage

Once installed, the extension can be used by copying a TypeScript object to the clipboard and clicking on the extension icon. The TypeScript object will be converted to a formatted JSON string and copied back to the clipboard.

Alternatively, the extension can also be used by pasting a TypeScript object into a text area on a web page that matches the defined "matches" pattern. The extension will automatically format the TypeScript object as a JSON string.



<img src="icon.png" alt="exentsion icon" width="15%">


### usage on `click`

1. Copy a TypeScript object to the clipboard
2. Click on the extension icon to convert the object to JSON format
3. The converted JSON will be copied to the clipboard



<img src="textarea.png" alt="textarea screenshot" width="45%">


### usage on `paste`

1. Copy a TypeScript object to the clipboard
2. Paste from clipboard into a textarea on a webpage that matches the defined "matches" pattern.
3. The converted JSON will be pasted

Note: The extension only works with JavaScript or TypeScript objects, not other types of data.


Here's an example of what the input TypeScript format looks like:

```typescript
{
  name: "John",
  age: 30,
  city: "New York"
}
```


Here's an example of what the output JSON format looks like:

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```


## Testing

This extension has not been tested on all web pages, so it may not work as expected on some sites. If you encounter any issues, please let us know by opening an issue on the GitHub repository.


## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request. Make sure to follow the existing code style and add any necessary tests.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
