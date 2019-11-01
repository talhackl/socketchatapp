var express= require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const jwt=require('jsonwebtoken');
var session = require('express-session')

//Server Side Session
app.set('trust proxy', 1);
app.use(session({
    secret: '%MySecretKeyIsTHIS%',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.get('/',function(req,res,next){
    console.log(req.session.id);
    res.send('Hello');
});


app.post('/messages',verifytoken,(req,res)=>{
    // var token=generatetoken();
    console.log(req.token);
    jwt.verify(req.token,'thisismysecretkey',(err,data)=>{
        res.json({
            message:"Data Verified",
            data
        });
    });
     //res.json(req.token);    
});


function verifytoken(req,res,next){
    console.log(req.headers['authorization']);    
    const bareertoken=req.headers['authorization'];
    if(typeof bareertoken !== 'undefined'){
        const bareer=bareertoken.split(' ');
        const token= bareer[1];
        req.token=token;
        next();
    }
}


app.post('/login',(req,res) =>{
    const user={
        id:'1',
        username:'Talha Hafeez',
        email:'talha9699@gmail.com'
    };
    jwt.sign({user},'thisismysecretkey',(err,token)=>{
        logeduser={
            id:'1',
            user_name:"TalhaHafeez",
            email:'talha9699@gmail.com',
            token:token
        }
        res.json(logeduser);
    });
});


app.post('/getToken',(req,res) =>{
    const user={
        id:'1',
        username:'Talha Hafeez',
        email:'talha9699@gmail.com'
    };
    jwt.sign({user},'thisismysecretkey',(err,token)=>{
        res.json(token);
    });
});


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

io.on('connection',function(socket){
    
    console.log("User Connected");

    console.log(socket.username);
    socket.on("new-message",(id,msg) =>{
        // console.log(socket.conn);
        //console.log(msg);
        io.emit('new-message',id);
        
    });

    socket.on('typing',function(){
        io.emit("User is typing");
        console.log("USER TYPING");
    });

    socket.on('disconnect',function(){
        console.log("Use Disconnected");
    });
});





//Listen TO Server
http.listen(3000,function(){
    console.log("Server is Listening at 3000");
});