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
next, you would reference each font-family in your CSS, and select a font-weight (these are the naming conventions I used, followed by each available font-weight and style):
```
<!--- Lyon --->
font-family: "lyon";
font-weight: 900, 800, 600, 500, 400, 300;
font-style: normal, italic;

<!--- McClatchy Sans --->
font-family: "mcclatchy-sans";
font-weight: 900, 800, 600, 500, 400, 300, 200;
font-style: normal;

<!--- McClatchy Sans Cond --->
font-family: "mcclatchy-sans-cond";
font-weight: 800, 600, 500, 400;
font-style: normal;

<!--- McClatchy Serif --->
font-family: "mcclatchy-serif";
font-weight: 800, 600, 500, 400;
font-style: normal;

<!--- McClatchy Slab --->
font-family: "mcclatchy-slab";
font-weight: 800, 600, 500, 400, 300;
font-style: normal;
```
<h2>You can also select just the fonts you want (for faster load times) by clicking "fonts.css" in this Repo, and copy/pasting the "@font-face" code you need and placing it in your CSS. For example:<h2>
```
@font-face {
    font-family: "lyon";
    src: url('https://raw.githubusercontent.com/mjs2430/mcclatchy/master/fonts/lyon-black-italic.otf');
    font-weight: 900;
    font-style: italic;
}
```
<h2>To host other files such as other css files or JS files, follow these instructions:</h2>

1. Right click the file on this Repo's homepage
2. Copy the link/URL address
3. paste the link elsewhere so you can edit it
4. remove the /blob part of the url
5. change github.com to raw.githubusercontent.com
6. copy that new URL
7. goto https://rawgit.com/
8. paste your URL and copy the new URL for development

