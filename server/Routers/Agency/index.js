const RandomNumber = require("randomstring");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { Agency } = require("../../Modules/Agency");

const linkid = RandomNumber.generate({
    length: 8,
    charset: "hex",
    capitalization: "uppercase"
})

exports.agencyRegister = ( req, res, next ) => {
    const agency = new Agency(req.body);
    agency.linkid = linkid;
    agency.save((err,doc)=>{
        if(err) return res.status(400).json({success:false,err});
        res.status(200).json({
            success: true,
            agency:doc
        })
    })
}