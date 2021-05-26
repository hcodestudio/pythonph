## Installation and development

### For local development:

Install all `npm` dependencies found on `package.json` by running the following command in the terminal (for Mac OS) or command prompt (for Windows):

```html
npm i
```

### Compiling assets (js & css)

After adding any updates in the css and javascript, run the following script.

```html
gulp local
```

### For deployment

Purge assets to drastically minimize css file size and minify index.html

```html
gulp build
```
