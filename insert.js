var mongo = require('mongodb').MongoClient;
var url   = 'mongodb://localhost:27017/learnyoumongo';
var fn    = process.argv[2];
var ln    = process.argv[3];
mongo.connect(url,function(err,db)
	{
		if(err) throw err;
		var collection = db.collection('docs');
		collection.insert(
			{
				firstName: fn ,
				lastName: ln
			},function(err,data)
			{
				if(err) throw err;
				console.log(JSON.stringify({
				firstName: fn ,
				lastName: ln
			}));
				db.close();
			});

	});