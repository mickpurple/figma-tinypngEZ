Get you TinyPNG API key from -> https://tinypng.com/developers

then get the string "api:YOUR_API_KEY" where YOUR_API_KEY is the key that can be found on your API account page,
converted into Base64, using this site -> https://www.base64encode.org/

then, paste that converted string onto keychain object after "Basic " string in code.ts file.
then, build the code and enjoy ur plugin, ez pz!

---/---/---
Below are the steps to get your plugin running. You can also find instructions at:
https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin required Node.JS NPM and typescript

Get the latest type definitions for the plugin API by running:
npm install --save-dev @figma/plugin-typings


---/---/---
Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
then select "npm: watch". You will have to do this again every time
you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
---/---/---