var express = require('express'),
    cors    = require('cors'),
    app     = express();

app.use( cors() );

var router = express.Router();

router.get( "/sum", function(req, res) {
    var a = req.query.a,
        b = req.query.b,
        c = parseInt(a) + parseInt(b);

    res.status(200).json(c);
});

app.use( "/", router );

app.listen("4467", function() {
    console.log( "Started listening at 4467" );
});

