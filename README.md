# rigor
A simple static server built with express and commander

## Installation
### Global
`npm install -g rivor`

### Local
`npm install --save rigor`

## Usage
### Global
`rigor ./my-directory`

### Local
Locally you need to use `npm run` to get the local version in the PATH. So you can just add
a script to your npm package to run rigor.

__package.json___
```
...
"scripts": {
  "serve": "rigor ./my-directory",
},
...
```

## Options
### -p, --port
Specify the port to use. Defaults to `8888`

### -i, --index
Specify the name of the index file. Defaults to `index.html`
