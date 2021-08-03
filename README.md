# Evaluate a News Article with Natural Language Processing - Udacity React ND

## Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [NPM Scripts](#npm-scripts)
- [Webpack](#webpack)

## Overview

This project focuses on implementing webpack build tool with important plugins that will ease the way develop your web application.
The project covered loaders, plugins, service loaders, optimizer and environment modes.
A user enters an article (in text) and analyze it, here and API request is made to a 3rd party API named **MeaningCloud AP**, and it returns the data processed by their NLP model.

## Installation

Clone this repo `git clone [LINK-TO-REPO]`
then use `npm install` to install the application

## NPM Scripts

The app comes with two environment modes, Development and Production.

1. `npm run start` to run server.
2. `npm run build-prod` to build the app into dist folder with production plugins.
3. `npm run build-dev` to build the app into dist folder with development plugins.
4. `npm run prod` a custom script which runs the following sequentially
   - `rm -rf dist` delete dist folder if found.
   - `npm run build-prod`
   - `npm start`runs the server and maps the dist folder as express static files.
5. `npm run test` runs a unit test library called jest.

## Webpack

Webpack is a build tool library which that provides many features that take your web app to a professional level, it provides many plugins that increase your app efficiency as well.
