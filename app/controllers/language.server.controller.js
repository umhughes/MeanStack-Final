var Language = require("mongoose").model('Language');

var getErrorMessage = function(err) 
{
    if (err.error) {
        for (var errName in err.error)
        {
            if(err.error[errName].message)
            return err.error[errName].message;
            }
        } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res)
{
    var language =  new Language(req.body);
    language.save(function(err) {
        if (err) {
            return res.status(400).send({
                message:getErrorMessage(err)
            });
        } else {
            res.json(language);
        }
    });
};

exports.list = function(req, res) {
    Language.find().sort('-Class')
    .populate('bookName', 'bookName')
     .exec(function(err, languages){
         console.log(err);
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(languages);
        }
    });
};

exports.list = function(req, res) {
    Language.find().sort('-Category')
     .exec(function(err, languages){
         console.log(err);
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(languages);
        }
    });
};

exports.languageByID = function(req, res, next, id) {
    Language.findById(id)
    .exec(function(err, language) {
        if (err) return next (err);
        if(!language) return next(new Error ('failed to load product' + id));
        req.language = language;
        next();
    });
};

exports.read = function(req, res) 
{
    res.json(req.language);
};

exports.update = function(req, res) 
{
    var language = req.language;
    language.productName = req.body.productName;
    language.Category = req.body.Category;
    language.Desc = req.body.Desc;
    language.img = req.body.Img;
    
    language.save(function(err)
    {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            return res.json(language);
        }
    });
};

exports.delete = function(req, res) 
{
    var language = req.language;
    
    language.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(language);
        }
    });
};