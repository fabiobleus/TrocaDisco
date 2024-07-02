import { Schema, model } from "mongoose";

const ProposalSchema = new Schema({
   idProduct: {
       type: String,
       required: true   
   },
   idProductUser: {
       type: String,
       required: true
   },
   idUserProposal: {
       type: String,
       required: true
   },
   idProductProposal: {
    type: String,
    required: false   
},
description: {
    type: String,
    required: true
},
conversation:{
    type: Array,
    },
}

);

const Proposal = model("Proposal", ProposalSchema);

export default Proposal;