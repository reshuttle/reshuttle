---
title: 'Crazy Fast create-react-app Project with Server Side Rendering'
date: '2019-01-21'
path: '/articles/crazy-fast-create-react-app-project-with-server-side-rendering'
tags: ['react', 'ssr', 'create-react-app', 'javascript', 'fast', 'web', 'app']
thumbnail: '/assets/crazy-fast-create-react-app-project-with-server-side-rendering.png'
---

<!-- > **Note:** lorem ipsum dolor sit amet! -->

## Introduction

If you have playing around with [**React**](https://reactjs.org) for a while, and you are planning to use it for production, you may need to considering about the performance and SEO for your web app. And that problem can be solved by server-side rendering. Even there are many different approach to achieve better performance on **client-side rendering**, it might **not be a good solution** for low-powered devices such as an old phone.

### What's makes it special?

When you are using the client-side rendering, A typical response sent by the server when requesting a React site will look something like this:

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

After fetching this response, our browser need to fetch the bundled javascript code which in this case is `/app.js`. Then, the browser will render our React components to the DOM. So the performance will depends on your internet connection and CPU power. See? This approach takes a lot of times even until users can see the actual page looks like.

On the other hand, server-side rendering use the server to render our React components. That's what makes it _CRAZY FAST ⚡_. So the users can immediately see the page content, even before the browser gets the bundled javascript.

Unfortunately, server-side rendering comes with **one big problem**. It's very hard to configure from scratch. Also, you need to make sure that your javascript code could run by the server and the browser, and that's not a good story. But if you really want to spend much time and effort to get better performance and SEO, it might be the good choice.

The fastest way to getting started with React is by using [create-react-app](https://facebook.github.io/create-react-app) boilerplate. That's why we will start to upgrade our boilerplate with server-side rendering.

## Prerequisites

- A bit knowledge of HTML & CSS
- A bit knowledge of Javascript & NodeJS
- A bit knowledge of ReactJS
- A happy face 😊

## Getting Started

```bash
npx create-react-app hello-world-ssr

cd hello-world-ssr
```

Now, you have created the new project. So, let's jump to the next tutorial.
