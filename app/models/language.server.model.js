var mongoose = require("mongoose"), Schema = mongoose.Schema;

var LanguageSchema =  new Schema({
    bookName: {
        type: String,
        required: 'Book Name can not be blank'
    },

    Language: {
        type: String,
        required: 'Language can not be blank'
    },

    Desc: {
        type: String,
        required: 'Description can not be blank'
    },
    
    Img: {
        type: String
    }

});


mongoose.model('Language', LanguageSchema);