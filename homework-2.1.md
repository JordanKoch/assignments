# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!

'use strict';

var module = angular.module('app', [
    // Variable: module
  'ui.bootstrap',
  'ui.router',
  'xe.datasources',
  'xe.directives',
  'xe.filters',
  'xe.log',
  'xe.router',
  'xe.session',
  'xe.ui.code',
  'xe.ui.code.functionView',
  'xe.ui.code.moduleInfo',
  'xe.ui.code.threadInfo',
  'xe.ui.console',
  'xe.ui.navbar'
]);
    // Array


module.controller('AppController', function($scope, app) {
    //Function: controller
  this.app = app;
    //Function: app
});


module.service('app', function(
    $rootScope, $q, $state, log, Session) {
  var App = function() {
    //Variable: App
    this.loading = false;
        // Boolean: false
    this.session = null;
        // Value: null
  };

  App.prototype.setSession = function(session) {
    this.close();
        //Function: close

    this.session = session;
        Variable: session
    $rootScope.$emit('refresh');
        //Function
  };

  App.prototype.close = function() {
    this.loading = false;
        //Boolean: false
    if (this.session) {
        // If statement
      this.session.dispose();
      this.session = null;
        //Value: null
    }
  };

  App.prototype.open = function(sessionId) {
    var d = $q.defer();
        //Variable: d

    // Ignore if already open.