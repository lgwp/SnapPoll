var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var router = express.Router();

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// router setup
router.get('/', function(req, res, next) {
	next();
})
/* -------- REST API -------- */

/* ######## DEBUG ######## */

router.get('/', function(req, res) {
	console.log(process.env.DATABASE_URL);
	res.send('Snap Poll REST API')
});

router.get('/debug', function(req, res) {
	console.log(process.env.DATABASE_URL);
	res.send('Hello World!')
});

router.get('/test', function(req, res) {
	res.send("TEST 33");
});

router.get('/db', function(req, res) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		var queryString = "SELECT * FROM test_table";

		client.query(queryString, function(err, result) {
			done();
			if (err) {
				console.error(err);
				res.send("Error " + err);
			} else {
				res.send(result.rows);
			}
		});
	});
});

/* ######## POLL ######## */

router.get('/poll', function(req, res) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {

		console.log("#### pg.connect #### " + client);
		var queryString = "SELECT * FROM polls";
		
		client.query(queryString, function(err, result) {
			done();
			if (err) {
				console.error(err);
				res.send("Error " + err);
			} else {
				res.send(result.rows);
			}
		});
	});
});

router.get('/poll/:id', function(req, res) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		var queryString = "SELECT * FROM polls WHERE poll_id=" + req.params.id + ";";
		
		client.query(queryString, function(err, result) {
			done();
			if (err) {
				console.error(err);
				res.send("Error " + err);
			} else {
				res.send(result.rows);
			}
		});
	});
});

router.post('/poll', function(req, res) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		var queryString
		 = "INSERT INTO polls (creator_id, q_text, allow_multiple_responses) VALUES ('"
			+ req.body.creator_id + "', '" 
			+ req.body.question + "', '"
			+ req.body.allow_multiple_responses + "');";

		client.query(queryString, function(err, result) {
			done();
			if (err) {
				console.error(err);
				res.send("Error " + err);
			} else {
				res.send(result.rows);
			}
		});
	});
});

app.use('/api', router);
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
});
