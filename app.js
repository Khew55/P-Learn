const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Debian and Ubuntu based Linux dustrubutors => install node.js with NPM on Ubuntu Linux
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	sudo apt-get install -y nodejs
//require curl
		//DEBUGGER
C:\Users\khew5khew5\Documents\Node P_learn\Hello>node inspect app.js
< Debugger listening on ws://127.0.0.1:9229/b9bda295-41dd-4ef3-bd43-d047a5151337
< For help see https://nodejs.org/en/docs/inspector
Break on start in app.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var http = require('http');
  2
  3 /* var f00 = function(req, res){ } //anonymus function
debug> help
run, restart, r       Run the application or reconnect
kill                  Kill a running application or disconnect

cont, c               Resume execution
next, n               Continue to next line in current file
step, s               Step into, potentially entering a function
out, o                Step out, leaving the current function
backtrace, bt         Print the current backtrace
list                  Print the source around the current line where execution
                      is currently paused

setBreakpoint, sb     Set a breakpoint
clearBreakpoint, cb   Clear a breakpoint
breakpoints           List all known breakpoints
breakOnException      Pause execution whenever an exception is thrown
breakOnUncaught       Pause execution whenever an exception isn't caught
breakOnNone           Don't pause on exceptions (this is the default)

watch(expr)           Start watching the given expression
unwatch(expr)         Stop watching an expression
watchers              Print all watched expressions and their current values

debug>