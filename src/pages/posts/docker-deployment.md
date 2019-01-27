---
title: 'Deploy Your Docker Container with Dokku'
description: 'How to automate your docker deployment with Dokku PaaS'
date: '2019-01-27'
slug: 'docker-deployment-with-dokku'
tags:
  - docker
  - dokku
  - nginx
  - digitalocean
published: false
---

## Introduction

[Docker](https://docker.com) is a piece of software to **simplify the creation, deployment, and execution of your applications** by using containers. Containers allows you to package your application **outside of your operating system environment**. Instead of running different apps on different machines, you can run your container inside your machine without screwing up your operating system.

Its just like **Virtual Machine**. But the big difference is that Virtual Machine have a full OS with its own memory management installed. On the other hand, Docker containers are executed with the [Docker Engine](https://docs.docker.com/engine/) rather than hypervisor. Therefore, Docker containers are smaller and faster than Virtual Machines.

![vm vs docker](/assets/docker-deployment/vm-vs-docker.jpg)

[Dokku](http://dokku.viewdocs.io/dokku/) is an open-source self-hosted Platform as a Service (PaaS) that helps you to deploy your own applications. Dokku offers a lot of cool features like [Git](https://git-scm.com) deployment, Port and Proxy management, and easy-to-use Plugins such as databases, in-memory store, etc.

In this tutorial, we will learn how to deploy your containerized application with Dokku to your Virtual Private Server (VPS).

## Prerequisites

- [Docker](https://docs.docker.com/install/) installed on your machine.
- A [Docker Hub](https://hub.docker.com) account.
- A Virtual Private Server.

## Getting Started

I have prepared the boilerplate of this project. You can clone it, or you can follow along this tutorial step by step if you want.

```bash
$ git clone https://github.com/reshuttle/docker-dokku-demo.git

$ npm install
```

Clone the repository on github, and go into that folder. Run `npm install`. Then you will see something like this.

```tree
├── handler.js
├── middlewares.js
├── package.json
├── serverless.yml
└── yarn.lock
```

## Conslusion

Docker is a great tool to learn in 2019, specially if you want to be a fullstack developer. Don't care what programming language you develop, what libraries you use, everything can be done with Docker. But deploying a docker container is not that easy, so Dokku make our life easier.
