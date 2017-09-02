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

var createAdmin = subs.addParser('createadmin', {
  addHelp: true
});

var loadData = subs.addParser('loaddata', {
  addHelp: true
});
loadData.addArgument(['-d', '--dataName'], {
  action: 'store',
  defaultValue: 'all'
});

var runServer = subs.addParser('runserver', {
  addHelp: true
});
runServer.addArgument(['-r', '--runConfig'], {
  action: 'store',
  defaultValue: 'default'
});

var args = parser.parseArgs();
console.log(args);
if (args.subcommand=='startproject') {
  require('./start-project')(args);
}
else if (args.subcommand == 'createadmin') {
  require('./create-admin')(args);
}
else if (args.subcommand == 'loaddata') {
  require('./load-data')(args);
}
else if (args.subcommand == 'runserver') {
  require('./run-server')(args);
}