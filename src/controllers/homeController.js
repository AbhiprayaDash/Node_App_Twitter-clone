const ejs = require('ejs');

module.exports.root = function(req, res) {
    return res.render('home_views/home', {title: "Twitter"});
} 