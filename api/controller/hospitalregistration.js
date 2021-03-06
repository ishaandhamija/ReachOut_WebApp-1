var mongoose = require('mongoose');
var hospital = mongoose.model('reach_regis');
var hos=mongoose.model('hospital_model');
module.exports.addhospital = function(req,res)
{
	hospital.create({
		name :req.body.name,
		phonenumber : req.body.phonenumber,
		email : req.body.email,
		city : req.body.city,
		address : req.body.address
	},function(err,hospital)
	{
		if(err)
		{
			res.status(400)
			   .json(err);
		}
		else
		{
			res.json(hospital);
		}

	});
}

module.exports.showall=function(req,res)
{
	hospital
		.find()
		.exec(function(err,hospitals)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		})
}
module.exports.updateit=function(req,res)
{
	hospital
		.updateOne({
			"email":req.body.email
		},{
			$set :{
				"verified" :true
			}
		},function(err,resp)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.status(200)
				   .json(resp);
			}
		});

}

module.exports.getHospitalInfo = function (req, res) {

	hospital.findOne({name: req.body.name}, function (err, hospital) {
        if(err) {
            res.status(400)
                .json(err);
        }
        else {
        	res.status(200)
            res.json(hospital);
        }
    });

}
module.exports.showhospitals=function(req,res)
{
	hos
		.find()
		.exec(function(err,hospitals)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		});
}

module.exports.unique = function(req,res)
{

	hos
		.distinct("speciality",function(err,hospitals)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		});
}
module.exports.bloodbanklist = function(req,res)
{

	hos
		.find({services:"Blood Bank"},function(err,hospitals)
		{
			if(err)
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		});
}

module.exports.filter = function(req,res)
{

	var stype=req.params.specialityy;
	console.log(stype);
	hos.
		find({speciality:stype},function(err,hospitals)
		{
			if(err) {
				res.status(400)
				   .json(err);
			}
			else
			{
				res.json(hospitals);
			}
		});
}