const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

const agencySchema = new Schema({
    agencyName:{
        type: String,
        maxlength: 50,
        required: true,
        unique: 1
    },
    email1:{
        type: String,
        unique:1,
        required: true
    },
    email2:{
        type: String,
        unique:1,
        required: false
    },
    mobile1:{
        type: String,
        unique:1,
        required: true
    },
    mobile2:{
        type: String,
        unique:1,
        required: false
    },
    gst:{
        type: String,
        maxlength:16,
        unique:1,
        required: true
    },
    pancard:{
        type: String,
        maxlength: 16,
        unique: 1,
        required: true
    },
    workerCapacity:{
        type: Number,
        default: 0
    },
    numberOfDepartment:{
        type: Array,
        default: []
    },
    web:{
        type: String,
        require: false
    },
    bankDetails:{
        type: Array,
        default: []
    },
    upi:{
        type: Array,
        default:[]
    },
    location_id:{
        type: Schema.Types.ObjectId,
        ref:"m_location",
        required: true
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

const Agency = mongoose.model("m_agency",agencySchema);

module.exports = { Agency };