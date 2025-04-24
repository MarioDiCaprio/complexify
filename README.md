# Complexify

<img src="/public/img/logo/complexify-wallpaper.webp" alt="">

This web-app is about the visualization of complex-valued functions.

## Scripts

### Installing dependencies

In order to install all required NPM packages, run `npm install --force`. You have to run this with the `--force`
option because the package `react-mathquill` seems not to be supported much longer, and modern React versions are
incompatible.

### Running the application

Run `npm run dev` to run the application in development mode.

Alternatively, build the application with `npm run build` and then run it with `npm start`.

### Building the parser

In order to build the ANTLR parser to parse LaTeX equations, run `npm run build-parser`. This needs to be done after
making changes to the ANTLR grammar.