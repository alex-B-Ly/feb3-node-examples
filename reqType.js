var http = require("http");

var PORT = 8080;

var server = http.createServer(function(req, res){
    var method = req.method.toLowerCase();
    console.log("method", method);

    var requestData = '';

    req.on("data", function(msg){
        requestData = msg;
    });

    req.on("end", function(){
        res.end("You just got a " + method + " request\n" + requestData);
    })
});

server.listen(PORT, function(){
    console.log("server listening on http://localhost:%s", PORT);
});