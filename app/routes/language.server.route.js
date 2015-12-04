var languages = require('../controllers/language.server.controller');

module.exports = function(app) {
    app.route('/api/languages')
    .get(languages.list)
    .post(languages.create);
    
    app.route('/api/languages/:languageId')
    .get(languages.read)
    .put(languages.update)
    .delete(languages.delete);
    
    app.param('languageId', languages.languageByID);
    
};
