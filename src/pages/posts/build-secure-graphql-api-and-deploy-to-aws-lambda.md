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
published: true
---

## Introduction

Building a secure APIs is the main job as a backend developer. But how does it works when using GraphQL? And how to deploy it to AWS Lambda? Well, there are several approach we will dive into in this course. Will will learn how to build a simple **Bookstore API**. Then, we will implement **Authorization** to our API, and deploy it to AWS Lambda with Serverless Platform.

## Prerequisites

- A bit knowledge of Javascript & NodeJS
- [Serverless CLI](https://serverless.com/framework/docs/getting-started) Installed on your machine
- An [AWS](https://aws.amazon.com) account

## Getting Started

I have prepared the boilerplate of this project. You can clone it, or you can follow along this tutorial step by step if you want.

```bash
$ git clone https://github.com/reshuttle/graphql-lambda-demo.git

$ npm install
```

Clone the repository on github, and go into that folder. Run `npm install`. Then you will see something like this.

```tree
project structure
```

## Setting up our GraphQL Server

In this tutorial, we're going to use the [GraphQL Yoga](https://github.com/prisma/graphql-yoga), which is the simplest way to build GraphQL Server with NodeJS. Let's write our first code then.

```js
// handler.js
const { GraphQLServerLambda } = require('graphql-yoga')

const typeDefs = `
  type Query {
    books: String! 
  }
`

const resolvers = {
  Query: {
    books: (_, { name }) => 'Hello world!',
  },
}

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
})

exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler
```

Now, we have a GraphQL Schema that has a `books` query which just returns a `Hello World` string. Then we've exported our **lambda and playground handler** which the AWS Lambda will looking for.

## Setting up Serverless

Serverless is a toolkit to develop a serverless functions, which we can use in various web services [Google Cloud Platform](https://cloud.google.com), [Microsoft Azure](https://azure.microsoft.com), and [Amazon Web Services (AWS)](https://aws.amazon.com).

Okay, so let's configure the serverless setup by adding `serverless.yml`.

```yaml
service: graphql-lambda-demo

plugins:
  - serverless-offline

provider:
  name: aws
  runtime: nodejs10.15

functions:
  graphql:
    handler: handler.server
    events:
      - http:
          path: /
          method: post
          cors: true
  playground:
    handler: handler.playground
    events:
      - http:
          path: /
          method: get
          cors: true
```

In this setup, we have defined two functions. First is the `graphql` handler, which is the GraphQL API. Second is the `playground` handler which is a GraphQL IDE to to Explore our GraphQL API.

Then, we are now using the [serverless-offline](https://github.com/dherault/serverless-offline) plugin. It is a great plugin to run our functions locally in our machine for development.

You can run the serverless-offline by running `yarn start` in the command line. By default, it will started at [http://localhost:3000](http://localhost:3000). Then, you will see something like this.

![graphql-playground](/assets/graphql-playground.png)

## Deployment 🚀

Now, it's time to deploy our API to AWS Lambda. Make sure that you already have and AWS Account, and [AWS CLI](https://aws.amazon.com/cli) installed. Then, run this command below in your command line. This will deploy our functions to AWS Lambda.

```bash
$ serverless deploy -v
```

Then, you could test if the function is working by invoking the GraphQL API.

```bash
$ serverless invoke -f graphql -l
```

After the deployment is done, login to your [AWS Console](https://console.aws.amazon.com).

![aws console](/assets/aws-console.png)

Then, click the **Lambda Service** on the AWS Services. You will see something like this.

![aws console lambda](/assets/aws-console-lambda.png)

Now, you have two functions deployed. Great job! Let's move one to the more advanced topics.

## Authentication

There are two different authentication approach that we're going to take a look at in this course. There are **session based** approach and **token based** approach. In this case, we're going to use the token based authentication and I will explain it later. But for now, let's compare it side by side.

### Session based authentication

In session based authentication, the server will create a session for the currently logged in user. The **session id** stored in the browser cookie. The cookie will sent to the server on every request, Since the user stays logged in. Then, the server compare the session id stored in the cookie which sent by the browser against the session that stored on the server to verify the user's identity.

### Token based authentication

When the user log in to the server, the server will respond to the client with a token, which is an encoded data that contains user id as the payload. The browser store the token (usually in **local storage**), and includes the token in the header with every request. Then, the server will verify the token and extract the payload inside the token to get the user identity.

Many web apps use [JSON Web Token](https://jwt.io) (JWT) instead of sessions for authentication. In that way, the user state is stored inside the token, instead of the server. Most of the modern apps use this approach, because of the scalability and mobile device authentication.

![comparison](/assets/cookie-token-auth.png)

## Conclusion

GraphQL is the one of most hottest topics in 2019. And understanding the core concept is a little bit challenging for most backend developers who's already comfortable with REST APIs. Also deploying a GraphQL API is tough. But serverless platform make your life easier.
