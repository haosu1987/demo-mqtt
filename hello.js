var express = require('express')
  , router  = express.Router()
  , mqtt    = require('./mqtt')
  , url     = require('url')

/* GET home page. */
router.get('/*', function(req, res, next) {
  var name = url.parse(req.url).pathname;
  var values = name.split('/');
  res.writeHead({
      'Content-Type': 'text/plain'
  });
  if (values.length == 3) {
      var commands = "{\"" + values[1] + "\":\"" + values[2] + "\"}";
      res.write(commands);
   } else {
      res.write("Error 404: file is not found! lenght: " + values.length);
   }
   res.end();
});

module.exports = router;
