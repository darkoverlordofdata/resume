require('coffee-script');
var huginn = require('huginn');
huginn.build();
huginn.serve(['--port', process.env.PORT]);

