import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    
    name: {type: String, required: true, default:""},
    email: {type: String, required: true, unique:true},
    city: {type: String, required: true},
    twitter: {type: String, required: true},
    discord: {type: String, required: true},
    profession: {type: String, default:''},
    organization: {type: String, default:''},
    experience: {type: Number, default:0},
    interest: {type: String, default:''},
    lookingFor: {type: String, default:''},

}, {timestamps: true})


mongoose.models = {}

export default mongoose.model("Member", MemberSchema);
