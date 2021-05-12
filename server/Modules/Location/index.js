const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    locationName:{
        type: String,
        maxlength: 50,
        required: true,
        unique: 1
    },
    country_id:{
        type: Schema.Types.ObjectId,
        ref:"m_country",
        required: true
    },
    state_id:{
        type: Schema.Types.ObjectId,
        ref:"m_state",
        required: true
    },
    city_id:{
        type: Schema.Types.ObjectId,
        ref:"m_city",
        required: true
    },
    pincode:{
        type: Number,
        maxlength: 8,
        default: 0,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String,
        required: false
    },
    addressLine3:{
        type: String,
        required: false
    },
    homeAddress:{
        type: String,
        required: false
    },
    officeAddress:{
        type: String,
        required: false
    },
    linkid:{
        type:String
    },
    createdAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    },
    active:{
        type:Number,
        default:0
    }

},{timestamps:true});

const Location = mongoose.model("m_location",LocationSchema);

module.exports = { Location };