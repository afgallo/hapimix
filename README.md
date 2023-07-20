# HapiMix

![workflow](https://github.com/afgallo/hapimix/actions/workflows/main.yml/badge.svg)

## Overview

Welcome to HapiMix! HapiMix is an open-source project that uniquely blends the power of hapi, a rich framework for building applications and services, and htmx, a powerful tool that enables you to access modern browser features directly from HTML. Our goal with HapiMix is to provide a cutting-edge application boilerplate for building modern, high-performance web applications following the "HTML over the wire" approach.

## Objective

The objective of HapiMix is twofold:

1. **Leverage the Power of Hapi:** Hapi is a robust, modular, and highly configurable framework that allows developers to build versatile web applications and services. It provides a rich set of features like input validation, configuration-based functionality, error handling, logging, and more. By using Hapi as a base, we aim to make the development process smooth and efficient.

2. **Utilize htmx for Dynamic UIs:** htmx allows you to access AJAX, CSS Transitions, WebSockets, and Server-Sent Events directly from HTML, simplifying the way you create dynamic user interfaces. With HapiMix, we harness the power of htmx to bring the user interface to life, making web pages more interactive and responsive.

The result is a robust application boilerplate that gives developers a powerful toolkit for creating modern web applications without the need for client-side JavaScript frameworks. With HapiMix, developers can stay productive and focused on delivering high-quality, performant applications while enjoying the flexibility and simplicity of server-side rendering and "HTML over the wire".

Join us in this experiment to redefine the way we build web applications!

## Main Dependencies

The HapiMix project relies on a set of core dependencies that power its functionality. Here are the primary dependencies that form the backbone of the project:

- `@hapi/hapi`: For building powerful, scalable applications with built-in caching, configuration-based functionality, input validation, and more.
- `@hapi/inert`: For static file and directory handling in Hapi.js.
- `@hapi/vision`: For rendering templates views.
- `@hapipal/confidence`: A configuration document format for hapi.
- `@hapipal/haute-couture`: For automatic file-based hapi plugin composition.
- `@hapipal/toys`: Hapi.js helpers for enhancing productivity.
- `ejs`: Embedded JavaScript templating.
- `joi`: A powerful schema description language and data validator for JavaScript.

And the primary development dependencies:

- `tailwindcss`: Rapidly build modern websites without ever leaving your HTML.
- `@hapi/code`: The assertion library used alongside Lab.
- `@hapi/glue`: For composing your hapi server and plugins.
- `@hapi/lab`: A simple testing utility.
- `@hapipal/hpal`: The hapi pal CLI and manifest-driven hapi server utilities.
- `@hapipal/hpal-debug`: Debugging tool for hapi servers.
- `eslint`: The pluggable linting utility for JavaScript.

## Running the Application

1. **Debug Mode**: If you're in the development phase or debugging, the application should be run using:

   ```bash
   npm run start:tailwind
   npm run start:debug
   ```

   The `start:tailwind` command will start the application with Tailwind CSS and watch for any changes in the Tailwind CSS input file. Then, `debug` will start the server and attach a debugger to it. The debug command will also watch for changes in .js, .json, and .ejs files. Both these commands need to be run in different terminals.

2. **Production Mode**: Before running the application in production, ensure to minify JavaScript and CSS files:

   ```bash
   npm run minify:js
   npm run minify:js:vendor
   npm run minify:css
   ```

   These will minify the main.js, all .js files in the vendor directory, and main.css respectively.

   Then, set your environment to production:

   ```bash
   export NODE_ENV=production
   ```

   Now, you can run the application in production using:

   ```bash
   npm start
   ```

   This will start the server in production mode.

3. **Test**: To run the tests for the application, use the following command:

   ```bash
   npm run test
   ```

   This will run all the tests using Lab and output the test report.

4. **Lint**: To lint the code for the application, use the following command:
   ```bash
   npm run lint
   ```
   This will run ESLint to identify and report on patterns in your JavaScript code.
