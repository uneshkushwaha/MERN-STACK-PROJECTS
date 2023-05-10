
//npm i mongoose to connect mongodb 
import mongoose from "mongoose";

export const connection= async(username,password)=>{
    const URL=`mongodb+srv://cyruspyrus98:ravi123@ecommercewebsite2.skz4pxl.mongodb.net/?retryWrites=true&w=majority`;

    try{
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true} )// connect function takes two arguments i.e url and object

// useUnifiedTopology :mongodb internally use monitoring engine and server directory,useNewUrlParser: to use new version parse
console.log('Database connected Succesfully');

}catch(error) {
        console.log('Error while connecting with the database',error.message);
    }
}
export default connection;

