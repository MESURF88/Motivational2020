module.exports = function(){
    var express = require('express');
    var router = express.Router();
    const fs = require('fs');


   function randomIndex(){
		min = Math.ceil(3);
		max = Math.floor(115);
		return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    /*Random quote function*/
    function getQuotes(res, context, complete){
      var idx = randomIndex();
      var inserts = idx;
              var result = ""
              var quotation = ""
              fs.readFile('quotes_test.json', (err, data) => {
                  if (err) throw err;
                  var quotation = JSON.parse(data);
                  if (quotation.quotes[idx] === undefined){
                    var result = "do or do not there is no try - yoda";
                  }
                  else{
                    var result = quotation.quotes[idx].quote;
                  }
                  context.quotes = result;
                  complete();
              });

      };

    /*Display page initially.*/
    router.get('/', function(req, res){
        var context = {};
        context.quotes = "do or do not there is no try - yoda";
        res.render('home', context);

    });

    /*Display quotes.*/
    router.post('/', function(req, res){
      var callbackCount = 0;
      var context = {};
      getQuotes(res, context, complete);
      function complete(){
          callbackCount++;
          if(callbackCount >= 1){
              res.render('home', context);
          }

      }
  });


    return router;
}();
