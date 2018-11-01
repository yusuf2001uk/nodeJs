'use strict'
var knex = require('knex')({
client: 'mysql',
connection: {
host: 'localhost',
database: 'posts_app',
charset: 'utf8_general_ci',
user: 'root',
password: '521100'
}
});


module.exports= function(req, res,next){
    req.knex =knex;
    next();
}

module.exports.knex=knex;