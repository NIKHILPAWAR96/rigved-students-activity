let express = require("express");
let parser = require("body-parser");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;

let app = express();
let PORT = 3500;
let dbUrl ="mongodb://localhost:27017"

app.listen(PORT,()=>console.log(`Server is Running at ${PORT} port`));

app.use(parser.json());
app.use(cors());
app.get("/users", (request, response)=>{
    mongoClient.connect(dbUrl,{useNewUrlParser:true}, (error, client)=>{
        if(error) throw error;
        let db = client.db("Nikhil_db");
        let curser = db.collection("employee").find();
        let user = [];
        curser.forEach((doc, err)=>{
            if(err) throw err;
            user.push(doc);

        }, ()=>{
            response.json(user);
            client.close();
        });
    });
});
app.post("/users", (request, response)=>{
  let userDocument = request.body;
  mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client)=>{
      if(error) throw error;
      let db = client.db("Nikhil_db");
      db.collection("employee").insertOne(userDocument, (err, res)=>{
          if(err){
              response.status(409).json({"message": `User with an id ${userDocument._id} exists`});
          }
          response.status(201).json(res);
          client.close();
      });

  });
});
app.get("/users/:id", (request, response)=>{
  let id = parseInt(request.params.id);
  mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client)=>{
      if(error) throw error;
      let db= client.db("Nikhil_db");
      db.collection("employee").findOne({_id:id})
      .then((doc)=>{
          if(doc != null){
              response.json(doc);

          }else{
              response.status(404).json({"message":`Sorry ${id} doesn't exist`});
          }
          client.close();
      });
  });
});
 app.put("/users/:id/:Name", (request, response)=>{
    let id = parseInt(request.params.id);
    let NewName = (request.params.Name);
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error, client)=>{
        if(error) throw error;
        let db = client.db("Nikhil_db");
        db.collection("employee").updateOne({_id:id},{$set:{name : NewName}})
        .then((doc)=>{
            response.json(doc);
            client.close();
        });
    });
});
app.delete("/users/:id",(request, response)=>{
  let id = parseInt(request.params.id);
  mongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
      if(error) throw error;
      let db = client.db("Nikhil_db");
      db.collection("employee").deleteOne({_id:id})
      .then((doc)=>{
          response.json(doc);
          client.close();
      });
  });

});