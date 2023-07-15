# HapiMix

## Overview

Welcome to HapiMix! HapiMix is an open-source project that uniquely blends the power of Hapi, a rich framework for building applications and services, and HTMX, a powerful tool that enables you to access modern browser features directly from HTML. Our goal with HapiMix is to provide a cutting-edge application boilerplate for building modern, high-performance web applications following the "HTML over the wire" approach.

## Objective

The objective of HapiMix is twofold:

1. **Leverage the Power of Hapi:** Hapi is a robust, modular, and highly configurable framework that allows developers to build versatile web applications and services. It provides a rich set of features like input validation, configuration-based functionality, error handling, logging, and more. By using Hapi as a base, we aim to make the development process smooth and efficient.

2. **Utilize HTMX for Dynamic UIs:** HTMX allows you to access AJAX, CSS Transitions, WebSockets, and Server-Sent Events directly from HTML, simplifying the way you create dynamic user interfaces. With HapiMix, we harness the power of HTMX to bring the user interface to life, making web pages more interactive and responsive.

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
- `handlebars`: A popular semantic templating engine.
- `joi`: A powerful schema description language and data validator for JavaScript.

And the primary development dependencies:

- `@hapi/code`: The assertion library used alongside Lab.
- `@hapi/glue`: For composing your hapi server and plugins.
- `@hapi/lab`: A simple testing utility.
- `@hapipal/hpal`: The hapi pal CLI and manifest-driven hapi server utilities.
- `@hapipal/hpal-debug`: Debugging tool for hapi servers.
- `eslint`: The pluggable linting utility for JavaScript.

## Running the Application

1. **Debug Mode**: To start the application in debug mode, use the following command:

   ```bash
   npm run debug
   ```

   This will start the server and attach a debugger to it.

2. **Test**: To run the tests for the application, use the following command:

   ```bash
   npm test
   ```

   This will run all the tests using Lab and output the test report.

3. **Production**: To start the application in production mode, use the following command:
   ```bash
   npm start
   ```
   This will start the server in production mode.
