var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var contactSchema=new Schema({
	name:String,
	email:String,
	subject:String,
	message:String
});

var Contact=mongoose.model('contacts',contactSchema);

var registerSchema=new Schema({
	name:String,
	email:String,
	phone:String,
	school:String,
	grade:String,
	laptop:String,
	experience:String,
	hear_about_us:String,
	referrer:String,
	reason:String,
	first_preference:String,
	second_preference:String
});

var User=mongoose.model('users',registerSchema);

module.exports={
	Contact:Contact,
	User:User
};