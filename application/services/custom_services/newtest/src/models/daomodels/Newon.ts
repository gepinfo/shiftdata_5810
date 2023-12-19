
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const NewonSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Nmae: { type: String },
   EmailId: { type: String }
})

const NewonModel = mongoose.model('Newon', NewonSchema, 'Newon');
export default NewonModel;
