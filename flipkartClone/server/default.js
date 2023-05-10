
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";//validating the products from product-schema 

const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log('Data imported Succesfully');
    }catch(error){
        console.log('Error while inserting default data',error.message);
    }
}
export default DefaultData;