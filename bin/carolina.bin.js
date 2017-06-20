#!/usr/bin/env node

var argparse = require('argparse');

var parser = argparse.ArgumentParser({
  addHelp: true,
  description: "Manager for web apps.",
  version: '1.0.0'
});
var subs = parser.addSubparsers({
  dest: 'subcommand',
  title: 'subcommand'
});
var startProject = subs.addParser('startproject', {
  addHelp: true
});

startProject.addArgument('name', {
  action: 'store'
});

var args = parser.parseArgs();
if (args.subcommand=='startproject') {
  require('./start-project')(args);
}