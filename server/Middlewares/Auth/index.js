const { User } = require("../../Modules/User");

let auth = ( req, res, next ) => {
    let token = req.session.w_auth;
    let uniqueid = req.session.uniqueid;
    let loggedin = req.session.loggedin;

    User.findOne({"token":token}).populate("location_id").populate("agency_id").exec((err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error:true
        });
        req.token = token;
        req.user = user;
        next();
    })

    // User.findByToken(token,(err,user) => {
    //     if(err) throw err;
    //     if(!user) return res.json({
    //         isAuth: false,
    //         error:true
    //     });
    //     req.token = token;
    //     req.user = user;
    //     next();

    // })
}
module.exports = { auth }