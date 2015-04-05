var http = require("http");
var server = new http.Server();

//
//function onRequest(req, res) {
//    var a = "yrlkstyks";
//    console.log("Request received.");
//    res.write("Hello World");
//    res.write(a);
//    res.end();
//}

//var server = new http.Server(function(req, res){
//    var urlParsed = url.parse(reg.url, true);
//
//    if(urlParsed.pathname == "/echo" && urlParsed.query.message){
//        res.end(urlParsed.query.message);
//    } else {
//        res.statusCode = 404;
//        res.end("page not found");
//    }
//    // console.log(reg.method, reg.url);
//    //res.end();
//});


http.createServer(onRequest).listen(8888);
console.log("Server has started.");



var user = require("./index");


var blue = new user.Mario_Blue('Синій', 1, 10);
var red = new user.Mario_Red('Червоний');


blue.walk(3)
console.log(blue)
blue.fly(20)
console.log(blue)

blue.run(10);
red.run(20);
console.log('--------------------');
console.dir(red);
console.dir(blue);

