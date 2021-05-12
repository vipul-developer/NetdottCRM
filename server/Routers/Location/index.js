const RandomNumber = require("randomstring");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { Location } = require("../../Modules/Location");

const linkid = RandomNumber.generate({
    length: 8,
    charset: "hex",
    capitalization: "uppercase"
})

exports.locationRegister = ( req, res, next ) => {
    const location = new Location(req.body);
    location.linkid = linkid;
    location.save((err,doc)=>{
        if(err) return res.status(400).json({success:false,err});
        res.status(200).json({
            success: true,
            location:doc
        })
    })
}