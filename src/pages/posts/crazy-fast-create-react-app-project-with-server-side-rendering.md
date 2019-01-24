---
title: 'Crazy Fast React Site with Server Side Rendering'
description: 'Learn how to build React app with server-side rendering without tears 😭'
date: '2019-01-24'
slug: 'crazy-fast-react-site-with-server-side-rendering'
tags:
  - 'react'
  - 'ssr'
  - 'javascript'
  - 'node'
published: true
---

## Introduction

If you have playing around with [**React**](https://reactjs.org) for a while, and you start to planning a production web app, you may need to considering about the performance and SEO for your web app. And that problem can be solved by server-side rendering. Even there are many different approach to achieve better performance on **client-side rendering**, it might **not be a good solution** for low-powered devices such as an old phone.

### What's make it crazy fast?

On the client-side rendering approach, A typical response sent by the server when requesting a React site will look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/app.js"></script>
  </body>
</html>
```

After fetching this response, our browser need to fetch the bundled javascript code which in this case is `/app.js`. Then, the browser will render our React components to the DOM. So the performance will depends on your internet connection and CPU power. See? This approach takes a lot of times even until the users can see the actual page looks like.

On the other hand, server-side rendering use the server to render our React components. That's what makes it _CRAZY FAST ⚡_. So the users can immediately see the page content, even before the browser gets the bundled javascript.

Unfortunately, server-side rendering comes with **one big problem**. It's very hard to configure from scratch. Also, you need to make sure that your javascript code could run by the server and the browser, and that's not a good story. For example, you can't use localStorage **directly** to your app, instead, you need to check whether it's run on the browser or server. But if you really want to spend much time and effort to get better performance and SEO, it might be a good choice.

## Prerequisites

- A bit knowledge of HTML & CSS
- A bit knowledge of Javascript & [NodeJS](https://nodejs.org)
- A bit knowledge of ReactJS
- A happy face 😊

## Getting Started

I have prepared the boilerplate of this project. You can clone it, or you can follow along this tutorial step by step if you want.

```bash
$ git clone https://github.com/reshuttle/react-ssr-demo.git

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

If you familiar with [create-react-app](https://facebook.github.io/create-react-app), The folder structure is almost the same. Everything inside `src` folder is our main React code. The `index.js` in the root folder is the server code which we jump into later.

## Babel configuration

React need [Babel](https://babeljs.io) to compile modern javascript language into es2015 which is compatible to almost all browser in the world. We will use **env** and **react** presets since we're using es6 and jsx. So, let's start by adding `.babelrc` file.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Webpack configuration

[Webpack](https://webpack.js.org) is a javascript build tool to bundle all assets in our app. In this case, we will use it to bundle our client side code. By default, webpack will looking at `webpack.config.js`, so let's make one.

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

By default, webpack only understands JavaScript and JSON files. Because we are using the Babel to transpile our javascript code. we need to add loaders configurations which is defined in webpack configuration file. In this case we're using `babel-loader` since we're using Babel.

## React components

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

If you familiar with create-react-app, Usually we have index.js which will **render** our React components. But server-side rendering is a little bit different. Instead of rendering our app, now we're **hydrating** our app. And why is that?

When using server-side rendering approach, the server will take care of rendering our app. So, the browser only hydrating our existing component, which is **already rendered** by our server. That's why server-side rendering is a lot faster because the browser do less job.

## Server code

We're almost there! the last thing we need to do to make this app work is by adding the server code. Add `server.js` inside the root folder.

```js
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'

import App from './src/App'

const app = express()

app.get('/client.js', (req, res) => res.sendFile(__dirname + '/dist/client.js'))

app.get('*', (req, res) => {
  const data = renderToString(<App />)
  const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>React App</title>
        </head>
        <body>
          <div id="root">${data}</div>
          <script src="/client.js"></script>
        </body>
      </html>
    `
  res.send(html)
})

app.listen(3000)
```

In our server, we have two different routes. The first one is for serving the bundled client-side code. The second one is for serving our app. As you see, the _app_ route return an html string which is populated by our rendered React components.

## NPM scripts

Before we start to run our app, we need to configure our **npm** scripts to make our life easier. Edit your `package.json`:

```json
{
  // ...
  "scripts": {
    "start": "NODE_ENV=development babel-node server.js",
    "build": "NODE_ENV=development webpack"
  }
  // ...
}
```

## Run our app

First, build our client-side code by running:

```bash
npm run build
```

Second, run our app by running:

```bash
run run start
```

Then, open your browser and go to [http://localhost:3000](http://localhost:3000), You will see something like this:

![screenshot](/assets/crazy-fast-react-site-with-server-side-rendering.png)

## Conslusion

Server-side rendering is a good technology for those who **really need** SEO and good performance. But, if you are building a dashboard app or anything that doesn't need to appear in google search. SPA is a good option for you 😊✌️.
