var mongo = require('mongodb').MongoClient;
var url   = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url,function(err,db)
	{
		if(err) return console.log(err);
		var collection = db.collection('users');
		collection.update(
			{
				username: "tinatime"
			},{
				$set: {
					age : 40
				}
			},function(err)
		{
			if (err) throw console.log(err);
			console.log('update succesfull');
			db.close();
		});
	});