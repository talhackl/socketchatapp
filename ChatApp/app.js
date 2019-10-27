var express= require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http
    // ,{
    // path: '/test',
    // serveClient: false,
    // // below are engine.IO options
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false}
);

var messages=[
    {from:"Hassan",message:"Hello",to:"Talha"},
    {from:"Ali",message:"Hei",to:"Talha"},
    {from:"Mtbc",message:"How are You",to:"Talha"},
    {from:"Maaz",message:"What's up?",to:"Talha"},
    {from:"Arslan",message:"Let's Go",to:"Talha"},
    {from:"BBC",message:"Update Plz",to:"Talha"},
    {from:"Ary",message:"Pakistan",to:"Talha"},
    {from:"Shery",message:"Bhr AA",to:"Talha"},
    {from:"ABC",message:"Hello ABC I am Message"}
]
app.get('/',function(req,res,next){
    res.send('Hello');
});


io.on('connection',function(socket){
    
    console.log("User Connected");

    console.log(socket.id);
    socket.on("new-message",(id,msg) =>{
        // console.log(socket.conn);
        //console.log(msg);
        io.emit('new-message',id);
        
    });

    socket.on('disconnect',function(){
        console.log("Use Disconnected");
    });
});

//Listen TO Server
http.listen(3000,function(){
    console.log("Server is Listening at 3000");
});