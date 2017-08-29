# mcclatchy
<h1>McClatchy HTTPS Repo</h1>

Utilize the whole CSS file and all the fonts by pasting this in your HTML <head>:
``` 
 <link rel="stylesheet" href="https://rawgit.com/mjs2430/mcclatchy/master/fonts.css">
```
 
 or at the top of your CSS file:

```
@import url('https://rawgit.com/mjs2430/mcclatchy/master/fonts.css');
```

You can also select just the fonts you want (for faster load times) by clicking "fonts.css" in this Repo, and copy/pasting the "@font-face" code you need and placing it in your CSS. For example:
```
@font-face {
    font-family: "lyon";
    src: url('https://raw.githubusercontent.com/mjs2430/mcclatchy/master/fonts/lyon-black-italic.otf');
    font-weight: 900;
    font-style: italic;
}
```
To host other files such as other css files or JS files, follow these instructions:

1. Right click the file on this Repo's homepage
2. Copy the link/URL address
3. paste the link elsewhere so you can edit it
4. remove the /blob part of the url
5. change github.com to raw.githubusercontent.com
6. copy that new URL
7. goto https://rawgit.com/
8. paste your URL and copy the new URL for development

