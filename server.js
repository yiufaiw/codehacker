 var express=require('express');
 var mongoose=require('mongoose');
 var bodyParser=require('body-parser');
 var multipart=require('connect-multiparty');

 var app=express();
 var router=express.Router();
 var port=process.env.PORT||3000;

 var email=require("emailjs");
 var Models=require('./models.js');
 var User=Models.User;
 var Contact=Models.Contact;

//mongoose.connect('mongodb://localhost/Project');
mongoose.connect('mongodb://test:test@ds039095.mongolab.com:39095/jsondb');


 var allowCrossDomain = function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
  };



 app.use(allowCrossDomain);
 app.use(express.static('./www'));


 app.use(bodyParser.urlencoded({
    extended: true
 }));

router.post('/contact_us',function(req,res){
	var contact=new Contact();

	contact.name=req.body.name;
	contact.email=req.body.email;
	contact.subject=req.body.subject;
	contact.message=req.body.message;

	contact.save(function(err,contact){
		var server=email.server.connect({
		 	user:"elikia.test",//change to username
		 	password:"elikia.technologia",//change password
		 	host:"smtp.gmail.com",//change to smtp.yahoo.com
		 	ssl:true
 		});

		 server.send({
			 	text:contact.message,
			 	from:"Code Hacker Info-"+contact.name+" <elikia.test@gmail.com>",
			 	to:"Kevin Wong <knwg123@yahoo.com>",
			 	subject:contact.subject+"<"+contact.email+">"
			 },function(err,message){
			 	//console.log(err||message);
			 });


		if(err) res.send(err);

	 	res.json(contact);
	});

	

});
router.post('/register',function(req,res){
	var user=new  User();

	user.name=req.body.name;
	user.email=req.body.email;
	user.phone=req.body.phone;
	user.school=req.body.school;
	user.grade=req.body.grade;
	user.laptop=req.body.laptop;
	user.experience=req.body.experience;
	user.hear_about_us=req.body.hear_about_us;
	user.referrer=req.body.referrer;
	user.reason=req.body.reason;
	user.first_preference=req.body.first_preference;
	user.second_preference=req.body.second_preference;

	user.save(function(err,user){
		if(err)res.send(err);
		res.json(user);
	});
});
 app.use(bodyParser.json());

app.use('/api/',router);
  app.listen(port);
  console.log('Server Running on port '+port);