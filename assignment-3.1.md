```javascript
'use strict';

var module = angular.module('xe.datasources', []);


module.service('Breakpoint', function() {
  // http://stackoverflow.com/a/2117523/377392
  var uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  function uuid4() {
    return uuidFormat.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };

  var Breakpoint = function(opt_id) {
    this.id = opt_id || uuid4();
    this.type = Breakpoint.Type.TEMP;
    this.fnAddress = 0;
    this.address = 0;
    this.enabled = true;
  };
  Breakpoint.Type = {
    TEMP: 'temp',
    CODE: 'code'
  };
  Breakpoint.fromJSON = function(json) {
    var breakpoint = new Breakpoint(json.id);
    breakpoint.type = json.type;
    breakpoint.fnAddress = json.fnAddress;
    breakpoint.address = json.address;
    breakpoint.enabled = json.enabled;
    return breakpoint;
  };
  Breakpoint.prototype.toJSON = function() {
    return {
      'id': this.id,
      'type': this.type,
      'fnAddress': this.fnAddress,
      'address': this.address,
      'enabled': this.enabled
    };
  };
  return Breakpoint;
});


module.service('DataSource', function($q) {
  var DataSource = function(source, delegate) {
    EventEmitter.call(this);
    this.source = source;
    this.delegate = delegate;
    this.online = false;
    this.status = 'disconnected';
  };
  inherits(DataSource, EventEmitter);
  DataSource.prototype.open = function() {};
  DataSource.prototype.dispose = function() {};
  DataSource.prototype.issue = function(command) {};

  DataSource.prototype.makeReady = function() {
    return this.issue({
      command: 'debug.make_ready'
    });
  };

  DataSource.prototype.getModuleList = function() {
    return this.issue({
      command: 'cpu.get_module_list'
    });
  };

  DataSource.prototype.getModule = function(moduleName) {
    return this.issue({
      command: 'cpu.get_module',
      module: moduleName
    });
  };

  DataSource.prototype.getFunctionList = function(moduleName, opt_since) {
    return this.issue({
      command: 'cpu.get_function_list',
      module: moduleName,
      since: opt_since || 0
    });
  };

  DataSource.prototype.getFunction = function(address) {
    return this.issue({
      command: 'cpu.get_function',
      address: address
    });
  };

  DataSource.prototype.getThreadStates = function() {
    return this.issue({
      command: 'cpu.get_thread_states'
    });
  };
 ```
* The code, as it is, is pretty legible for even a beginner like me.