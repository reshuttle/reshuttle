---
title: 'Crazy Fast React Site with Server Side Rendering'
description: 'Learn how to build React app with server-side rendering without tears 😭'
date: '2019-01-21'
path: '/articles/crazy-fast-react-site-with-server-side-rendering'
tags: ['crazy', 'fast', 'react', 'ssr', 'javascript', 'fast', 'web', 'app']
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

<!-- The fastest way to getting started with React is by using [create-react-app](https://facebook.github.io/create-react-app) boilerplate. That's why we will start to upgrade our boilerplate with server-side rendering. -->

## Prerequisites

- A bit knowledge of HTML & CSS
- A bit knowledge of Javascript & NodeJS
- A bit knowledge of ReactJS
- A happy face 😊

## Getting Started

```bash
$ git clone https://github.com/reshuttle/react-ssr-demo.git

$ cd react-ssr-demo
```

Clone the repository on github, then go into that folder. Run `npm install`. Then you will see something like this.

```
the structure of the folder
```

If you familiar with [create-react-app](https://facebook.github.io/create-react-app), The folder structure is almost the same. Everything inside `src` folder is our main React code. The `index.js` in the root folder is the server code which we jump into later.

## Babel configuration

React need [Babel](https://babeljs.io) to compile the **JSX** code. Thanks to create-react-app v2, We now can use the react-app preset which is a preconfigured babel config provided by create-react-app. So, let's start by adding `.babelrc` file.

```json
{
  "presets": ["react-app"]
}
```
