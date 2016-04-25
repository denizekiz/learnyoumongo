var mongo = require('mongodb').MongoClient;
var fa = parseInt(process.argv[2]);
url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url,function(err,db)
	{
		//db gives acces tot he databasea
		var collection = db.collection('parrots');
		collection.find({age : {$gt : fa} },{age:1,name:1,_id:0}).toArray(function(err,documents)
			{
				if(err) return console.log(err);
				console.log(documents);
				db.close();
			});
		
	});