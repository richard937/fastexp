//console.log("I am running \n are you surprised ?");
const fs = require('fs');

// to create the directory
const createDir = (dirPath) => {
    fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
        if (error) {
            console.error('An error occured: ', error);
        } else {
            console.log('Directory is made');
        }
    });
}

// to create the files
const createFile = (filePath, fileContent) => {
    fs.writeFile(filePath, fileContent, (error) => {
        if (error) {
            console.error('An error occured: ', error);
        } else {
            console.log('File is made');
        }
    });
}

const path = __dirname;
const pathDir = '/extension';

// package.json file
const pathFileJson = `${path}/extension/manifest.json`;
const jsonContent = `{
    "manifest_version": 2,
    "name": "Profile Manager",
    "description": "Description about the extension",
    "version": "1.0.0",
    "icons": {
        "128": "path_of_the_icon"
      },
      "browser_action": {
        "default_icon": "path_of_the_icon",
        "default_popup": "popup.html"
      }
  }`;


// HTML file
const pathFileHTML = `${path}/extension/popup.html`;
const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>

    </style>
</head>

<body>

    <script src="popup.js"></script>
</body>

</html>`;

// JS file
const pathFileJs = `${path}/extension/popup.js`;
const jsContent = '';

// function calling to create required dir and files
createDir(pathDir);
createFile(pathFileJson, jsonContent);
createFile(pathFileHTML, htmlContent);
createFile(pathFileJs, jsContent);

