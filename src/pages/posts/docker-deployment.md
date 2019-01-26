---
title: 'Deploy Containerized Docker Apps with Dokku'
description: 'How to automate your docker deployment with Dokku PaaS'
date: '2019-01-27'
slug: 'docker-deployment-with-dokku'
tags:
  - docker
  - dokku
  - node
  - digitalocean
published: false
---

## Introduction

[Docker](https://docker.com) is a piece of software to **simplify the creation, deployment, and execution of your applications** by using containers. Containers allows you to package your application **outside of your operating system environment**. Instead of running different apps on different machines, you can run your container inside your machine without screwing up your operating system.

Its just like **Virtual Machine**. But the big difference is that Virtual Machine have a full OS with its own memory management installed. On the other hand, Docker containers are executed with the [Docker Engine](https://docs.docker.com/engine/) rather than hypervisor. Therefore, Docker containers are smaller and faster than Virtual Machines.

![vm vs docker](/assets/docker-deployment/vm-vs-docker.jpg)

## Prerequisites

- [Docker](https://docs.docker.com/install/) and [NodeJS](https://nodejs.org) installed on your machine.
- A [Docker Hub](https://hub.docker.com) account.

## Getting Started

hello
