import mongoose from 'mongoose';
//product-schema is for deleting the duplicates in larger number
const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    url: String,//these all the types of items present in the products
    detailUrl: String,
    title: Object,//schema is similar to table in sql and collection in mongodb
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product =mongoose.model('product',productSchema);
export default Product;