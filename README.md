# Encolor

Encolor is a collection of colorization functions to add ANSI color codes to terminal output. It includes pre-defined color functions and utility functions to create custom colors. Encolor is written in TypeScript with type definitions for ease of use.

## Installation

You can install Encolor using npm:

```sh
npm install encolor
```

## Usage
Here's an example of how to use Encolor:

```js
const { encolor } = require('encolor');

console.log(encolor.red('This text will be red!'));
console.log(encolor.green('This text will be green!'));
console.log(encolor.yellow('This text will be yellow!'));
console.log(encolor.blue('This text will be blue!'));
console.log(encolor.magenta('This text will be magenta!'));
console.log(encolor.cyan('This text will be cyan!'));
```

## Features
Encolor provides the following features:

- Pre-defined color functions for red, green, yellow, blue, magenta, and cyan
- Written in TypeScript with type definitions for ease of use