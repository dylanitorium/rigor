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
Locally you need to use `npm run` to use the local version in the PATH. So you can just add
a script to your npm package to run rigor. e.g.:

__package.json__
```
...
"scripts": {
  "serve": "rigor ./my-directory",
},
...
```

### Process Managers
Chances are you may want to run the server as a process with something like pm2 or forever.
To do this, you will need to set up a script to run rigor. e.g.:

__start.sh__
```
./node_modules/.bin/rigor ./my-directory
```

You'll notice that we've specified the relative path to rigor. This is only necessary if rigor is
not global.

It also doesn't need to be a shell script, just make sure to set the relevant configuration on the
process manager for whatever type of script you use.

## Options
### -p, --port
Specify the port to use. Defaults to `8888`

### -i, --index
Specify the name of the index file. Defaults to `index.html`
