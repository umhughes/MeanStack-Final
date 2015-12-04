var mongoose = require("mongoose"), Schema = mongoose.Schema;

var LanguageSchema =  new Schema({
    productName: {
        type: String,
        required: 'Product Name can not be blank'
    },

    Category: {
        type: String,
        required: 'Category can not be blank'
    },

    Desc: {
        type: String,
        required: 'Description can not be blank'
    },

});


mongoose.model('Language', LanguageSchema);