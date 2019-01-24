---
title: 'Build Secure GraphQL API and Deploy to AWS Lambda'
description: 'Build a GraphQL API with authentication and deploy to AWS Lambda 🚀'
date: '2019-01-26'
slug: 'build-secure-graphql-api-and-deploy-to-aws-lambda'
tags:
  - auth
  - graphql
  - node
  - aws
  - lambda
published: false
---

## Introduction

Building a secure APIs is the main job as a backend developer. But how does it works when using GraphQL? Well, there are several approach we will dive into in this course. We will learn about **GraphQL Basics** with nodejs, how to implement **Authorization** to our GraphQL APIs, and deploy it to AWS Lambda with Serverless Platform.

## Prerequisites

- A bit knowledge of Javascript & NodeJS
- An [AWS](https://aws.amazon.com) account

## Getting Started

I have prepared the boilerplate of this project. You can clone it, or you can follow along this tutorial step by step if you want.

```bash
$ git clone https://github.com/reshuttle/graphql-aws-demo

$ npm install
```

Clone the repository on github, and go into that folder. Run `npm install`. Then you will see something like this.

```tree
project structure
```

## Authentication

There are two different authentication approach that we're going to take a look at in this course. There are **session based** approach and **token based** approach. In this case, we're going to use the token based authentication and I will explain it why. But for now, let's compare it side by side.

### Session based authentication

In session based authentication, the server will create a session for the currently logged in user. The **session id** stored in the browser cookie. The cookie will sent to the server on every request, Since the user stays logged in. Then, the server compare the session id stored in the cookie which sent by the browser against the session that stored on the server to verify the user's identity.

### Token based authentication

When the user log in to the server, the server will respond to the client with a token, which is an encoded data that contains user id as the payload. The browser store the token (usually in **local storage**), and includes the token in the header with every request. Then, the server will verify the token and extract the payload inside the token to get the user identity.

Many web apps use [JSON Web Token](https://jwt.io) (JWT) instead of sessions for authentication. In that way, the user state is stored inside the token, instead of the server. Most of the modern apps use this approach, because of the scalability and mobile device authentication.

![comparison](/assets/cookie-token-auth.png)

## Conclusion
