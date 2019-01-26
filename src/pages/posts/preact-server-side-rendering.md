---
title: 'Preact Server Side Rendering'
description: 'How to crazy fast fast Preact with server-side rendering'
date: '2019-01-26'
slug: 'preact-server-side-rendering'
tags:
  - javascript
  - ssr
  - node
  - preact
published: false
---

## Introduction

[Preact](https://preactjs.com) is an awesome alternative of [React](https://reactjs.org), which is currently the most javascript framework according to the [State of JS](https://stateofjs.com). It's a lot faster than React, and it's got a nice simple API. For example, in Preact we define our css classes inside the attribute called `class` instead of `className`. Also, switching from React to Preact is a piece of cake 🍰. In this tutorial we are going to learn how to setup Preact with server side rendering from scratch.

## Getting Started

I have prepared the boilerplate of this project. You can clone it, or you can follow along this tutorial step by step if you want.

```bash
$ git clone https://github.com/reshuttle/preact-ssr-demo.git

$ npm install
```

Clone the repository on github, and go into that folder. Run `npm install`. Then you will see something like this.

```tree
├── server.js
├── src
│   ├── App.js
│   └── index.js
├── .babelrc
├── webpack.config.js
├── package.json
└── yarn.lock
```

## Babel configuration

[Babel](https://babeljs.io) in a **javascript compiler** that we need to compile our modern javascript code to **es2015** preset, which is compatible to almost all browser in the world. First, let's install our presets.

```bash
# Using yarn
$ yarn add --dev @babel/preset-react @babel/preset-env

# Using npm
$ npm install --save-dev @babel/preset-react @babel/preset-env
```

Then, add this to your `.babelrc` file.

```json
{
  "presets": ["@babel/preset-env", ["@babel/preset-react", { "pragma": "h" }]]
}
```

## Webpack configuration

[Webpack](https://webpack.js.org) is a javascript build tool to bundle all assets in our app. In this case, we will use it to bundle our client side code. Let's install webpack to our project dependencies.

```bash
# Using yarn
$ yarn add --dev webpack webpack-cli babel-loader

# Using npm
$ npm install --save-dev webpack webpack-cli babel-loader
```

By default, webpack will looking at `webpack.config.js`, so let's make one.

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [{ test: /\.js/, use: 'babel-loader' }],
  },
}
```

The entry indicates which module webpack should use to begin building. The output of the bundled code will be stored in the dist folder inside the root folder in the file called `client.js`. This code be executed by the browser.

By default, webpack only understands javascript and JSON files. Because we are using the Babel to transpile our javascript code. we need to add loaders configurations which is defined in webpack configuration file. In this case we're using `babel-loader` since we're using Babel.

## React component

We have Babel & Webpack ready, now it's time to write our first server-rendered React component. Let's add `app.js` and `index.js` inside src folder.

```js
// App.js
import React from 'react'

export default () => (
  <div>
    <h1>Hello World with SSR! 🎉🎉🎉</h1>
  </div>
)

// index.js
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

hydrate(<App />, document.getElementById('root'))
```

## Conslusion

React is a fast Javascript library, Preact is a crazy fast Javascript library.
