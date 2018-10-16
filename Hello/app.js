//07/10/18 http.createServer

    var http = require('http');
                /* var f00 = function(req, res){ } //anonymus function
                http.createServer(foo); */
    /* http.createServer(function(req, res){
        var body = 'this is the body of response';
        var content_length = body.length;
        res.writeHead(200, {
            'Content-Type' : 'text/plain',
            'Content-Length' : content_length    
        });
        res.end(body);
    }).listen(3000);

    console.log("Hello_server is running on http://127.0.0.1:3000/"); */

//09/10/18 Node.js for beginners 6 Docs and the global object

    /* setTimeout (function(){
        console.log('3 sec have passed');
    },3000); */

    /* var time = 0;
    var timer = setInterval (function(){
        time += 2;
        console.log(time + ' sec have passed');
        if(time>7){
            clearInterval(timer);
        }
    },2000); */

    /* console.log(__dirname);
    console.log(__filename); */

//09/10/18 Node.js for beginners 7 Creating Modules
    var hello = require('./hello.js');
    /*console.log(hello.sayHelloInSpanish());
    console.log(hello.sayHelloInEnglish()); */

//09/10/18 Node.js for beginners 8 Reading and writing files using fs module
    var fs = require('fs');

    /*var read_string = fs.readFileSync('P_learn.txt', 'utf8');

    console.log(read_string);

    fs.writeFileSync('P_learn2.txt',read_string); */

    var fs = require('fs');

    /* var read_string = fs.readFile('P_learn.txt','utf8', function(err, data) {
        if(err)
            return console.error(err);
            console.log(data);
        });

        console.log('the file is read asychronously');

        fs.writeFile('P_learn3.txt', read_string, function(err, data) {
            if(err)
                return console.error(err);

                console.log('success !!!');
        }) */

//09/10/18 Node.js for beginners 9 Creating and removinf file using fs module
    var fs = require('fs');

        /* if (fs.existsSync('P_Learn2.txt')) {
            fs.unlink('P_Learn2.txt');
        } else {
            console.log('err');
        } */
        
    /* fs.unlink('P_Learn2.txt',(err) => {
        if(err) throw err;
        console.log('file was deleted')
    }); */

    /* fs.mkdirSync('node'); */

    /* fs.rmdirSync('node'); */

    /* fs.mkdir('node', function(){
        fs.writeFile('./node/P_learn2.txt', 'programming knowledge')
    });*/

    /* fs.unlink('./node/P_learn2.txt', function(){
        fs.rmdir('node', function() {
            console.log('Success')
        });
    }); */

//10/10/18 Node.js for beginners 10 - Node.js Events and EventEmitter
    var events = require('events');
    var util = require('util')
    var eventEmitter = new events.EventEmitter();
    /* eventEmitter.on('clicked', function(button){
            console.log(button + ' is clicked');
        });
    eventEmitter.emit('clicked', 'butten 1'); */
    var Students = function(name) {
        this.name = name;
    };

    util.inherits(Students, events.EventEmitter);

    var max = new Students('max');
    max.on('scored', function(marks){
        //console.log(max.name + ' scores ' + marks + ' marks');
    });
    max.emit('scored', 95);
    var tom = new Students('tom');
    tom.on('scored', function(marks){
        //console.log(tom.name + ' scores ' + marks + ' marks');
    });
    tom.emit('scored', 60);

//11/10/18 Node.js for beginners 11 - Basics of Streams - Readable Stream
    var fs = require('fs');

    var readStream = fs.createReadStream('P_learn.txt','utf8');
    var data = '';
    readStream.setEncoding('utf8');
    readStream.on('data', function(chunk){
        //console.log('-------------------------');
        data += chunk;
        //console.log(chunk);
    });

    readStream.on('end', function(chunk) {
        /* console.log(data);
        console.log('------------End-----------');  */    
    });

//11/10/18 Node.js for beginners 12 - Basics of Streams - Writable Streams
    var fs = require('fs');

    var readStream = fs.createReadStream('P_learn.txt')
    readStream.setEncoding('utf8');
    var writeStream = fs.createWriteStream('P_learn3.txt')

    readStream.on('data', function(chunk) {
        //console.log('----------------');
        //writeStream.write(chunk);
        //console.log(chunk);
    });

    readStream.on('end', function(chunk){

        //console.log('------------End------------------');
    });

//11/10/18 Node.js for beginners 13 - Pipes
    var fs = require('fs');
    var http = require('http');

    //var readStream = fs.createReadStream('P_learn.txt','utf8');
    //var writeStream = fs.createWriteStream('P_learn3.txt');
    //readStream.pipe(writeStream)

    /* http.createServer(function(req, res) {
        res.writeHead(200, {'content-type': 'text/plain'});
        var readStream = fs.createReadStream('P_learn.txt','utf8');
        readStream.pipe(res); // res.end('Hello World22\n'); 
    }).listen(3000);
    console.log("server is running on http://127.0.0.1:3000/") */

//11/10/18 Node.js for beginners 14 - Using Node.js for serving HTML page
  /*   var fs = require('fs');
    var http = require('http');

    http.createServer(function(req, res) {
        res.writeHead(200, {'content-type': 'text/html'});
        var readStream = fs.createReadStream('index.html','utf8');
        readStream.pipe(res);
    }).listen(3000);
    console.log("server is running on http://127.0.0.1:3000/") */

//12/10/18 Node.js for beginners 15 - Using Node.js for serving JSON Data   
    var fs = require('fs');
    var http = require('http');

    http.createServer(function(req,res){
        res.writeHead(200, {'content-type': 'application/json'});
        var jsonObj = {
            name : 'max',
            surname : 'tesar',
            age : 26
        };
        res.end(JSON.stringify(jsonObj));
    }).listen(3000);

    console.log('server is running on http:/127.0.0.1:3000/')
    console.log('server is running on http:/127.0.0.1')
//1/10/18 Node.js for beginners 16 - Basic Routing with node