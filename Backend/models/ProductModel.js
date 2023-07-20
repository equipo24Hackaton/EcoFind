import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema (
 
      {
         image_url: {type:String},
         name: {type:String},
         description: {type:String},
         ubication: {type:String},
         price: {type:Number},
         created_by: {type:String},
         category: {type:Boolean}
       },
   
   {collection:'products'}
)

export default mongoose.model ('ProductModel',productSchema )