## Installation and development

### For local development:

Install all `npm` dependencies found on `package.json` by running the following command in the terminal (for Mac OS) or command prompt (for Windows):

```html
  npm i
```


### Compiling assets (js & css)
After adding any updates in the css and javascript, run the following commands.
* For css: `gulp css`
* For javascript: `gulp js`

### For deployment

Purge assets to drastically minimize css file size
```html
  gulp purge
```
