module.exports = {
    db: 'mongodb://'+ process.env.IP + '/meandb',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '195033100838280',
        clientSecret: '76cf19a48efe2ebc9a28fd0bafc41a45',
        callbackURL: 'http://' + process.env.IP + '/oauth/facebook/callback'
    }
};