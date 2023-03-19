const sql = require("mssql/msnodesqlv8");
var config = {
  server: "DESKTOP-TT44AT3\\SQLEXPRESS",
  database: "imformation_db",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);
  var request = new sql.Request();
  request.query("select * from imformation_db", function (err, records) {
    if (err) console.log(err);
    else console.log(records);
  })
})
/*
const { reset } = require('nodemon');
     const dboperation = require('./dboperation');
     //var Db=require('./dboperation');

     dboperation.getLoginDetails().then(result=>{
      console.log(result);
     })*/