var data = require('../data').data;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
	/*  title: 'Express1', 
	  comment: "Joe smells funny 2", */
	  foo: {bar: "bar", baz: "baz"},	  
	  posts: data
  });
};