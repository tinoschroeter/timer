#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ timer

	Options
		--count  Minutes

	Examples
	  $ timer --count=10
`);

render(React.createElement(ui, cli.flags));
