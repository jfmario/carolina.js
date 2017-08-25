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
if (args.subcommand == 'runserver') {
  require('./run-server')(args);
}