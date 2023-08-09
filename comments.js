// Create web server
// 1. Create a web server
// 2. Handle GET /comments
// 3. Handle POST /comments
// 4. Handle GET /comments/:id
// 5. Handle PUT /comments/:id
// 6. Handle DELETE /comments/:id
// 7. Handle POST /comments/:id/upvote
// 8. Handle POST /comments/:id/downvote

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var app = express();

app.use(bodyParser.json());

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

